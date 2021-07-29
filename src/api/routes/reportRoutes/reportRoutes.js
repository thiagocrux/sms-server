const express = require('express');
const { reportController } = require('../../controllers');

const router = express.Router();

router.route('/').get(reportController.getReport);
router.route('/:year').get(reportController.getReportByYear);

module.exports = router;
