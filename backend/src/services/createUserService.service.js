import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

const createUserService = async (userData) => {
    try {
        const { email, password } = userData;
        if (!email || !password) {
            return 'Không được nhập thiếu thông tin nào';
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return 'Email đã được sử dụng';
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: hashedPassword
        });

        await newUser.save();
        return {
            email
        };
    } catch (error) {
        throw error;
    }
};

export default createUserService;