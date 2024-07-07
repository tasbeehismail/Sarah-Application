import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  receiver: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });

const Message = model('Message', messageSchema);
export default Message;
