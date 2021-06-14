const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const monitoringSchema = new Schema({
  vdrl1Date: { type: Date, required: true },
  vdrl1Titration: { type: String, required: true },
  vdrl2Date: { type: Date, required: true },
  vdrl2Titration: { type: String, required: true },
  vdrl3Date: { type: Date, required: true },
  vdrl3Titration: { type: String, required: true },
  partnerTreatment: { type: Boolean, default: false },
  observations: { type: String, default: null },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

const Monitoring = model('Monitoring', monitoringSchema);

module.exports = Monitoring;
