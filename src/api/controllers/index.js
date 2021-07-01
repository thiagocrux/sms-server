const examController = require('./examController/examController');
const notificationController = require('./notificationController/notificationController');
const observationController = require('./observationController/observationController');
const patientController = require('./patientController/patientController');
const treatmentController = require('./treatmentController/treatmentController');
const userController = require('./userController/userController');

module.exports = {
  examController,
  notificationController,
  observationController,
  patientController,
  treatmentController,
  userController,
};
