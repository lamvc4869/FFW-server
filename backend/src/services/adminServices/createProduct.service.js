import Product from "../../models/product.model.js";

const createProduct = async (productData) => {
    try {
        const {name, price, category, image} = productData;

        if (!name || !price || !category || !image || image.length === 0) {
            return "Thiếu thông tin bắt buộc: name, price, category, image";
        }

        const existingProduct = await Product.findOne({name});
        if (existingProduct) {
            return "Sản phẩm với tên này đã tồn tại";
        }

        if (price <= 0) {
            return "Giá sản phẩm phải lớn hơn 0";
        }

        if (productData.offerPrice && productData.offerPrice >= price) {
            return "Giá khuyến mãi phải nhỏ hơn giá gốc";
        }

        if (productData.stock && productData.stock < 0) {
            return "Số lượng tồn kho không thể âm";
        }

        const newProduct = new Product(productData);

        await newProduct.save();

        return newProduct;
    } catch (error) {
        return error.message;
    }
};

export default createProduct;
