const express = require('express')
const { Accounts } = require('../models')
const { register, signIn } = require('../controllers/auth.controllers')
const { logFeature } = require('../middlewares/log/logFeature.middlewares')
const { checkEmailExists } = require('../middlewares/validations/cheackExistl.middlewares')
const authRouter = express.Router()

authRouter.post('/register', logFeature('dang ky tai khoan'), checkEmailExists(Accounts), register)
authRouter.post('/signIn', logFeature('dang nhap'), signIn)
module.exports = {
  authRouter
}