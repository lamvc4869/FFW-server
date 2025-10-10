import refreshTokenService from "../services/refreshTokenService.service.js";

const refreshTokenController = async (req, res) => {
  try {
    const token = req.headers["x-refresh-token"] || req.body?.refreshToken;

    const result = await refreshTokenService(token);

    if (typeof result === "string") {
      return res.status(401).json({
        success: false,
        message: result,
      });
    }

    return res.status(200).json({
      success: true,
      accessToken: result.accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Lỗi server",
      error,
    });
  }
};

export default refreshTokenController;
