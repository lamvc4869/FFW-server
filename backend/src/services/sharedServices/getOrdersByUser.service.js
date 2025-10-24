import Order from "../../models/order.model.js";

export const getOrdersByUserService = async (userId) => {
  try {
    return await Order.find({ userId }).sort({ createdAt: -1 });
  } catch (error) {
    throw new Error(error.message);
  }
};
