const Monitoring = require('../../models/Monitoring');
const { getCurrentDate } = require('../../utils/helpers');

exports.getMonitoring = async (req, res) => {
  try {
    const monitoring = await Monitoring.findById(req.params.monitoringID);
    console.log(monitoring);

    res.status(200).json({ monitoring });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllMonitorings = async (req, res) => {
  try {
    const { patientID } = req.params;
    const allMonitorings = await Monitoring.find({ patient: patientID });

    res.status(200).json({ monitorings: allMonitorings });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createMonitoring = async (req, res) => {
  try {
    const createdMonitoring = await Monitoring.create({
      ...req.body,
      patient: req.params.patientID,
      createdAt: getCurrentDate(),
      updatedAt: null,
    });

    res.status(200).json({
      monitoring: createdMonitoring,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.updateMonitoring = async (req, res) => {
  try {
    const id = req.params.monitoringID;
    const updates = { ...req.body, updatedAt: getCurrentDate() };
    const updatedMonitoring = await Monitoring.findByIdAndUpdate(id, updates, {
      new: true,
    });

    res.status(200).json({
      monitoring: updatedMonitoring,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.deleteMonitoring = async (req, res) => {
  try {
    await Monitoring.findByIdAndDelete(req.params.monitoringID);

    res.status(204).json({
      monitoring: null,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
