const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema(
  {
    taskFor: {
      type: String,
      required: true,
    },
    assignedUsername: {
      type: String,
    },
    assignedUseremail: {
      type: String,
    },
    taskTitle: {
      type: String,
      required: true,
    },
    taskDesc: {
      type: String,
      required: true,
    },
    sendTask: {
      type: String,
      required: true,
    },
    uploadSingleTask: {
      type: String,
      ref: "TaskDocuments",
    },
    uploadAllTasks: {
      type: [String],
      ref: "TaskDocuments",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TasksSchema);
