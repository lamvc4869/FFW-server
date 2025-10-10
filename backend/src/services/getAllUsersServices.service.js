import User from "../models/user.model.js";

const getAllUserService = async () => {
    try {
        const users = await User.find();
        const listUsers = users.map((user) => {
            const { password: _pw, __v, refreshToken: _rt, ...safeUser } = user.toObject();
            return safeUser;
        });
        return listUsers;
    } catch (error) {
        throw error;
    }
};

export default getAllUserService;