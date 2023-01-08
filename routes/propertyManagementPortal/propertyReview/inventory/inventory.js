const Property = require("../../../../models/PropertyManagementPortal/AddProperty/Property");
const Inventory = require("../../../../models/PropertyManagementPortal/PropertyReview/Inventory/Inventory");

const router = require("express").Router();

//create

router.post("/upload/:propertyid", async (req, res, next) => {
  const propertyId = req.params.propertyid;
  const newInventory = new Inventory(req.body);

  try {
    const savedInventory = await newInventory.save();
    try {
      await Property.findByIdAndUpdate(propertyId, {
        $push: { inventory: savedInventory._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedInventory);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
