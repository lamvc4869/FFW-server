import Product from "../../models/product.model.js";

const getProductDetailService = async (productId) => {
  try {
    const product = await Product.findOne({ _id: productId, isActive: true });

    if (!product) {
      return null; 
    }

    return product;
  } catch (error) {
    throw new Error("Không thể lấy chi tiết sản phẩm: " + error.message);
  }
};

export default getProductDetailService;
