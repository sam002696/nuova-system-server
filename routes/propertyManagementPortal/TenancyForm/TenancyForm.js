const TenancyForm = require("../../../models/PropertyManagementPortal/TenancyForm/TenancyForm");

const router = require("express").Router();

//create a TenancyForm

router.post("/", async (req, res, next) => {
  const newTenancyForm = new TenancyForm(req.body);
  console.log(req.body);
  try {
    const savedTenancyForm = await newTenancyForm.save();
    res.status(200).json(savedTenancyForm);
  } catch (err) {
    next(err);
  }
});

//get all prospects

// router.get("/", async (req, res, next) => {
//   try {
//     const prospects = await Prospects.find({});

//     res.status(200).json(prospects);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
