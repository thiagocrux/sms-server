const Monitoring = require('../../models/Monitoring');

exports.getMonitoring = async (req, res) => {
  try {
    const monitoring = await Monitoring.findById(req.params.monitoringID);
    console.log(monitoring);

    res.status(200).json({ data: monitoring });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllMonitorings = async (req, res) => {
  try {
    const allMonitorings = await Monitoring.find({});

    res.status(200).json({ data: allMonitorings });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createMonitoring = async (req, res) => {
  try {
    const createdMonitoring = await Monitoring.create({
      ...req.body,
      patient: req.params.patientID,
      createdAt: Date.now(),
    });

    res.status(200).json({
      data: createdMonitoring,
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
    const updates = { ...req.body, updatedAt: Date.now() };
    const updatedMonitoring = await Monitoring.findByIdAndUpdate(id, updates, { new: true });

    res.status(200).json({
      data: updatedMonitoring,
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
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
