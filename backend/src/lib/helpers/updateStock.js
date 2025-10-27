import Product from "../../models/product.model.js";

const updateStockOfProducts = async (cartProducts) => {
  for (const item of cartProducts) {
    await Product.findByIdAndUpdate(
      item.productId,
      {
        $inc: { stock: -item.quantity },
      },
      { new: true }
    );
  }
};

const restoreStockOfProducts = async (orderProducts) => {
  for (const item of orderProducts) {
    await Product.findByIdAndUpdate(
      item.productId,
      {
        $inc: { stock: item.quantity },
      },
      { new: true }
    );
  }
};

export { updateStockOfProducts, restoreStockOfProducts };
