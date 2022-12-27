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
      return next(createError(403, "wrong property id"));
    }
    res.status(200).json(savedNewCertificates);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
