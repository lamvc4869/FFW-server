import searchProductByNameService from "../../services/sharedServices/searchProductByName.service.js";

const searchProductByNameController = async (req, res) => {
  try {
    const { name } = req.query;
    const result = await searchProductByNameService(name);

    if (result === `Không tìm thấy sản phẩm "${name}"`) {
      return res.status(404).json({
        message: result,
        success: false,
      });
    }

    return res.status(200).json({
      message: `Danh sách sản phẩm ${name}`,
      count: result.length,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
      error: error.message,
    });
  }
};

export default searchProductByNameController;
