const Prospects = require("../../../models/PropertyManagementPortal/Prospect/Prospect");

const router = require("express").Router();

//create a prospect

router.post("/", async (req, res, next) => {
  const newProspect = new Prospects(req.body);
  console.log(req.body);
  try {
    const savedProspect = await newProspect.save();
    res.status(200).json(savedProspect);
  } catch (err) {
    next(err);
  }
});

//get all prospects

router.get("/", async (req, res, next) => {
  try {
    const prospects = await Prospects.find({});

    res.status(200).json(prospects);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
