import { createOrderService } from "../../services/sharedServices/createOrder.service.js";

export const createOrderController = async (req, res) => {
  try {
    const userId = req.user.id;
    const orderData = req.body;

    const order = await createOrderService(userId, orderData);

    return res.status(201).json({
      message: "Đơn hàng đã được tạo",
      success: true,
      data: order
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
      success: false,
      error: error.message
    });
  }
};
