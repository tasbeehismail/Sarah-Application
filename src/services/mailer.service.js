import nodemailer from "nodemailer";
const sendEmail = async (to, subject, htmlContent) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASS,
        },
    });

    const info = await transporter.sendMail({
        from: `"Tasbeeh Ismail" <${process.env.MAILER_USER}>`,
        to,
        subject,
        html: htmlContent,
    });

    console.log("Message sent: %s", info.messageId);
};

export default sendEmail;
