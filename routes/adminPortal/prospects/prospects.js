const Prospects = require("../../../models/AdminPortal/Prospects/Prospects");

const router = require("express").Router();

// post prospect

router.post("/", async (req, res, next) => {
  const newProspect = new Prospects(req.body);
  try {
    const savedProspect = await newProspect.save();

    res.status(200).json(savedProspect);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
