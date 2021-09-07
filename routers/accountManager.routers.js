const express = require('express')
const { Accounts } = require('../models')
const { getListAccounts, getDetailAccount, createAccount, updateAccount, deleteAccount } = require('../controllers/accountManager.controllers')
const { authenticate, authorize } = require('../middlewares/auth/verifyToken.midlewares')
const { logFeature } = require('../middlewares/log/logFeature.middlewares')
const { checkExist, checkEmailExists } = require('../middlewares/validations/cheackExistl.middlewares')
const accountManagerRouter = express.Router()

accountManagerRouter.get('/', logFeature('lay danh sach tai khoan'), authenticate, authorize(['admin']), getListAccounts)
accountManagerRouter.get('/:id', logFeature('xem chi tiet tai khoan'), authenticate, authorize(['admin']), getDetailAccount)
accountManagerRouter.post('/', logFeature('tao mot tai khoan moi'), authenticate, authorize(['admin']), checkEmailExists(Accounts), createAccount)
accountManagerRouter.put('/:id', logFeature('cap nhat tai khoan'), authenticate, authorize(['admin']), checkExist(Accounts), checkEmailExists(Accounts), updateAccount)
accountManagerRouter.delete('/:id', logFeature('xoa tai khoan'), authenticate, authorize(['admin']), checkExist(Accounts), deleteAccount)


module.exports = {
  accountManagerRouter
}