const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secret = 'jwt_secret'; 

const authService = {
  async register(username, password, role = 'user') {
    const user = new User({ username, password, role });
    await user.save();
    return user;
  },

  async login(username, password) {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id, role: user.role }, secret, {
      expiresIn: '1h',
    });

    return { token };
  },

  async verifyToken(token) {
    try {
      return jwt.verify(token, secret);
    } catch (e) {
      throw new Error('Invalid token');
    }
  },
};

module.exports = authService;
