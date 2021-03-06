const Exam = require('../../models/Exam');
const { getCurrentDate } = require('../../utils/helpers');

exports.getExam = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.examID);
    console.log(exam);

    res.status(200).json({ exam });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllExams = async (req, res) => {
  try {
    const { patientID } = req.params;
    const allExams = await Exam.find({ patient: patientID });

    res.status(200).json({ exams: allExams });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createExam = async (req, res) => {
  try {
    const createdExam = await Exam.create({
      ...req.body,
      patient: req.params.patientID,
      createdAt: getCurrentDate(),
      updatedAt: null,
    });

    res.status(200).json({
      exam: createdExam,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.updateExam = async (req, res) => {
  try {
    const id = req.params.examID;
    const updates = { ...req.body, updatedAt: getCurrentDate() };
    const updatedExam = await Exam.findByIdAndUpdate(id, updates, {
      new: true,
    });

    res.status(200).json({
      exam: updatedExam,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.deleteExam = async (req, res) => {
  try {
    await Exam.findByIdAndDelete(req.params.examID);

    res.status(204).json({
      exam: null,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
