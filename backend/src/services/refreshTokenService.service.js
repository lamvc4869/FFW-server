import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const refreshTokenService = async (token) => {
  try {
    if (!token) return "Không có refresh token";

    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== token) {
      return "Refresh token không hợp lệ";
    }

    const newAccessToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES }
    );

    const newRefreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRES }
    );

    user.refreshToken = newRefreshToken;
    await user.save();

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  } catch (error) {
    return "Refresh token hết hạn hoặc không hợp lệ";
  }
};

export default refreshTokenService;
