import jwt from 'jsonwebtoken';
import AppError from '../utils/appError.js';

export const generateToken = (user) => {
    return jwt.sign(
      { username: user.username, id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
};

export const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers.token;

  if (!authorizationHeader) {
      return next(new AppError('Authorization header is required', 401));
  }

  const token = authorizationHeader.split(' ')[1];

  if (!token) {
      return next(new AppError('JWT must be provided', 401));
  }

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
  } catch (error) {
      return next(new AppError('Invalid or expired token', 401));
  }
};
