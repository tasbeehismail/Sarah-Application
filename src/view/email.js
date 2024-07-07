const emailHtml = (token, username) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Verification</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                .header {
                    background-color: #007BFF;
                    color: #fff;
                    padding: 20px;
                    text-align: center;
                }
                .content {
                    padding: 20px;
                    text-align: center;
                }
                .button {
                    background-color: #007BFF;
                    color: #fff;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    display: inline-block;
                    margin-top: 20px;
                }
                .footer {
                    background-color: #f4f4f4;
                    color: #777;
                    padding: 10px;
                    text-align: center;
                    font-size: 12px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Email Verification</h1>
                </div>
                <div class="content">
                    <p>Hi ${username},</p>
                    <p>Thank you for registering with us. Please click the button below to verify your email address:</p>
                    <a href="http://localhost:${process.env.PORT}/user/verify-email?token=${token}" class="button">Verify Email</a>
                    <p>If you did not create an account, no further action is required.</p>
                </div>
                <div class="footer">
                    <p>&copy; 2024 My Company. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `
}

export default emailHtml;