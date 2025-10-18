import Cart from "../../models/cart.model.js";
import Product from "../../models/product.model.js";

const addProductToCartService = async (userId, products) => {
    try {
        // Validate input
        if (!Array.isArray(products) || products.length === 0) {
            throw new Error("Products array is required and cannot be empty");
        }

        // Check all products exist and are available
        const productIds = products.map(p => p.productId);
        const existingProducts = await Product.find({
            _id: { $in: productIds },
            isActive: true
        });

        if (existingProducts.length !== productIds.length) {
            throw new Error("Some products not found or not available");
        }

        // Check stock for all products
        for (const product of products) {
            const dbProduct = existingProducts.find(p => p._id.toString() === product.productId);
            if (dbProduct.stock < product.quantity) {
                throw new Error(`Insufficient stock for product: ${dbProduct.name}`);
            }
        }

        // Find or create cart for user
        let cart = await Cart.findOne({ userId, status: 'active' });

        if (!cart) {
            cart = new Cart({
                userId,
                items: [],
                totalAmount: 0
            });
        }

        // Process each product
        const results = {
            added: [],
            updated: [],
            errors: []
        };

        for (const product of products) {
            try {
                const dbProduct = existingProducts.find(p => p._id.toString() === product.productId);

                // Check if product already exists in cart
                const existingItemIndex = cart.items.findIndex(
                    item => item.productId.toString() === product.productId
                );

                if (existingItemIndex > -1) {
                    // Update quantity if product already exists
                    cart.items[existingItemIndex].quantity += product.quantity;
                    results.updated.push({
                        productId: product.productId,
                        name: dbProduct.name,
                        quantity: cart.items[existingItemIndex].quantity
                    });
                } else {
                    // Add new product to cart
                    cart.items.push({
                        productId: product.productId,
                        quantity: product.quantity,
                        price: dbProduct.offerPrice || dbProduct.price
                    });
                    results.added.push({
                        productId: product.productId,
                        name: dbProduct.name,
                        quantity: product.quantity
                    });
                }
            } catch (error) {
                results.errors.push({
                    productId: product.productId,
                    error: error.message
                });
            }
        }

        // Save cart (totalAmount will be calculated by pre-save hook)
        await cart.save();

        // Populate the cart with product details
        const populatedCart = await Cart.findById(cart._id)
            .populate('userId', 'username email firstName lastName')
            .populate('items.productId', 'name price offerPrice image description stock');

        return {
            success: true,
            cart: populatedCart,
            results: results,
            message: `Processed ${products.length} products`
        };
    } catch (error) {
        throw new Error(`Error adding products to cart: ${error.message}`);
    }
};

export { addProductToCartService };
