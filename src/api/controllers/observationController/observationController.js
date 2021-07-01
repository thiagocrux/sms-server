const Observation = require('../../models/Observation');
const { getCurrentDate } = require('../../utils/helpers');

exports.getObservation = async (req, res) => {
  try {
    const observation = await Observation.findById(req.params.observationID);
    console.log(observation);

    res.status(200).json({ observation });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllObservations = async (req, res) => {
  try {
    const { patientID } = req.params;
    const allObservations = await Observation.find({ patient: patientID });

    res.status(200).json({ observations: allObservations });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createObservation = async (req, res) => {
  try {
    const createdObservation = await Observation.create({
      ...req.body,
      patient: req.params.patientID,
      createdAt: getCurrentDate(),
      updatedAt: null,
    });

    res.status(200).json({
      observation: createdObservation,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.updateObservation = async (req, res) => {
  try {
    const id = req.params.observationID;
    const updates = { ...req.body, updatedAt: getCurrentDate() };
    const updatedObservation = await Observation.findByIdAndUpdate(
      id,
      updates,
      {
        new: true,
      }
    );

    res.status(200).json({
      observation: updatedObservation,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.deleteObservation = async (req, res) => {
  try {
    await Observation.findByIdAndDelete(req.params.observationID);

    res.status(204).json({
      observation: null,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
