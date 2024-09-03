const jwt = require('jsonwebtoken');

const authMiddleware = (roles = []) => {
  // Verifica se `roles` é uma string e transforma em array
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Acess denied. Token not provided.' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // Verificar se o papel do usuário tem permissão para acessar o recurso
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Acess denied. Permission insuficient.' });
      }

      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid Token' });
    }
  };
};

module.exports = authMiddleware;
