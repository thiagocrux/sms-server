const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const monitoringSchema = new Schema({
  partnerTreatment: { type: Boolean, default: false },
  observations: { type: String, default: null },
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true,
  },
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
