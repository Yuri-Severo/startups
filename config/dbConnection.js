const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "db-connection"
    );
    console.log("DataBase connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = dbConnection;
