const router = require("express").Router();
const Property = require("../../../models/PropertyManagementPortal/AddProperty/Property");

//create a property

router.post("/", async (req, res, next) => {
  const newProperty = new Property(req.body);
  console.log(req.body);
  try {
    const savedProperty = await newProperty.save();
    res.status(200).json(savedProperty);
  } catch (err) {
    next(err);
  }
});

//get All properties

router.get("/", async (req, res, next) => {
  try {
    const properties = await Property.find({})
      .populate("tenantDetails")
      .populate("certificatesDocuments");
      
    res.status(200).json(properties);
  } catch (err) {
    next(err);
  }
});

//get a single property

router.get("/:id", async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id)
      .populate("tenantDetails")
      .populate("certificatesDocuments");
    res.status(200).json(property);
  } catch (err) {
    next(err);
  }
});

//get a single property with tenant details

router.get("/tenantdetail/:id", async (req, res, next) => {
  try {
    // const user = await User.findById(req.params.userid)
    const property = await Property.findById(req.params.id).populate(
      "tenantDetails"
    );

    // const list = await Promise.all(
    //     property.tenantDetails.map((tenant) => {
    //         return tenant
    //     })
    // );

    res.status(200).json(property);
  } catch (err) {
    next(err);
  }
});

//get a single property with uploaded certificates

router.get("/certificates/:id", async (req, res, next) => {
  try {
    // const user = await User.findById(req.params.userid)
    const property = await Property.findById(req.params.id).populate(
      "certificatesDocuments"
    );

    // const list = await Promise.all(
    //     property.tenantDetails.map((tenant) => {
    //         return tenant
    //     })
    // );

    res.status(200).json(property);
  } catch (err) {
    next(err);
  }
});

//find a single property based on user's name/email

router.get("/", async (req, res, next) => {
  try {
    const name = req.query.name;
    if (name) {
      const property = await Property.findOne({ tenantName: name })
        .populate("tenantDetails")
        .populate("certificatesDocuments");
      res.status(200).json(property);
    }
  } catch (err) {
    next(err);
  }
});

//update a single property
router.put("/:id", async (req, res, next) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProperty);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
