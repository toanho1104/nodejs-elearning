const express = require('express')
const { accountRoute } = require('./account.routers')
const { accountManagerRouter } = require('./accountManager.routers')
const { authRouter } = require('./auth.routers')
const { courseMannagerRouter } = require('./courseMannager.routers')

const rootRouter = express.Router()

rootRouter.use('/auth', authRouter)
rootRouter.use('/account', accountRoute)
rootRouter.use('/accountManager', accountManagerRouter)
rootRouter.use('/courseManager', courseMannagerRouter)

module.exports = rootRouter