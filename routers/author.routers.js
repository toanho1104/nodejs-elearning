const express = require('express')
const { getListAuthors, getDetailAuthor } = require('../controllers/author.controllers')
const { authenticate } = require('../middlewares/auth/verifyToken.midlewares')
const { logFeature } = require('../middlewares/log/logFeature.middlewares')

const authorRoute = express.Router()

authorRoute.get('/', logFeature('lay danh sach tac gia'), getListAuthors)
authorRoute.get('/:id', logFeature('lay chi tiet tac gia'), getDetailAuthor)

module.exports = {
  authorRoute
}