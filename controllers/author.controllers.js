const { results } = require('../config')
const { Authors, sequelize } = require('../models')

const getListAuthors = async (req, res) => {
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
    const authorDetail = await Authors.findOne(
      {
        where: {
          id,
        },
      }
    );
    if (authorDetail) {
      res.status(200).send(results(true, null, { data: authorDetail }));
    } else {
      res.status(404).send(results(false, `${id} is not found`))
    }
  } catch (error) {
    res.status(500).send(error)
  }
}


module.exports = {
  getListAuthors,
  getDetailAuthor
}