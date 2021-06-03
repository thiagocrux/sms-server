const express = require('express');
const { patientController } = require('../../controllers');

const router = express.Router();

router.route('/').get(patientController.getAllPatients).post(patientController.createPatient);

router
  .route('/:patientID')
  .get(patientController.getPatient)
  .patch(patientController.updatePatient)
  .delete(patientController.deletePatient);

module.exports = router;
