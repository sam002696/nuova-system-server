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
        $set: { inventory: savedInventory._id },
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

//update inventory

router.put("/update/:inventoryid", async (req, res, next) => {
  const inventoryId = req.params.inventoryid;
  console.log(inventoryId);
  try {
    await Inventory.findByIdAndUpdate(inventoryId, {
      $set: req.body,
    });
    res.status(200).json("inventory details has been updated.");
  } catch (err) {
    next(err);
  }
});
module.exports = router;
