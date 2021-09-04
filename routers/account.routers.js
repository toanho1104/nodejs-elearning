const express = require('express')
const { getDetailAccount } = require('../controllers/account.controllers')

const accountRoute = express.Router()

accountRoute.get('/:id', getDetailAccount)

module.exports = {
  accountRoute
}