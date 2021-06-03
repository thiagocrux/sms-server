const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const examSchema = new Schema({
  trepTestType: { type: String, required: true },
  trepTestResult: { type: String, required: true },
  trepTestDate: { type: Date, required: true },
  nonTrepTestVDRL: { type: String, required: true },
  nonTrepTestTitulation: { type: String, required: true },
  nonTrepTestDate: { type: Date, required: true },
  refObservations: { type: String, required: true },
  onTreatment: { type: String, default: false },
  onObservation: { type: String, default: false },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

const Exam = model('Exam', examSchema);

module.exports = Exam;
