import getProductDetailService from "../../services/sharedServices/getProductDetail.service.js";

const getProductDetailController = async (req, res) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      return res.status(400).json({
        message: "Thiếu productId",
        success: false,
      });
    }

    const product = await getProductDetailService(productId);

    if (!product) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm hoặc sản phẩm không hoạt động",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Lấy chi tiết sản phẩm thành công",
      success: true,
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server khi lấy chi tiết sản phẩm",
      success: false,
      error: error.message,
    });
  }
};

export default getProductDetailController;
