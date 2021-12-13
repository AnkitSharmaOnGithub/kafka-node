const env = require("dotenv");
env.config();

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then((result) => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
module.exports = sequelize;
