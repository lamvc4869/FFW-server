import getOrderByIdService from "./getOrderById.service.js";
import { restoreStockOfProducts } from "../../lib/helpers/updateStock.js";

const cancelOrderService = async (userId, orderId) => {
  const order = await getOrderByIdService(userId, orderId);

  if (order.orderStatus === "cancelled") {
    throw new Error("Đơn hàng đã được hủy trước đó");
  }

  if (order.orderStatus !== "pending") {
    throw new Error("Đơn hàng chỉ có thể hủy khi ở trạng thái đang chờ xử lý");
  }

  order.orderStatus = "cancelled";
  if (order.paymentStatus === "paid") {
    order.paymentStatus = "refunded";
  }

  await order.save();

  await restoreStockOfProducts(order.products);

  return "Đơn hàng đã được hủy thành công";
};

export default cancelOrderService;
