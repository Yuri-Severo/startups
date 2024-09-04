const authService = require("../services/authService");

const authMiddleware = {
  async authenticate(req, res, next) {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided (É preciso realizar login)" });

    try {
      const decoded = await authService.verifyToken(token);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  },

  authorize(role) {
    return (req, res, next) => {
      if (req.user.role !== role) {
        return res.status(403).json({ message: "Acessível apenas como ADM" });
      }
      next();
    };
  },
};

module.exports = authMiddleware;
