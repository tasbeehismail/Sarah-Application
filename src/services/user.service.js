import emailHtml from '../view/email.js';
import sendEmail from '../services/mailer.service.js';
import { generateToken } from '../services/auth.service.js';

const sendVerificationEmail = async (user) => {
  const token = generateToken(user);
  const htmlContent = emailHtml(token, user.username);
  await sendEmail(user.email, "Email Verification", htmlContent)
};

export default sendVerificationEmail