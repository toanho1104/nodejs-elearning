const { results } = require("../../config");

const checkEmailExists = (Model) => async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  try {
    const checkEmail = await Model.findOne({ where: { email } });
    if (checkEmail) {
      res.status(409).send(results(false, 'Email already exists'));
    } else {
      next();
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkAccountExist = (Model) => async (req, res, next) => {
  const { id } = req.params;
  try {
    const detail = await Model.findOne({ where: { id } });
    if (detail) {
      next();
    } else {
      res.status(404).send(results(false, `Account does not exist`));
    }
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = {
  checkEmailExists,
  checkAccountExist
}