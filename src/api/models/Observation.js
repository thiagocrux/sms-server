const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const observationSchema = new Schema({
  observations: { type: String, default: null },
  partnerTreatment: { type: Boolean, default: false },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

const Observation = model('Observation', observationSchema);

module.exports = Observation;
