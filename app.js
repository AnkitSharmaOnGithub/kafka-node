const express = require("express");

// Configuring third party packages
const bodyparser = require("body-parser");
bodyparser.urlencoded({ extended: true });
const env = require("dotenv");
env.config();

const app = express();

// Configure routes
const messagesRoutes = require("./routes/message");
app.use("/message", messagesRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}`);
});
