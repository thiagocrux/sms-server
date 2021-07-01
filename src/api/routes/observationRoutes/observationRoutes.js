const express = require('express');
const { observationController } = require('../../controllers');

const router = express.Router();

router
  .route('/:patientID/observations')
  .get(observationController.getAllObservations)
  .post(observationController.createObservation);

router
  .route('/:patientID/observations/:observationID')
  .get(observationController.getObservation)
  .patch(observationController.updateObservation)
  .delete(observationController.deleteObservation);

module.exports = router;
