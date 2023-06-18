const router = require("express").Router();

const Notification = require("../../../../models/Notification/Notification");
const Property = require("../../../../models/PropertyManagementPortal/AddProperty/Property");
const CertificateUpload = require("../../../../models/PropertyManagementPortal/PropertyReview/Certificates&Documents/CertificateUpload");
const createError = require("../../../../utils/error");

//post certificate to a single property

router.post("/upload/:singlepropertyid", async (req, res, next) => {
  const singleproperty = req.params.singlepropertyid;
  const newCertificates = new CertificateUpload(req.body);

  try {
    const savedNewCertificates = await newCertificates.save();
    try {
      const propertyDetails = await Property.findByIdAndUpdate(singleproperty, {
        $push: { certificatesDocuments: savedNewCertificates._id },
      });
      await Notification.findOneAndUpdate(
        {},
        {
          $push: {
            CertificateAdd: {
              propertyName: propertyDetails.propertyAddress.propertyName,
              propertyAddress: propertyDetails.propertyAddress.addressline1,
              certificateName: savedNewCertificates.certificateName,
              certificateAddedBy: savedNewCertificates.certificateAddedBy,
              certificateProviderEmail:
                savedNewCertificates.certificateProviderEmail,
              certificateExpiryDate: savedNewCertificates.certificateExpiryDate,
            },
          },
        },
        { upsert: true }
      );
      emitRealTimeNotifications()
    } catch (err) {
      // return next(createError(403, "wrong property id"));
      next(err);
    }
    res.status(200).json(savedNewCertificates);
  } catch (err) {
    next(err);
  }
});

//get All Certificates

router.get("/", async (req, res, next) => {
  try {
    const allcertificates = await CertificateUpload.find({});
    res.status(200).json(allcertificates);
  } catch (err) {
    next(err);
  }
});

// is Expired

router.put("/:certificateid", async (req, res, next) => {
  const certificateId = req.params.certificateid;
  try {
    await CertificateUpload.findOneAndUpdate(
      certificateId,
      {
        $set: { isExpired: true },
      },
      {
        new: true,
      }
    );
    res.status(200).json("ok");
  } catch (err) {
    next(err);
  }
});

//get all Certificates based on Single Property

// router.get("/:id", async (req, res, next) => {
//   try {
//     const certificates = await CertificateUpload.findById(req.params.id);
//     res.status(200).json(certificates);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
