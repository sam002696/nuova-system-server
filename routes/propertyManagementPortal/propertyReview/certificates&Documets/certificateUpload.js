const router = require("express").Router();

const Property = require("../../../../models/PropertyManagementPortal/AddProperty/Property");
const CertificateUpload = require("../../../../models/PropertyManagementPortal/PropertyReview/Certificates&Documents/CertificateUpload");

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
      res.status(403).json(err);
    }
    res.status(200).json(newCertificates);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
