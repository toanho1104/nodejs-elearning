const { Accounts, sequelize } = require("../models");
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { results, key } = require("../config");


const register = async (req, res) => {
  const { email, passWord, fullName } = req.body;
  try {
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(passWord, salt);
    const newUser = await Accounts.create({ email, passWord: hashPassword, fullName, avatar: null, TypeID: 1, stastusID: 1 });
    res.status(200).send(results(true, null, newUser));
  } catch (error) {
    res.status(500).send(error)
  }
}

const signIn = async (req, res) => {
  const { email, passWord } = req.body
  try {
    const [accountLogin] = await sequelize.query(`
    SELECT * FROM Accounts 
    INNER JOIN AccountTypes
    ON Accounts.TypeID=AccountTypes.id
    WHERE Accounts.email="${email}"
    `)
    // res.status(200).send(results(true, 'login success', { accountLogin }))
    if (accountLogin[0]) {
      const isAuth = bcryptjs.compareSync(passWord, accountLogin[0].passWord)
      if (isAuth) {
        const payload = {
          id: accountLogin[0].id,
          type: accountLogin[0].name,
        }
        console.log(payload)
        const token = jwt.sign(payload, key)
        res.status(200).send(results(true, 'login success', { token }))
      } else {
        res.status(401).send(results(false, "password doesn't match"))
      }
    } else {
      res.status(401).send(results(false, "email don't match"));
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  register,
  signIn
}