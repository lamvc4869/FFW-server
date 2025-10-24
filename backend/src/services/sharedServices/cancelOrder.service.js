import Order from "../../models/order.model.js";

export const cancelOrderService = async (orderId, reason, cancelledBy) => {
  try {
    const order = await Order.findById(orderId);
    if (!order) throw new Error("Không tìm thấy đơn hàng");

    if (order.orderStatus !== 'processing') {
      throw new Error("Chỉ có đơn đang xử lý mới hủy được");
    }

    order.orderStatus = 'cancelled';
    order.cancelReason = reason;
    order.cancelledBy = cancelledBy;
    order.cancelledAt = new Date();

    return await order.save();
  } catch (error) {
    throw new Error(error.message);
  }
};
