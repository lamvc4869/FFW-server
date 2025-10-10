import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Không có token, vui lòng đăng nhập",
        success: false,
      });
    }

    const token = authHeader.substring("Bearer ".length);
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Token không hợp lệ hoặc đã hết hạn",
      success: false,
    });
  }
};

export default verifyToken;
