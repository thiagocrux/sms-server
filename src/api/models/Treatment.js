const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const treatmentSchema = new Schema({
  medication: { type: String, required: true },
  ubsLocation: { type: String, required: true },
  startDate: { type: String, required: true },
  dosage: { type: String, required: true },
  observations: { type: String, required: true },
  partnerInfo: { type: String, required: true },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

const Treatment = model('Treatment', treatmentSchema);

module.exports = Treatment;
