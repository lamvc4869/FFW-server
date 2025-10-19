import Cart from "../../models/cart.model.js";

const populateCart = async (cartId) => {
    return await Cart.findById(cartId)
        .populate('userId', 'username email firstName lastName')
        .populate('products.productId', 'name price offerPrice image description stock');
};

export { populateCart };
