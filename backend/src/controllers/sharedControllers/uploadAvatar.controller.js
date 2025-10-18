import uploadAvatarService from "../../services/sharedServices/uploadAvatar.service.js";

const uploadAvatarController = async (req, res) => {
    try {
        const { userId } = req.params;
        const file = req.file;

        const result = await uploadAvatarService(userId, file);
        if (result === 'User không tồn tại') {
            return res.status(404).json({
                message: result,
                success: false,
            });
        }

        return res.status(200).json({
            message: 'Cập nhật ảnh đại diện thành công',
            success: true,
            avatar: result,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Lỗi server',
            error: error.message,
        });
    }
};

export default uploadAvatarController;
