const express = require('express')
const { accountRoute } = require('./account.routers')
const { accountManagerRouter } = require('./accountManager.routers')
const { authRouter } = require('./auth.routers')

const rootRouter = express.Router()

rootRouter.use('/account', accountRoute)
rootRouter.use('/accountManager', accountManagerRouter)
rootRouter.use('/auth', authRouter)

module.exports = rootRouter