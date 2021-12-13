const express = require("express");
const app = express();

// Configuring third party packages
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

const env = require("dotenv");
env.config();

// Configure routes
const messagesRoutes = require("./routes/message");
const kafkaRoutes = require("./routes/kafka");
app.use("/message", messagesRoutes);
app.use("/kafka", kafkaRoutes);

// Import in app dependencies
const sequelize = require("./utils/database");
const producer = require("./kafka/producer");
const consumer = require("./kafka/consumer");

// Start kafka consumer and producer
try {
  consumer.consumerConnect("jersey");
} catch (error) {
  console.log(error);
}

// Syncing sequelize models with the database
sequelize
  .sync({ logging: true })
  .then((result) => {
    // Setting up listener to listen on port
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
