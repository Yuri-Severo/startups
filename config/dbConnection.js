const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yuri:SEVERO72937@startups.ofen5.mongodb.net/?retryWrites=true&w=majority&appName=startups"
    );
    console.log("DataBase connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = dbConnection;
