const Exam = require('../../models/Exam');

exports.getExam = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.examID);
    console.log(exam);

    res.status(200).json({ data: exam });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllExams = async (req, res) => {
  try {
    const allExams = await Exam.find({});

    res.status(200).json({ data: allExams });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createExam = async (req, res) => {
  try {
    const createdExam = await Exam.create({
      ...req.body,
      patient: req.params.patientID,
      createdAt: Date.now(),
    });

    res.status(200).json({
      data: createdExam,
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
    const updates = { ...req.body, updatedAt: Date.now() };
    const updatedPatient = await Exam.findByIdAndUpdate(id, updates, { new: true });

    res.status(200).json({
      data: updatedPatient,
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
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
