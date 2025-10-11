import deleteUserService from "../../services/adminServices/deleteUser.service.js";

const deleteUserController = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await deleteUserService(userId);
    
    if (typeof result === 'string') {
      return res.status(400).json({
        message: result,
        success: false,
      });
    }

    return res.status(200).json({
      message: "Xóa user thành công",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
      success: false,
      error: error.message,
    });
  }
};

export default deleteUserController;
