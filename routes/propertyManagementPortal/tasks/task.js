const Notification = require("../../../models/Notification/Notification");
const Tasks = require("../../../models/PropertyManagementPortal/Tasks/Tasks");

const router = require("express").Router();

//create tasks for tenants/landlords

router.post("/", async (req, res, next) => {
  const newTask = new Tasks(req.body);
  try {
    const savedTask = await newTask.save();
    const { uploadAllTasks, ...others } = savedTask._doc;
    console.log(others);
    if (savedTask.taskFor === "Tenants") {
      await Notification.findOneAndUpdate(
        {},
        {
          $push: {
            TaskReceiveTenant: {
              taskTitle: savedTask.taskTitle,
              taskFor: savedTask.taskFor,
              tenantName: savedTask.assignedUsername,
              tenantEmail: savedTask.assignedUseremail,
            },
          },
        },
        { upsert: true }
      );
    }
    if (savedTask.taskFor === "Landlords") {
      await Notification.findOneAndUpdate(
        {},
        {
          $push: {
            TaskReceiveLandlord: {
              taskTitle: savedTask.taskTitle,
              taskFor: savedTask.taskFor,
              landlordName: savedTask.assignedUsername,
              landlordEmail: savedTask.assignedUseremail,
            },
          },
        },
        { upsert: true }
      );
    }

    res.status(200).json(others);
  } catch (err) {
    next(err);
  }
});

// create tasks for all tenants/landlords

router.post("/all", async (req, res, next) => {
  const newTask = new Tasks(req.body);
  try {
    const savedTask = await newTask.save();
    const { uploadSingleTask, ...others } = savedTask._doc;
    if (savedTask.taskFor === "Tenants") {
      await Notification.findOneAndUpdate(
        {},
        {
          $push: {
            TaskReceiveTenant: {
              taskTitle: savedTask.taskTitle,
              taskFor: savedTask.taskFor,
              taskAssignedTo: "All",
            },
          },
        },
        { upsert: true }
      );
    }
    if (savedTask.taskFor === "Landlords") {
      await Notification.findOneAndUpdate(
        {},
        {
          $push: {
            TaskReceiveLandlord: {
              taskTitle: savedTask.taskTitle,
              taskFor: savedTask.taskFor,
              taskAssignedTo: "All",
            },
          },
        },
        { upsert: true }
      );
    }
    res.status(200).json(others);
  } catch (err) {
    next(err);
  }
});

// get all tasks based on user's email and everyone

router.get("/", async (req, res, next) => {
  const useremail = req.query.useremail;
  const sendtask = req.query.sendTask;
  const taskfor = req.query.taskFor;
  try {
    if (taskfor === "Tenants" && (useremail || sendtask)) {
      const task = await Tasks.find({
        $or: [
          { assignedUseremail: useremail, taskFor: taskfor },
          { taskFor: taskfor, sendTask: sendtask },
        ],
      })
        .populate("uploadSingleTask")
        .populate("uploadAllTasks");

      res.status(200).json(task);
    } else if (taskfor === "Landlords" && (useremail || sendtask)) {
      const task = await Tasks.find({
        $or: [
          { assignedUseremail: useremail, taskFor: taskfor },
          { taskFor: taskfor, sendTask: sendtask },
        ],
      })
        .populate("uploadSingleTask")
        .populate("uploadAllTasks");

      res.status(200).json(task);
    } else {
      const task = await Tasks.find({ taskFor: taskfor })
        .populate("uploadSingleTask")
        .populate("uploadAllTasks");

      res.status(200).json(task);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
