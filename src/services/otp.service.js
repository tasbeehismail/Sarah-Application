import otpHtml from '../view/otp.js';
import sendEmail from '../services/mailer.service.js';
export const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Generates a 4-digit OTP
};

export const sendOTP = async (user) => {
    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
    await user.save();

    const htmlContent = otpHtml(otp, user.name);

    try {
        await sendEmail(user.email, "Email Verification OTP", htmlContent);
        return { success: true, message: 'OTP sent successfully' };
    } catch (error) {
        return { success: false, message: 'Error sending OTP', error: error.message };
    }
};

export const verifyOTP = async (user, otp) => {
    if (user.otp !== otp || user.otpExpires < Date.now()) {
        return { success: false, message: 'Invalid or expired OTP' };
    }
    user.confirmEmail = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();
    return { success: true, message: 'Email verified successfully' };
};