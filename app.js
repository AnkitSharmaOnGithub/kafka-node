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

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}`);
});
