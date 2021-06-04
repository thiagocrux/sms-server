const express = require('express');
const { treatmentController } = require('../../controllers');

const router = express.Router();

router
  .route('/:patientID/treatments/')
  .get(treatmentController.getAllTreatments)
  .post(treatmentController.createTreatment);

router
  .route('/:patientID/treatments/:treatmentID')
  .get(treatmentController.getTreatment)
  .patch(treatmentController.updateTreatment)
  .delete(treatmentController.deleteTreatment);

module.exports = router;
