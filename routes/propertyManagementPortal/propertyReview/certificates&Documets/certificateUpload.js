const router = require("express").Router();

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
      await Property.findByIdAndUpdate(singleproperty, {
        $push: { certificatesDocuments: savedNewCertificates._id },
      });
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
