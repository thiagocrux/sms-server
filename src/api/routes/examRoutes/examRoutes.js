const express = require('express');
const { examController } = require('../../controllers');

const router = express.Router();

router.route('/:patientID/exams').get(examController.getAllExams).post(examController.createExam);

router
  .route('/:patientID/exams/:examID')
  .get(examController.getExam)
  .patch(examController.updateExam)
  .delete(examController.deleteExam);

module.exports = router;
