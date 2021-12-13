const express = require("express");
const app = express();

// Configuring third party packages
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

const env = require("dotenv");
env.config();

// Configure routes
const messagesRoutes = require("./routes/message");
app.use("/message", messagesRoutes);

// Import in app dependencies
const sequelize = require("./utils/database");

// Syncing sequelize models with the database
sequelize
  .sync()
  .then((result) => {
    // Setting up listener to listen on port
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
