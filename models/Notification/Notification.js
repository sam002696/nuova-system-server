const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    MaintenanceInfo: [
      {
        username: {
          type: String,
        },
        email: {
          type: String,
        },
        issueName: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    PropertyFactFind: [
      {
        ownerEmail: {
          type: String,
        },
        ownerName: {
          type: String,
        },
        ownerPhoneno: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    TenantFactFind: [
      {
        tenantEmail: {
          type: String,
        },
        tenantName: {
          type: String,
        },
        tenantPhoneno: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    Prospects: [
      {
        applicantEmail: {
          type: String,
        },
        applicantName: {
          type: String,
        },
        applicantPhoneno: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    Calender: [
      {
        eventName: {
          type: String,
        },
        eventDetails: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    TaskReceivePm: [
      {
        taskTitle: {
          type: String,
        },
        assignedUsername: {
          type: String,
        },
        assignedUseremail: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    TaskReceiveTenant: [
      {
        taskTitle: {
          type: String,
        },
        taskSend: {
          type: String,
        },
        assignedUsername: {
          type: String,
        },
        assignedUseremail: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    TaskReceiveLandlord: [
      {
        taskTitle: {
          type: String,
        },
        taskSend: {
          type: String,
        },
        assignedUsername: {
          type: String,
        },
        assignedUseremail: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    GetPeople: [
      {
        username: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    CertificateAdd: [
      {
        propertyName: {
          type: String,
        },
        propertyAddress: {
          type: String,
        },
        certificateName: {
          type: String,
        },
        certificateProviderEmail: {
          type: String,
        },
        certificateAddedBy: {
          type: String,
        },
        certificateExpiryDate: {
          type: Date,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    TenantMaintenance: {
      TenantMaintenanceAcceptance: [
        {
          tenantEmail: {
            type: String,
          },
          maintenanceTitle: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      contractorAssignInfo: [
        {
          tenantEmail: {
            type: String,
          },
          contractorName: {
            type: String,
          },
          issueName: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      jobCompletion: [
        {
          tenantEmail: {
            type: String,
          },
          contractorName: {
            type: String,
          },
          issueName: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      jobIncomplete: [
        {
          tenantEmail: {
            type: String,
          },
          contractorName: {
            type: String,
          },
          issueName: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
    TenantAdd: {
      landlord: [
        {
          landlordEmail: {
            type: String,
          },
          tenantName: {
            type: String,
          },
          propertyName: {
            type: String,
          },
        },
      ],
      propertyManager: [
        {
          tenantName: {
            type: String,
          },
          propertyName: {
            type: String,
          },
        },
      ],
    },
    ReportsDocuments: {
      landlord: {
        inventory: [
          {
            propertyName: {
              type: String,
            },
            landlordEmail: {
              type: String,
            },
            date: {
              type: Date,
              default: Date.now,
            },
          },
        ],
        inspectionReport: [
          {
            propertyName: {
              type: String,
            },
            landlordEmail: {
              type: String,
            },
            date: {
              type: Date,
              default: Date.now,
            },
          },
        ],
      },
      propertyManager: {
        inspectionReport: [
          {
            propertyName: {
              type: String,
            },
            landlordEmail: {
              type: String,
            },
            date: {
              type: Date,
              default: Date.now,
            },
          },
        ],
      },
    },
    PropertyAdd: {
      landlord: [
        {
          landlordEmail: {
            type: String,
          },
          propertyName: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      propertyManager: [
        {
          propertyName: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notifications", NotificationSchema);
