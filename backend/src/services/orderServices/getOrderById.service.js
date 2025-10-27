import getAllOrdersService from "./getAllOrders.service.js";

const getOrderByIdService = async (userId, orderId) => {
  const orders = await getAllOrdersService(userId);
  const order = orders.find((ord) => ord._id.toString() === orderId);
  if (!order) {
    throw new Error("Đơn hàng không tồn tại");
  }
  return order;
};

export default getOrderByIdService;
