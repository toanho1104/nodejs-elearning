const express = require('express')
const { getDetailAccount, updateAccount } = require('../controllers/account.controllers')
const { authenticate } = require('../middlewares/auth/verifyToken.midlewares')
const { logFeature } = require('../middlewares/log/logFeature.middlewares')

const accountRoute = express.Router()

accountRoute.get('/', logFeature('lay thong tin tai khoan'), authenticate, getDetailAccount)
accountRoute.put('/', logFeature('cap nhat thon tin tai khoan'), authenticate, updateAccount)

module.exports = {
  accountRoute
}