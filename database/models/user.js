import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmEmail: {
        type: Boolean,
        default: false
    },
    otp: String, 
    otpExpires: Date 
}, { timestamps: true });

const User = model('User', userSchema);
export default User;
