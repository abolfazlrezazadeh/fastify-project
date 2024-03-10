import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/sequelize.config.js  ";

export class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      // creat auto
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      // its by default is true
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    accessToken: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
  },
  { sequelize, modelName: "user" }
);
const forceSync = false
User.sync({ force: forceSync }).then((result) => {
  // This will log the result of the sync operation
  console.log(result);
}).catch(err =>{
  // This will log any error that occurs during the sync operation
  console.error(err)
})
