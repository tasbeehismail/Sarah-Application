import { Router } from "express";
import * as userController from '../user/user.controller.js';

const router = Router();

router.post('/signup', asyncHandler(userController.signup));
router.post('/login', asyncHandler(userController.login));
router.post('/logout', asyncHandler(userController.logout));
router.put('/verify-email', asyncHandler(userController.verifyEmail))
router.post('/verify-otp', asyncHandler(userController.verifyOTP));

export default router;