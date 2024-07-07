import { Router } from "express";
import * as userController from '../user/user.controller.js';
import { checkEmail } from "../../middleware/checkEmail.js";
import asyncHandler from '../../utils/asyncHandler.js';
import { schema } from "../../validation/user.js"
import { validate } from "../../services/validator.service.js";

const router = Router();

router.post('/signup',validate(schema),  asyncHandler(checkEmail), asyncHandler(userController.signup));
router.post('/login', asyncHandler(userController.login));
router.put('/verify-email', asyncHandler(userController.verifyEmail))

export default router;