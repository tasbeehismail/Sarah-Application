import joi from 'joi';

export const schema = joi.object({
    username: joi.string().min(3).max(30).lowercase().trim().required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    confirmPassword: joi.string().required().valid(joi.ref('password')),
})