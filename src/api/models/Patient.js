const mongoose = require('mongoose');
const { model, Schema } = mongoose;

// FIXME: Todos os campos abaixo são obrigatórios, exceto o nome social e o e-mail
const patientSchema = new Schema({
  susCardNumber: { type: String, unique: true },
  name: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  socialName: { type: String, default: null },
  birthDate: { type: String, required: true },
  sex: { type: String, required: true },
  gender: { type: String, required: true },
  sexuality: { type: String, required: true },
  nationality: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, default: null },
  motherName: { type: String, required: true },
  zipCode: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  neighbourhood: { type: String, required: true },
  street: { type: String, required: true },
  houseNumber: { type: Number, required: true },
  complement: { type: String, default: null },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

const Patient = model('Patient', patientSchema);

module.exports = Patient;
