import { Router } from "express";
import * as messageController from '../message/message.controller.js';

const router = Router();

router.route('/')
    .post(asyncHandler(messageController.sendMessage)) 
    .get(asyncHandler(messageController.readMessages));

router.route('/:message_id')
    .get(asyncHandler(messageController.readMessage))
    .patch(asyncHandler(messageController.updateMessage))
    .delete(asyncHandler(messageController.deleteMessage));
    
export default router;