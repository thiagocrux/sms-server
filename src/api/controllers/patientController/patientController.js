const Patient = require('../../models/Patient');
const { getCurrentDate } = require('../../utils/helpers');

exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientID);
    console.log(patient);

    res.status(200).json({ patient });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const allPatients = await Patient.find({});

    res.status(200).json({ patients: allPatients });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createPatient = async (req, res) => {
  try {
    const createdPatient = await Patient.create({
      ...req.body,
      createdAt: getCurrentDate(),
      updatedAt: null,
    });

    res.status(200).json({
      patient: createdPatient,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const id = req.params.patientID;
    const updates = { ...req.body, updatedAt: getCurrentDate() };
    const updatedPatient = await Patient.findByIdAndUpdate(id, updates);

    res.status(200).json({
      patient: updatedPatient,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);

    res.status(204).json({
      patient: null,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
