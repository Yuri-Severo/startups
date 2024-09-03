const StartupService = require("../services/StartupService");

const StartupController = {
  async getAll(req, res, next) {
    try {
      const startups = await StartupService.getAll();
      if (!startups) {
        return res.status(404).json({ message: "Startups not found" });
      }
      return res.status(200).json(startups);
    } catch (error) {
      next(error);
    }
  },
  async getOne(req, res, next) {
    try {
      const startup = await StartupService.getOne(req.params.id);
      if (!startup) {
        return res.status(404).json({ message: "Startup not found" });
      }
      return res.status(200).json(startup);
    } catch (error) {
      next(error);
    }
  },

  async getFirst(req, res, next) {
    try {
      const startup = await StartupService.getFirst();
      if (!startup) {
        return res.status(404).json({ message: "Startup not found" });
      }
      return res.status(200).json(startup);
    } catch (error) {
      next(error);
    }
  },

  async registerOne(req, res, next) {
    try {
      const startup = await StartupService.registerOne(req.body);
      return res
        .status(201)
        .json({ message: "Startup registerd succesfully", startup });
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(400).json({ message: error.message });
      }
      next(error);
    }
  },

  async updateOne(req, res, next) {
    try {
      const startup = await StartupService.updateOne(req.params.id, req.body);
      if (!startup) {
        return res.status(404).json({ message: "Startup not found" });
      }
      return res.status(200).json(startup);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(400).json({ message: error.message });
      }
      next(error);
    }
  },

  async deleteOne(req, res, next) {
    try {
      const resultado = await StartupService.deleteOne(req.params.id);
      if (!resultado) {
        return res.status(404).json({ message: "Startup not found" });
      }
      return res.status(200).json({ message: "Startup deleted succesfully" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = StartupController;
