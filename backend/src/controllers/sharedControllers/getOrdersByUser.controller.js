import { getOrdersByUserService } from "../../services/sharedServices/getOrdersByUser.service.js";

export const getOrdersByUserController = async (req, res) => {
  try {
    const userId = req.user.id;

    const orders = await getOrdersByUserService(userId);

    return res.status(200).json({
      message: "Lấy danh sách đơn hàng thành công",
      success: true,
      data: orders
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
      success: false,
      error: error.message
    });
  }
};
