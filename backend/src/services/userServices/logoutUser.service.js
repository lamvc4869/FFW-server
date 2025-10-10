import User from "../../models/user.model.js";

const logoutUserService = async (userId) => {
  try {
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return "User không tồn tại";
    }
    existingUser.refreshToken = null;
    await existingUser.save();
    return "Đăng xuất thành công";
  } catch (error) {
    throw error;
  }
};

export default logoutUserService;
