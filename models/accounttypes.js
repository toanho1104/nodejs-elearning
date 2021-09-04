'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccountTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Accounts }) {
      this.hasMany(Accounts, {
        foreignKey: "TypeID",
      });
    }
  };
  AccountTypes.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AccountTypes',
  });
  return AccountTypes;
};