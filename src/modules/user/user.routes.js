import { Router } from "express";
import * as userController from '../user/user.controller.js';
import { checkEmail } from "../../middleware/checkEmail.js";
import asyncHandler from '../../utils/asyncHandler.js';

const router = Router();

router.post('/signup', asyncHandler(checkEmail), asyncHandler(userController.signup));
router.post('/login', asyncHandler(userController.login));

export default router;