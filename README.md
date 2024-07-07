# Sarahah Application

## Features

- **Anonymous Messaging**: Users can send messages without revealing their identities.
- **User Authentication**: Signup, login, and email verification.
- **Message Management**: Users can read and delete messages.
- **Email and OTP Verification**: Users can verify their email addresses and OTP codes.

## Project Structure

- **Models**: Contains Mongoose schemas for users and messages.
- **Middleware**: Custom middleware for handling specific tasks such as email existence checks and error handling.
- **Modules**: Organized routes and controllers for messages and users.
- **Services**: Utility services for authentication, OTP management, mailer, and validation.
- **Utils**: Helper functions and classes, including error handling and async operation management.
- **Validation**: Schemas for validating user and message data.
- **Views**: Email templates for OTP verification and email confirmation with a secure token.

## Environment Variables

- `PORT`: The port number on which the server runs.
- `JWT_SECRET`: Secret key for JWT authentication.
- `MAILER_USER`: Email address used for sending emails.
- `MAILER_PASS`: Password for the mailer email account.
- `MONGO_URI`: MongoDB connection URI.

