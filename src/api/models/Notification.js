const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const notificationSchema = new Schema({
  sinan: { type: String, required: true },
  observations: { type: String, default: null },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

const Notification = model('Notification', notificationSchema);

module.exports = Notification;
