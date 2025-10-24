import { cancelOrderService } from "../../services/sharedServices/cancelOrder.service.js";

export const cancelOrderController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { orderId } = req.params;
    const { reason } = req.body;

    const order = await cancelOrderService(orderId, reason, 'customer');

    return res.status(200).json({
      message: "Đơn hàng đã hủy thành công",
      success: true,
      data: order
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false
    });
  }
};
