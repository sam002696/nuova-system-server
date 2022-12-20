const Tasks = require("../../../models/PropertyManagementPortal/Tasks/Tasks");

const router = require("express").Router();

//create tasks for tenants

router.post("/", async (req, res, next) => {
  const newTask = new Tasks(req.body);
  try {
    const savedTask = await newTask.save();
    const { uploadAllTasks, ...others } = savedTask._doc;
    console.log(others);
    res.status(200).json(others);
  } catch (err) {
    next(err);
  }
});

// create tasks for all tenants

router.post("/alltenants", async (req, res, next) => {
  const newTask = new Tasks(req.body);
  try {
    const savedTask = await newTask.save();
    const { uploadSingleTask, ...others } = savedTask._doc;
    res.status(200).json(others);
  } catch (err) {
    next(err);
  }
});

// get all tasks based on user's email and everyone

router.get("/", async (req, res, next) => {
  const useremail = req.query.useremail;
  const sendtask = req.query.sendTask;
  try {
    if (useremail || sendtask) {
      const task = await Tasks.find({
        $or: [{ assignedUseremail: useremail }, { sendTask: sendtask }],
      })
        .populate("uploadSingleTask")
        .populate("uploadAllTasks");

      res.status(200).json(task);
    } else {
      const task = await Tasks.find()
        .populate("uploadSingleTask")
        .populate("uploadAllTasks");

      res.status(200).json(task);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
