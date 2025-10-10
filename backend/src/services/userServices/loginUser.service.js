import User from "../../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginUserService = async (payload) => {
  try {
    const { email, password } = payload;
    if (!email || !password) {
      return "Nhập thiếu thông tin";
    }

    const existingAccount = await User.findOne({ email });
    if (!existingAccount) {
      return "Tài khoản không tồn tại!\nVui lòng đăng ký tài khoản";
    }

    const isValid = await bcrypt.compare(password, existingAccount.password);
    if (!isValid) {
      return "Sai mật khẩu";
    }

    const accessToken = jwt.sign(
      {
        id: existingAccount._id,
        email: existingAccount.email,
        role: existingAccount.role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES,
      }
    );

    const refreshToken = jwt.sign(
      {
        id: existingAccount._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES,
      }
    );

    existingAccount.refreshToken = refreshToken;
    await existingAccount.save();

    const { password: _pw, __v, refreshToken: _rt, ...safeUser } = existingAccount.toObject();

    return {
        user: safeUser,
        accessToken,
        refreshToken,
    }
  } catch (error) {
    throw error;
  }
};

export default loginUserService;
