const Treatment = require('../../models/Treatment');
const moment = require('moment');

exports.getTreatment = async (req, res) => {
  try {
    const treatment = await Treatment.findById(req.params.treatmentID);
    console.log(treatment);

    res.status(200).json({ data: treatment });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllTreatments = async (req, res) => {
  try {
    const allTreatments = await Treatment.find({});

    res.status(200).json({ data: allTreatments });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createTreatment = async (req, res) => {
  try {
    const currentDateTime = moment().utc(-03).format();

    const createdTreatment = await Treatment.create({
      ...req.body,
      patient: req.params.patientID,
      createdAt: currentDateTime,
      updatedAt: null,
    });

    res.status(200).json({
      data: createdTreatment,
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
    const currentDateTime = moment().utc(-03).format();
    const updates = { ...req.body, updatedAt: currentDateTime };
    const updatedTreatment = await Treatment.findByIdAndUpdate(id, updates, { new: true });

    res.status(200).json({
      data: updatedTreatment,
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
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
