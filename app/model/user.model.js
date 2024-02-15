import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/sequelize.config";

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
    username: {
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
  },
  { sequelize, name: "user" }
);

User.sync({ force }).then((result) => {
  console.log(result);
});
