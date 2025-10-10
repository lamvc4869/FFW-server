import logoutUserService from "../services/logoutUserService.service.js";

const logoutUserController = async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await logoutUserService(userId);
    if (result === "User không tồn tại") {
      return res.status(404).json({
        message: result,
        success: false,
      });
    }
    return res.status(200).json({
      message: result,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};

export default logoutUserController;
