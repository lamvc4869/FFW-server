import updateProductService from "../../services/adminServices/updateProduct.service.js";

const updateProductController = async (req, res) => {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        const updateFiles = req.files;

        const result = await updateProductService(productId, updateData, updateFiles);

        if (typeof result === 'string') {
            return res.status(400).json({
                message: result,
                success: false,
            });
        }

        return res.status(200).json({
            message: 'Cập nhật dữ liệu thành công',
            success: true,
            data: result,
        });

    }
    catch (error) {
        return res.status(500).json({
            message: 'Lỗi server',
            error: error.message,
        });
    }
};

export default updateProductController;
