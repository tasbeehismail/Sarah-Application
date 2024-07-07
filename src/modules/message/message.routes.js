import { Router } from "express";
import * as messageController from '../message/message.controller.js';
import asyncHandler from "../../utils/asyncHandler.js";
import { verifyToken as authenticate } from "../../services/auth.service.js";
import { schema } from "../../validation/message.js"
import { validate } from "../../services/validator.service.js";

const router = Router();

router.get('/', authenticate, asyncHandler(messageController.readMessages));

router.post('/:receiver', validate(schema), asyncHandler(messageController.sendMessage))

router.route('/:message_id')
    .all(authenticate)
    .get(asyncHandler(messageController.readMessage))
    .delete(asyncHandler(messageController.deleteMessage));
    
export default router;