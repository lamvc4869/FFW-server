import { uploadToCloudinary  } from "../../utils/cloudinary.js";
import User from "../../models/user.model.js";

const uploadAvatarService = async (userId, imageUrl) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            return 'User không tồn tại';
        }

        user.avatar = await uploadToCloudinary(imageUrl.path);
        await user.save();
        return user.avatar;
    } catch (error) {
        return error.message;
    }
};

export default uploadAvatarService;
