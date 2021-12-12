const express = require("express");
const env = require("dotenv");
env.config();

const app = express();

// Configure routes
const messagesRoutes = require("./routes/message");
app.use("/message", messagesRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}`);
});
