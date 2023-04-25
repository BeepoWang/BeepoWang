import { DataTypes } from "sequelize"

const sequelize = require('../database/mysql/pool')

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user: DataTypes.STRING,
  role_id: DataTypes.INTEGER,
  status: DataTypes.TINYINT
})

module.exports = User
