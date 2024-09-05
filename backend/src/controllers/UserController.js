const UserService = require("../services/UserService");

const UserController = {
  async getAll(req, res) {
    try {
      const users = await UserService.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteOne(req, res, next) {
    try {
      const result = await UserService.deleteOne(req.params.id);
      if (!result) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ message: "User deleted succesfully" });
    } catch (error) {
      next(error);
    }
  },

  async register(req, res) {
    try {
      const { username, password, role } = req.body;
      const user = await UserService.register(username, password, role);
      res.status(201).json({ message: "User registered", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const { token } = await UserService.login(username, password);
      res.status(200).json({ message: "Logged in", username, token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
};

module.exports = UserController;
