import Message from '../../../database/models/message.js';
import AppError from '../../utils/appError.js';

export const readMessages = async (req, res, next) => {
    const messages = await Message.find({ receiver: req.user.id }).select('content -_id');
    if(!messages.length){  
        return next(new AppError('Messages not found', 404));
    }
    res.status(200).json({
        message: 'Messages fetched successfully',
        status: 'success',
        data: messages
    });
}

export const sendMessage = async (req, res) => {
    const { receiver } = req.params;
    const { content } = req.body;
    const message = await Message.create({ receiver, content });
    res.status(201).json({
        message: "Message sent successfully",
        status: 'success',
        data: message
   });
}

export const deleteMessage = async (req, res, next) => {
    const { message_id } = req.params;
    const message = await Message.findByIdAndDelete(message_id);
    if(message.receiver != req.user.id){
        return next(new AppError('Unauthorized access', 401));
    }
    if(!message){
        return next(new AppError('Message not found', 404));
    }
    res.status(200).json({
        message: 'Message deleted successfully',
        status: 'success',
        data: message
    });
}

export const readMessage = async (req, res, next) => {
    const { message_id } = req.params;
    const message = await Message.findById(message_id).select('content -_id');
    if(message.receiver != req.user.id){
        return next(new AppError('Unauthorized access', 401));
    }
    if(!message){
        return next(new AppError('Message not found', 404));
    }
    res.status(200).json({
        message: 'Message fetched successfully',
        status: 'success',
        data: message
    });
}
