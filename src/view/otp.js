const otpHtml = (otp, username) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>OTP Verification</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #555;
                }
                .otp {
                    display: inline-block;
                    font-size: 24px;
                    font-weight: bold;
                    padding: 10px 20px;
                    background-color: #f0f0f0;
                    border-radius: 4px;
                    margin-top: 10px;
                    color: #333;
                }
                .footer {
                    margin-top: 20px;
                    color: #777;
                    font-size: 12px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>OTP Verification</h1>
                <p>Dear ${username},</p>
                <p>Your One-Time Password (OTP) for verification is:</p>
                <div class="otp">${otp}</div>
                <p>Please use this OTP to complete your verification process. Do not share this OTP with anyone.</p>
                <p>If you did not request this OTP, please ignore this email.</p>
                <p>Thank you!</p>
                <div class="footer">
                    <p>&copy; 2024 My Company. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `
}

export default otpHtml;