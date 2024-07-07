import User from '../../../database/models/user.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../services/auth.service.js';
import AppError from '../../utils/appError.js';
import sendVerificationEmail from '../../services/user.service.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    let user = await User.create({ username, email, password: hashedPassword });
    
    await sendVerificationEmail(user);

    user.password = undefined;

    res.status(201).json({ message: 'User created successfully. Verification email sent.', data: user });
}

export const login = async (req, res, next) => {
    const { email, password } = req.body; 
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return next(new AppError('Invalid email or password', 401));
    }
    if (!user.confirmEmail) {
        return res.status(403).json({ message: 'Email not verified. Please verify your email first.' });
    }
    const token = generateToken(user);
    return res.status(200).json({ message: 'User logged in successfully', Token: token });
}

export const verifyEmail = async (req, res) => {
    const { token } = req.query; 
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await User.findOneAndUpdate({ email: decoded.email }, { confirmEmail: true });

    res.status(200).json({ message: 'Email verified successfully' });
};

