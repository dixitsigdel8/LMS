import {check, validationResult} from 'express-validator';

export const validateSignup = [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Invalid email address'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 characters long')
];
export const validateLogin = [
    check('email').isEmail().withMessage('Invalid email address'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 characters long')
    
]

//middleware to handle validation errors
export const validate= (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        // const firstError = errors.array()[0].msg;

        return res.status(400).json({erros:errors.array()[0].msg})
    }
    next()
}