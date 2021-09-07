const express = require('express')
const { Authors } = require('../models')
const { authenticate, authorize } = require('../middlewares/auth/verifyToken.midlewares')
const { logFeature } = require('../middlewares/log/logFeature.middlewares')
const { checkExist, checkEmailExists } = require('../middlewares/validations/cheackExistl.middlewares')
const { getListAuthors, getDetailAuthor, createAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorManager.controllers')
const authorManagerRouter = express.Router()

authorManagerRouter.get('/', logFeature('lay danh sach tac gia'), authenticate, authorize(['admin']), getListAuthors)
authorManagerRouter.get('/:id', logFeature('lay chi tiet tac gia'), authenticate, authorize(['admin']), getDetailAuthor)
authorManagerRouter.post('/', logFeature('them tac gia moi'), authenticate, authorize(['admin']), createAuthor)
authorManagerRouter.put('/:id', logFeature('cap nhat thong tin tac gia'), authenticate, authorize(['admin']), checkExist(Authors), updateAuthor)
authorManagerRouter.delete('/:id', logFeature('xoa tac gia'), authenticate, authorize(['admin']), checkExist(Authors), deleteAuthor)


module.exports = {
  authorManagerRouter
}