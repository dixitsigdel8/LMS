import express from 'express'
import { validate, validateLogin, validateSignup } from '../middleware/authValidate.js'
import { login, register } from '../controllers/user.controller.js'

const router = express.Router()

router.post('/register',validateSignup, validate, register);
router.post('/login',validateLogin, validate, login)

export default router