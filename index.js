const express = require("express");
const dbConnection = require("./config/dbConnection");
const startupsRoutes = require("./src/startupsRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(startupsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    dbConnection();
    console.log(`Server running on port ${PORT}`)
});
