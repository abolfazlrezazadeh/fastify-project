import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "postgres://postgres:pass123@localhost:5433/fastify"
);

const DbConnectionCheck = async () => {
    try {
        await sequelize.authenticate();
        console.log("connection is ok");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};

DbConnectionCheck();