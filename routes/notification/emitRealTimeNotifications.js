const Notification = require("../../models/Notification/Notification");

const emitRealTimeNotifications = async () => {
    try {
      const manageNotifications = await Notification.find({});
      io.emit("notifications", manageNotifications);
    } catch (err) {
      // Handle any errors that occur during notification retrieval
      console.error(err);
    }
  };

  module.exports={emitRealTimeNotifications}