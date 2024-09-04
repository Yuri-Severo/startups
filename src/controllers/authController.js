const authService = require('../services/authService');

const authController = {
  async register(req, res) {
    try {
      const { username, password, role } = req.body;
      const user = await authService.register(username, password, role);
      res.status(201).json({ message: 'User registered', user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const { token } = await authService.login(username, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
};

module.exports = authController;
