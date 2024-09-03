const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const user = new mongoose.model({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
}, { timestamps: true });

// Hash da senha antes de salvar
user.pre('save', async (next) => {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Comparar senhas
user.methods.comparePassword = async (password) => {
  return await bcrypt.compare(password, this.password);
};

module.exports = user;
