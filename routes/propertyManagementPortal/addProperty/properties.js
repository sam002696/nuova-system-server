const router = require("express").Router();
const User = require("../../../models/AdminPortal/CreateUser/User");
const Notification = require("../../../models/Notification/Notification");
const Property = require("../../../models/PropertyManagementPortal/AddProperty/Property");
const CertificateUpload = require("../../../models/PropertyManagementPortal/PropertyReview/Certificates&Documents/CertificateUpload");
const InspectionReport = require("../../../models/PropertyManagementPortal/PropertyReview/InspectionReport/InspectionReport");
const Inventory = require("../../../models/PropertyManagementPortal/PropertyReview/Inventory/Inventory");
const TenantUpload = require("../../../models/PropertyManagementPortal/PropertyReview/TenantUpload/TenantUpload");
const {
  sendPropertyAddToEveryPropertyManagerEmail,
  sendPropertyAddToSingleLandlordEmail,
} = require("../../../utils/email/propertyEmail");
const {
  emitRealTimeNotifications,
} = require("../../notification/emitRealTimeNotifications");

//create a property

router.post("/", async (req, res, next) => {
  const newProperty = new Property(req.body);
  console.log(req.body);
  try {
    const savedProperty = await newProperty.save();
    await Notification.findOneAndUpdate(
      {},
      {
        $push: {
          "PropertyAdd.landlord": {
            propertyName: savedProperty.propertyAddress.propertyName,
            landlordEmail: savedProperty.landlordInfo.landlordEmail,
          },
        },
      },
      { upsert: true }
    );
    await Notification.findOneAndUpdate(
      {},
      {
        $push: {
          "PropertyAdd.propertyManager": {
            propertyName: savedProperty.propertyAddress.propertyName,
            landlordName: savedProperty.landlordInfo.landlordName,
          },
        },
      },
      { upsert: true }
    );
    if (savedProperty) {
      sendPropertyAddToEveryPropertyManagerEmail(savedProperty);
      sendPropertyAddToSingleLandlordEmail(savedProperty);
    }
    emitRealTimeNotifications();
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
      .populate("certificatesDocuments")
      .populate("inventory")
      .populate("inspectionReport");

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
      .populate("certificatesDocuments")
      .populate("inventory")
      .populate("inspectionReport");
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

//find a single property based on user's email

// router.get("/tenantproperty/tenant", async (req, res, next) => {
//   const email = req.query.email;
//   console.log(email);
//   if (email) {
//     try {
//       const tenant = await TenantUpload.findOne({
//         "tenantPersonalInfo.email": email,
//       });
//       console.log(tenant);
//       try {
//         const property = await Property.findOne({ tenantDetails: tenant._id })
//           .populate("tenantDetails")
//           .populate("certificatesDocuments");
//         res.status(200).json(property);
//       } catch (err) {
//         next(err);
//       }
//     } catch (err) {
//       next(err);
//     }
//   }
// });

//find a single property based on user's email

router.get("/tenantproperty/tenant/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log('userId', userId);

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json("User not found");
    }

    // Check the user with same id from tenant uploads
    if (userId) {
      const tenants = await TenantUpload.find({ userid: userId });
      console.log('tenants', tenants);
      
        const properties = [];
        for (const tenant of tenants) {
          const property = await Property.findOne({ tenantDetails: tenant._id })
            .populate("tenantDetails")
            .populate("certificatesDocuments");
          properties.push(property);
         
        }
       
        res.status(200).json(properties);
    } 

  } catch (err) {
    res.status(500).json(err);
  }
});

//find all properties based on lanlord's email

router.get("/landlordproperty/landlord", async (req, res, next) => {
  const email = req.query.email;
  console.log(email);
  if (email) {
    try {
      const landlordProperty = await Property.find({
        "landlordInfo.landlordEmail": email,
      });

      res.status(200).json(landlordProperty);
    } catch (err) {
      next(err);
    }
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

// delete a single property and all of it's relevant documents from other schema

router.delete("/:propertyid", async (req, res, next) => {
  const propertyId = req.params.propertyid;
  try {
    const property = await Property.findById(propertyId);

    if (!property) {
      console.log("Property not found");
      return;
    }

    // deleting refs in other models
    await TenantUpload.deleteMany({ _id: { $in: property.tenantDetails } });
    await CertificateUpload.deleteMany({
      _id: { $in: property.certificatesDocuments },
    });
    await Inventory.deleteMany({ _id: { $in: property.inventory } });
    await InspectionReport.deleteMany({
      _id: { $in: property.inspectionReport },
    });

    // deleteing the main property model
    await Property.deleteOne({ _id: propertyId });

    res.status(200).json("Property and references deleted successfully");
  } catch (error) {
    next(error);
  }
});

// set the current status of the property

router.put("/propertyStatus/:propertyid", async (req, res, next) => {
  const propertyId = req.params.propertyid;
  const status = req.query.status;
  try {
    const updatedStatus = await Property.findByIdAndUpdate(
      propertyId,
      {
        $set: { status: status },
      },
      { new: true }
    );
    res.status(200).json(updatedStatus);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
