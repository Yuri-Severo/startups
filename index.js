const express = require("express");
const dbConnection = require("./config/dbConnection");
const startupsRoutes = require("./src/routes/startupsRoutes");
const authRoutes = require("./src/routes/authRoutes");

require("dotenv").config();
dbConnection();
const app = express();

app.use(express.json());

app.use(startupsRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
