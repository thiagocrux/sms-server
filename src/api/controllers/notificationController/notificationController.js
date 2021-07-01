const Notification = require('../../models/Notification');
const { getCurrentDate } = require('../../utils/helpers');

exports.getNotification = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.notificationID);
    console.log(notification);

    res.status(200).json({ notification });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllNotifications = async (req, res) => {
  try {
    const { patientID } = req.params;
    const allNotifications = await Notification.find({ patient: patientID });

    res.status(200).json({ notifications: allNotifications });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createNotification = async (req, res) => {
  try {
    const createdNotification = await Notification.create({
      ...req.body,
      patient: req.params.patientID,
      createdAt: getCurrentDate(),
      updatedAt: null,
    });

    res.status(200).json({
      notification: createdNotification,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.updateNotification = async (req, res) => {
  try {
    const id = req.params.notificationID;
    const updates = { ...req.body, updatedAt: getCurrentDate() };
    const updatedNotification = await Notification.findByIdAndUpdate(
      id,
      updates,
      {
        new: true,
      }
    );

    res.status(200).json({
      notification: updatedNotification,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.notificationID);

    res.status(204).json({
      notification: null,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
