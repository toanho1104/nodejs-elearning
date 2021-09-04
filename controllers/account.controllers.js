const { Accounts } = require('../models')

const getDetailAccount = async (req, res) => {
  const { id } = req.params
  try {
    // const getDetailAccount = await Accounts.findByPk(id)
    res.status(200).send('lay thanh cong')
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getDetailAccount
}