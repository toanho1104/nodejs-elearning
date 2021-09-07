const { results } = require('../config')
const bcryptjs = require('bcryptjs');
const { Accounts, sequelize, Authors } = require('../models')

const getListAuthors = async (req, res) => {
  const { id } = req.account
  try {
    const authorList = await Authors.findAll()
    res.status(200).send(results(true, undefined, { data: authorList }))
  } catch (error) {
    res.status(500).send(error)
  }
}
const getDetailAuthor = async (req, res) => {
  const { id } = req.params
  try {
    const authorDetail = await Authors.findOne({ where: { id } })
    if (authorDetail) {
      res.status(200).send(results(true, undefined, { data: authorDetail }))
    } else {
      res.status(404).send(results(false, `Id ${id} Not Found`));
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
const createAuthor = async (req, res) => {
  const { fullName, avatar } = req.body;
  try {

    const newUser = await Authors.create({ fullName, avatar });
    res.status(200).send(results(true, null, { data: newUser }));

  } catch (error) {
    res.status(500).send(error)
  }
}
const updateAuthor = async (req, res) => {
  const { id } = req.params
  const { fullName, avatar } = req.body;
  console.log(fullName, avatar)
  try {
    await Authors.update(
      { fullName, avatar },
      {
        where: {
          id,
        },
      }
    );

    const authorDetail = await Authors.findOne({ where: { id } })
    res.status(200).send(results(true, null, { data: authorDetail }));
  } catch (error) {
    res.status(500).send(error)
  }
}
const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    try {
      await Authors.destroy({
        where: {
          id,
        },
      });
      res.status(200).send(results(true, 'delete user successfully'));
    } catch (error) {
      res.status(500).send(error);
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getListAuthors,
  getDetailAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor
}