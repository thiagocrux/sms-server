const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const examSchema = new Schema({
  trepTestType: { type: String, required: true },
  trepTestResult: { type: String, required: true },
  trepTestDate: { type: String, required: true },
  trepTestLocation: { type: String, required: true },
  nonTrepTestVDRL: { type: String, required: true },
  nonTrepTestTitration: { type: String, required: true },
  nonTrepTestDate: { type: String, required: true },
  nonTrepOtherTest: { type: String },
  nonTrepOtherTestDate: { type: String },
  refObservations: { type: String, required: true },
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
