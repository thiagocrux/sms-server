const express = require('express');
const { monitoringController } = require('../../controllers');

const router = express.Router();

router
  .route('/:patientID/monitorings')
  .get(monitoringController.getAllMonitorings)
  .post(monitoringController.createMonitoring);

router
  .route('/:patientID/monitorings/:monitoringID')
  .get(monitoringController.getMonitoring)
  .patch(monitoringController.updateMonitoring)
  .delete(monitoringController.deleteMonitoring);

module.exports = router;
