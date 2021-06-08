const Monitoring = require('../../models/Monitoring');
const moment = require('moment');

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
    const allMonitorings = await Monitoring.find({});

    res.status(200).json({ monitorings: allMonitorings });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createMonitoring = async (req, res) => {
  try {
    const currentDateTime = moment().utc(-03).format();

    const createdMonitoring = await Monitoring.create({
      ...req.body,
      patient: req.params.patientID,
      createdAt: currentDateTime,
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
    const currentDateTime = moment().utc(-03).format();
    const updates = { ...req.body, updatedAt: currentDateTime };
    const updatedMonitoring = await Monitoring.findByIdAndUpdate(id, updates, { new: true });

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
