const mongoose = require("mongoose");

const AddEventsSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
    },
    eventDetails: {
      type: String,
    },
    eventDate: {
      type: String,
    },
    eventTime: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AddEvents", AddEventsSchema);
