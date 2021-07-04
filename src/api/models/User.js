const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  professionalRegistration: { type: String, required: true }, // Registro profissional
  councilRegistration: { type: String, required: true }, //Matrícula de trabalho
  role: { type: String, required: true },
  workLocation: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

const User = model('User', userSchema);

module.exports = User;
