const mongoose = require("mongoose");

const PropertyFactFindSchema = new mongoose.Schema(
  {
    property: {
      propertyFloor: {
        type: String,
      },
      propertyFurnished: {
        type: String,
      },
      propertyName: {
        type: String,
      },
      propertyAddress: {
        type: String,
      },
      councilTaxBand: {
        type: String,
      },
      availabilityDate: {
        type: Date,
      },
      city: {
        type: String,
      },
      postcode: {
        type: String,
      },
      petsPermission: {
        type: String,
      },
      studentsAccept: {
        type: String,
      },
      toLet: {
        type: String,
      },
    },

    propertyDetails: {
      propertyType: {
        type: String,
      },
      roomObject: {
        rooms: {
          type: [String],
        },
        roomsOther: {
          type: String,
        },
      },
      featuresAppliances: {
        featuresAndAppliances: {
          type: [String],
        },
        featuresAndAppliancesOther: {
          type: String,
        },
        externalAreasFacilities: {
          type: String,
        },
        sharedAreasFacilities: {
          type: String,
        },
        excludedAreaFacilities: {
          type: String,
        },
      },
      parking: {
        permitSuppliedBy: {
          type: String,
        },
        spaceNumber: {
          type: Number,
        },
        permitsPerProperty: {
          type: Number,
        },
        spaceLocation: {
          type: String,
        },
        entryCode: {
          type: String,
        },
        remoteFob: {
          type: String,
        },
        suppliedBy: {
          type: String,
        },
      },
      keys: {
        keySetsProvided: {
          type: String,
        },
        keySetsCut: {
          type: String,
        },
        keySetsMakeUp: {
          type: String,
        },
        additionalKeys: {
          type: String,
        },
        securityKeyReplacement: {
          type: String,
        },
      },
      alarm: {
        alarmCode: {
          type: String,
        },
        alarmPanelLocation: {
          type: String,
        },
        alarmFob: {
          type: String,
        },
        alarmType: {
          type: String,
        },
        serviceProvider: {
          type: String,
        },
      },
      factoring: {
        propertyFactored: {
          type: String,
        },
        factoringCompany: {
          type: String,
        },
        emailAddress: {
          type: String,
        },
        telephone: {
          type: String,
        },
        address: {
          type: String,
        },
        postCode: {
          type: String,
        },
      },
      otherServices: {
        stairCleaningAgreement: {
          place: {
            type: String,
          },
          provider: {
            type: String,
          },
        },
        gardenMaintenanceContract: {
          place: {
            type: String,
          },
          provider: {
            type: String,
          },
        },
        other: {
          type: String,
        },
        mainsWaterLocation: {
          type: String,
        },
        phoneLineBroadband: {
          type: String,
        },
        phoneLineBroadbandProvider: {
          type: String,
        },
        cableSatellite: {
          type: String,
        },
        cableSatelliteProvider: {
          type: String,
        },
        mainWiredSmoke: {
          type: String,
        },
      },
      utilitySuppliers: {
        gasObject: {
          gas: {
            type: String,
          },
          meterType: {
            type: String,
          },
          location: {
            type: String,
          },
          supplier: {
            type: String,
          },
          meterPoint: {
            type: String,
          },
          meterSerialNo: {
            type: String,
          },
        },
        electricity: {
          meterType: {
            type: String,
          },
          location: {
            type: String,
          },
          supplier: {
            type: String,
          },
          supplyNumber: {
            type: String,
          },
          meterSerialNo: {
            type: String,
          },
        },
      },
      insurance: {
        buildings: {
          insuredWith: {
            type: String,
          },
          excessAmount: {
            type: String,
          },
          policyNumber: {
            type: String,
          },
          expiryDate: {
            type: Date,
          },
        },
        contents: {
          insuredWith: {
            type: String,
          },
          excessAmount: {
            type: String,
          },
          policyNumber: {
            type: String,
          },
          expiryDate: {
            type: Date,
          },
        },
      },
      hmoLicenceObject: {
        hmoLicence: {
          type: String,
        },
        referenceNumber: {
          type: String,
        },
        noOfOccupants: {
          type: String,
        },
        renewalDate: {
          type: Date,
        },
        handledBy: {
          type: [String],
        },
      },
    },

    ownershipDetails: {
      propertyOwnership: {
        type: [String],
      },
      ownerOne: {
        title: {
          type: String,
        },
        companyName: {
          type: String,
        },
        firstName: {
          type: String,
        },
        emailAddress: {
          type: String,
        },
        surname: {
          type: String,
        },
        landlineNo: {
          type: String,
        },
        correspondenceAddress: {
          type: String,
        },
        mobileTelephone: {
          type: String,
        },
        townCity: {
          type: String,
        },
        landlordRegistrationNumber: {
          type: String,
        },
        postCode: {
          type: String,
        },
        landlordRegistrationApplication: {
          type: String,
        },
      },
      ownerTwo: {
        title: {
          type: String,
        },
        companyName: {
          type: String,
        },
        firstName: {
          type: String,
        },
        emailAddress: {
          type: String,
        },
        surname: {
          type: String,
        },
        landlineNo: {
          type: String,
        },
        correspondenceAddress: {
          type: String,
        },
        mobileTelephone: {
          type: String,
        },
        townCity: {
          type: String,
        },
        landlordRegistrationNumber: {
          type: String,
        },
        postCode: {
          type: String,
        },
        landlordRegistrationApplication: {
          type: String,
        },
      },
      contactMethod: {
        agreedContactMethod: {
          type: [String],
        },
        contactMe: {
          type: [String],
        },
      },
      bankAccount: {
        ownerOne: {
          sortCode: {
            type: String,
          },
          bank: {
            type: String,
          },
          accountNo: {
            type: String,
          },
          accountName: {
            type: String,
          },
        },
        ownerTwo: {
          sortCode: {
            type: String,
          },
          bank: {
            type: String,
          },
          accountNo: {
            type: String,
          },
          accountName: {
            type: String,
          },
        },
        percentage: {
          ownerOne: {
            type: String,
          },
          ownerTwo: {
            type: String,
          },
        },
      },
      emergencyContact: {
        fullName: {
          type: String,
        },
        relationship: {
          type: String,
        },
        telephoneNo: {
          type: String,
        },
        emailAddress: {
          type: String,
        },
      },
      landlordTaxDeclaration: {
        type: [String],
      },
    },

    propertyMaintenance: {
      approvedRepairLimit: {
        type: String,
      },

      maintenanceContactDetails: {
        fullName: {
          type: String,
        },
        relationshipOwner: {
          type: String,
        },
        telephone: {
          type: String,
        },
        emailAddress: {
          type: String,
        },
      },

      preferredcontractors: {
        contractorOne: {
          contractorName: {
            type: String,
          },
          contractorTrade: {
            type: String,
          },
          contractorPhone: {
            type: String,
          },
          contractorEmail: {
            type: String,
          },
        },
        contractorTwo: {
          contractorName: {
            type: String,
          },
          contractorTrade: {
            type: String,
          },
          contractorPhone: {
            type: String,
          },
          contractorEmail: {
            type: String,
          },
        },
        contractorThree: {
          contractorName: {
            type: String,
          },
          contractorTrade: {
            type: String,
          },
          contractorPhone: {
            type: String,
          },
          contractorEmail: {
            type: String,
          },
        },
        contractorFour: {
          contractorName: {
            type: String,
          },
          contractorTrade: {
            type: String,
          },
          contractorPhone: {
            type: String,
          },
          contractorEmail: {
            type: String,
          },
        },
      },

      serviceContracts: {
        serviceAgreement: {
          type: String,
        },
        provider: {
          type: String,
        },
        typeOfCover: {
          type: String,
        },
        accountNumber: {
          type: String,
        },
        contactTelSuppliedBy: {
          type: String,
        },
        annualGasSafetyInspection: {
          type: String,
        },
      },

      safetyTestsEssentialCertificates: {
        gsc: {
          type: [String],
        },
        epc: {
          type: [String],
        },
        lra: {
          type: [String],
        },
        eicr: {
          type: [String],
        },
        pat: {
          type: [String],
        },
        smokeAndHeatDetector: {
          type: String,
        },
      },

      warranties: [
        {
          item: {
            type: String,
          },
          manufacturer: {
            type: String,
          },
          model: {
            type: String,
          },
          warrantyExpiryDate: {
            type: Date,
          },
          provider: {
            type: String,
          },
          contactDetails: {
            type: String,
          },
          refNumber: {
            type: String,
          },
        },
      ],

      additionalInformation: {
        type: String,
      },
    },

    marketResearch: {
      marketResearchOption: {
        type: String,
      },
    },

    engagementOfNuova: {
      ownerOne: {
        firstName: {
          type: String,
        },
        surname: {
          type: String,
        },
        dob: {
          type: Date,
        },
        address: {
          type: String,
        },
        signature: {
          type: String,
        },
        todaysDate: {
          type: String,
        },
      },
      ownerTwo: {
        firstName: {
          type: String,
        },
        surname: {
          type: String,
        },
        dob: {
          type: Date,
        },
        address: {
          type: String,
        },
        signature: {
          type: String,
        },
        todaysDate: {
          type: String,
        },
        mobileTelephone: {
          type: String,
        },
      },
      agent: {
        nuovaAgent: {
          fullName: {
            type: String,
          },
          signature: {
            type: String,
          },
          todaysDate: {
            type: Date,
          },
        },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PropertyFactFind", PropertyFactFindSchema);
