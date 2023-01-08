const mongoose = require("mongoose");

const InspectionReportSchema = new mongoose.Schema(
  {
    propertyInspectionDate: {
      inspectionDate: {
        type: Date,
      },
    },
    rentalPropertyInformation: {
      addresss: {
        type: String,
      },
    },
    inspectorInformation: {
      inspectorName: {
        type: String,
      },
      inspectorPhone: {
        type: String,
      },
      inspectorEmail: {
        type: String,
      },
    },
    tenantInformation: {
      tenantName: {
        type: String,
      },
      tenantPhone: {
        type: String,
      },
      tenantEmail: {
        type: String,
      },
    },
    agentInformation: {
      agentName: {
        type: String,
      },
    },
    forwardingAddAfterMoveOut: {
      forwardingAddress: {
        type: String,
      },
    },

    rentalPropertyCondition: {
      entryway1: {
        condition: {
          type: String,
        },
      },
      entryway2: {
        condition: {
          type: String,
        },
      },
      livingRoom: {
        condition: {
          type: String,
        },
      },
      diningRoom: {
        condition: {
          type: String,
        },
      },
      kitchen: {
        condition: {
          type: String,
        },
      },
      bedroom1: {
        condition: {
          type: String,
        },
      },
      bedroom2: {
        condition: {
          type: String,
        },
      },
      bedroom3: {
        condition: {
          type: String,
        },
      },
      bathroom1: {
        condition: {
          type: String,
        },
      },
      bathroom2: {
        condition: {
          type: String,
        },
      },
      bathroom3: {
        condition: {
          type: String,
        },
      },
      stairway1: {
        condition: {
          type: String,
        },
      },
      stairway2: {
        condition: {
          type: String,
        },
      },
      hallway1: {
        condition: {
          type: String,
        },
      },
      hallway2: {
        condition: {
          type: String,
        },
      },
      basement: {
        condition: {
          type: String,
        },
      },
      balcony: {
        condition: {
          type: String,
        },
      },
      garage: {
        condition: {
          type: String,
        },
      },
      yard: {
        condition: {
          type: String,
        },
      },
      numKeysControls: {
        condition: {
          type: String,
        },
      },
      safetyEquipment: {
        condition: {
          type: String,
        },
      },
    },
    repairsToBeCompleted: [
      {
        tiarc: {
          type: String,
        },
        desOfRepair: {
          type: String,
        },
        dateFixed: {
          type: String,
        },
      },
    ],

    acceptanceOfInspectionReport: {
      name: {
        type: String,
      },
      agree: {
        type: String,
      },
      disagree: {
        type: String,
      },
      disagreeTerm: {
        type: String,
      },
      signingDate: {
        type: Date,
      },
      signOfInspectorOrAgent: {
        type: String,
      },
      signOfTenantOrAgent: {
        type: String,
      },
    },

    authorisationForDeduction: {
      name: {
        type: String,
      },
      amountDeposit: [
        {
          amountDeducted: {
            type: String,
          },
          desOfDeposit: {
            type: String,
          },
        },
      ],
      signingDate: {
        type: Date,
      },
      signOfTenantOrAgent: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InspectionReport", InspectionReportSchema);
