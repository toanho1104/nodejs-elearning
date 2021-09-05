const { results } = require('../config')
const bcryptjs = require('bcryptjs');
const { Accounts, sequelize } = require('../models')

const getListAccounts = async (req, res) => {
  const { id } = req.account
  try {
    const [accountList] = await sequelize.query(`
    SELECT Ac.id , Ac.email, Ac.fullName,Ac.avatar, Act.name as type, Acs.name as status, Act.name as type, Ac.createdAt, Ac.updatedAt FROM Accounts as Ac
    INNER JOIN AccountTypes as Act
    ON Ac.TypeID=Act.id
    INNER JOIN AccountStastus as Acs
    ON Ac.stastusID=Acs.id
    WHERE Ac.id NOT LIKE ${id}
    `)
    res.status(200).send(results(true, undefined, { data: accountList }))
  } catch (error) {
    res.status(500).send(error)
  }
}
const getDetailAccount = async (req, res) => {
  const { id } = req.params
  try {
    const [accountDetail] = await sequelize.query(`
      SELECT Ac.id , Ac.email, Ac.fullName,Ac.avatar, Act.name as type, Acs.name as status, Act.name as type, Ac.createdAt, Ac.updatedAt FROM Accounts as Ac
      INNER JOIN AccountTypes as Act
      ON Ac.TypeID=Act.id
      INNER JOIN AccountStastus as Acs
      ON Ac.stastusID=Acs.id
      WHERE Ac.id = ${id}
    `)
    if (accountDetail[0]) {
      res.status(200).send(results(true, undefined, { data: accountDetail[0] }))
    } else {
      res.status(404).send(results(false, `Id ${id} Not Found`));
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
const createAccount = async (req, res) => {
  const { email, passWord, fullName, } = req.body;
  try {
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(passWord, salt);
    const newUser = await Accounts.create({ email, passWord: hashPassword, fullName, avatar: null, TypeID: 2, stastusID: 1 });
    const [accountDetail] = await sequelize.query(`
    SELECT Ac.id , Ac.email, Ac.fullName,Ac.avatar, Act.name as type, Acs.name as status, Act.name as type, Ac.createdAt, Ac.updatedAt FROM Accounts as Ac
    INNER JOIN AccountTypes as Act
    ON Ac.TypeID=Act.id
    INNER JOIN AccountStastus as Acs
    ON Ac.stastusID=Acs.id
    WHERE Ac.email = "${email}"
    `)
    res.status(200).send(results(true, null, { data: accountDetail[0] }));
  } catch (error) {
    res.status(500).send(error)
  }
}
const updateAccount = async (req, res) => {
  const { id } = req.params
  const { email, fullName, TypeID, stastusID } = req.body
  try {
    await Accounts.update(
      { email, fullName, TypeID, stastusID },
      {
        where: {
          id,
        },
      }
    );
    const [accountDetail] = await sequelize.query(`
    SELECT Ac.id , Ac.email, Ac.fullName,Ac.avatar, Act.name as type, Acs.name as status, Act.name as type, Ac.createdAt, Ac.updatedAt FROM Accounts as Ac
    INNER JOIN AccountTypes as Act
    ON Ac.TypeID=Act.id
    INNER JOIN AccountStastus as Acs
    ON Ac.stastusID=Acs.id
    WHERE Ac.id = ${id}
    `)
    res.status(200).send(results(true, null, { data: accountDetail[0] }));
  } catch (error) {
    res.status(500).send(error)
  }
}
const deleteAccount = async (req, res) => {
  //  const accountList =Accounts.findAll()
  try {
    const { id } = req.params;
    try {
      await Accounts.destroy({
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
  getListAccounts,
  getDetailAccount,
  createAccount,
  updateAccount,
  deleteAccount
}