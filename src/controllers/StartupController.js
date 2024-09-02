const Startup = require("../models/startup");
const {
  getOne,
  getFirst,
  getRecent,
  registerOne,
  updateOne,
  deleteOne,
} = require("../services/StartupService");

const StartupController = {
  async getOne(req, res, next) {
    try {
      const startup = await getOne(req.params.id);
      return res.send(startup);
    } catch (error) {
      next(error);
    }
  },
  //needs updates
  async getFirst(req, res, next) {
    try {
      const startup = await getFirst(req.params.id);
      return res.send(startup);
    } catch (error) {
      next(error);
    }
  },
  //################################################
  //needs updates
  async getRecent(req, res, next) {
    try {
      const startup = await getRecent(req.params.id);
      return res.send(startup);
    } catch (error) {
      next(error);
    }
  },
  //################################################
  async createOne(req, res, next) {
    try {
      const startup = await registerOne(req.body);
      return res.send(startup);
    } catch (error) {
      next(error);
    }
  },
  async updateOne(req, res, next) {
    try {
      const startup = await updateOne(req.params.id, req.body);
      return res.send(startup);
    } catch (error) {
      next(error);
    }
  },
  async deleteOne(req, res, next) {
    try {
      const resultado = await deleteOne(req.params.id);
      return res.send(resultado);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = StartupController;
