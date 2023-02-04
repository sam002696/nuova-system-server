const PropertyFactFind = require("../../../models/PropertyManagementPortal/PropertyFactFind/PropertyFactFind");

const router = require("express").Router();

//create a property fact find form

router.post("/", async (req, res, next) => {
  const newPropertyFactFind = new PropertyFactFind(req.body);
  console.log(req.body);
  try {
    const savedPropertyFactFind = await newPropertyFactFind.save();
    res.status(200).json(savedPropertyFactFind);
  } catch (err) {
    next(err);
  }
});

//get all forms

router.get("/", async (req, res, next) => {
  try {
    const allForms = await PropertyFactFind.find({});

    res.status(200).json(allForms);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
