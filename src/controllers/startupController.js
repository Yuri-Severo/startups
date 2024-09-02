const Startup = require("../models/startupModel");
const getFirstFive = async (req, res) => {
  try {
    const startups = await Startup.find();
    res.status(200).json(startups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Needs modifications
const getLastFive = async (req, res) => {
  try {
    const startups = await Startup.find();
    res.status(200).json(startups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id);
    if (!startup) return res.status(404).json({ message: "Startup not found" });
    res.status(200).json(startup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const registerNew = async (req, res) => {
  try {
    const newStartup = new Startup({
      name: req.body.name,
      state_code: req.body.state_code,
      city: req.body.city,
      founded_at: req.body.founded_at,
      category_code: req.body.category_code,
      status: req.body.status,
    });
    await newStartup.save();
    res.status(201).json(newStartup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const editById = async (req, res) => {
  try {
    const startup = await Startup.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        state_code: req.body.state_code,
        city: req.body.city,
        founded_at: req.body.founded_at,
        category_code: req.body.category_code,
        status: req.body.status,
      },
      {
        new: true,
      }
    );
    if (!startup) return res.status(404).json({ message: "Startup not found" });
    res.status(200).json(startup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const startup = await Startup.findByIdAndDelete(req.params.id);
    if (!startup) return res.status(404).json({ message: "Startup not found" });
    res.status(200).json({ message: "Startup deleted from the list:", startup });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFirstFive,
  getLastFive,
  getById,
  registerNew,
  deleteById,
  editById,
};
