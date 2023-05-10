const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.MONGO_URL;
const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoServer = process.env.MONGO_SERVER;
const mongoDBName = process.env.MONGO_DBNAME;

const connectionString = `mongodb+srv://${mongoUsername}:${mongoPassword}@${mongoServer}/${mongoDBName}`;

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((error) => {
    console.log("MongoDB Connection failed", error);
  });

module.exports = mongoose;

