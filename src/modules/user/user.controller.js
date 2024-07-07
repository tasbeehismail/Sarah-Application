import User from '../../../database/models/user.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../services/auth.service.js';
import AppError from '../../utils/appError.js';

export const signup = async (req, res, next) => {
    const { username, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    let user = await User.create({ username, email, password: hashedPassword });

    user.password = undefined;

    res.status(201).json({ message: 'User created successfully', data: user });
}

export const login = async (req, res, next) => {
    const { email, password } = req.body; 
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return next(new AppError('Invalid email or password', 401));
    }

    const token = generateToken(user);
    return res.status(200).json({ message: 'User logged in successfully', Token: token });
}


