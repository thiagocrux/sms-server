const { getCurrentDate } = require('../../utils/helpers');
const Treatment = require('../../models/Treatment');

exports.getTreatment = async (req, res) => {
  try {
    const treatment = await Treatment.findById(req.params.treatmentID);
    console.log(treatment);

    res.status(200).json({ treatment });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllTreatments = async (req, res) => {
  try {
    const { patientID } = req.params;
    const allTreatments = await Treatment.find({ patient: patientID });

    res.status(200).json({ treatments: allTreatments });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createTreatment = async (req, res) => {
  try {
    const createdTreatment = await Treatment.create({
      ...req.body,
      patient: req.params.patientID,
      createdAt: getCurrentDate(),
      updatedAt: null,
    });

    res.status(200).json({
      treatment: createdTreatment,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.updateTreatment = async (req, res) => {
  try {
    const id = req.params.treatmentID;
    const updates = { ...req.body, updatedAt: getCurrentDate() };
    const updatedTreatment = await Treatment.findByIdAndUpdate(id, updates, {
      new: true,
    });

    res.status(200).json({
      treatment: updatedTreatment,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.deleteTreatment = async (req, res) => {
  try {
    await Treatment.findByIdAndDelete(req.params.treatmentID);

    res.status(204).json({
      treatment: null,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
