import updateUserService from "../../services/adminServices/updateUser.service.js";

const updateUserController = async (req, res) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;
    
    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({
        message: "Không có dữ liệu để cập nhật",
        success: false,
      });
    }

    if (updateData.role && !['user', 'admin'].includes(updateData.role)) {
      return res.status(400).json({
        message: "Role không hợp lệ",
        success: false,
      });
    }

    const result = await updateUserService(userId, updateData);
    
    if (typeof result === 'string') {
      return res.status(400).json({
        message: result,
        success: false,
      });
    }

    return res.status(200).json({
      message: "Cập nhật user thành công",
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
      success: false,
      error: error.message,
    });
  }
};

export default updateUserController;
