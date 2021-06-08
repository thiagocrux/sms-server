const Patient = require('../../models/Patient');
const moment = require('moment');

exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    console.log(patient);

    res.status(200).json({ data: patient });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const allPatients = await Patient.find({});

    res.status(200).json({ data: allPatients });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createPatient = async (req, res) => {
  try {
    const currentDateTime = moment().utc(-03).format();

    const createdPatient = await Patient.create({
      ...req.body,
      createdAt: currentDateTime,
      updatedAt: null,
    });

    res.status(200).json({
      data: createdPatient,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const id = req.params.id;
    const currentDateTime = moment().utc(-03).format();
    const updates = { ...req.body, updatedAt: currentDateTime };
    const updatedPatient = await Patient.findByIdAndUpdate(id, updates, { new: true });

    res.status(200).json({
      data: updatedPatient,
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
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
