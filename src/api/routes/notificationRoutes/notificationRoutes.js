const express = require('express');
const { notificationController } = require('../../controllers');

const router = express.Router();

router
  .route('/:patientID/notifications')
  .get(notificationController.getAllNotifications)
  .post(notificationController.createNotification);

router
  .route('/:patientID/notifications/:notificationID')
  .get(notificationController.getNotification)
  .patch(notificationController.updateNotification)
  .delete(notificationController.deleteNotification);

module.exports = router;
