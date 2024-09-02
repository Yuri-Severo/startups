const mongoose = require("mongoose");

const startup = new mongoose.model("Startup",
  {
    name: { type: String, required: true },
    state_code: { type: String, required: true },
    city: { type: String, required: true },
    founded_at: { type: String, required: true },
    category_code: { type: String, required: true },
    status: { type: String, required: true }
  }
);

module.exports = startup;
