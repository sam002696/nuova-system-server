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
        maintenanceIssueMessage: {
          type: String,
          default: "a new issue has been added",
        },
        isViewed: {
          type: Boolean,
          default: false,
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
        propertyFactFindMessage: {
          type: String,
          default: "a new property fact find has been added",
        },
        isViewed: {
          type: Boolean,
          default: false,
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
        tenantFactFindForm: {
          type: String,
          default: "tenant fact find form has been added",
        },
        isViewed: {
          type: Boolean,
          default: false,
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
        prospectsInfoMessage: {
          type: String,
          default: "a new prospect has been added",
        },
        isViewed: {
          type: Boolean,
          default: false,
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
        calenderMessage: {
          type: String,
          default: "event has been added",
        },
        isViewed: {
          type: Boolean,
          default: false,
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
        taskReceivePm: {
          type: String,
          default: "a new task has been received",
        },
        isViewed: {
          type: Boolean,
          default: false,
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
        tenantName: {
          type: String,
        },
        tenantEmail: {
          type: String,
        },
        taskAssignedTo: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },

        tenantTaskReceiveMessage: {
          type: String,
          default: "task has been assigned",
        },
        isViewed: {
          type: Boolean,
          default: false,
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
        landlordName: {
          type: String,
        },
        landlordEmail: {
          type: String,
        },
        taskAssignedTo: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        landlordTaskReceiveMessage: {
          type: String,
          default: "task has been assigned",
        },
        isViewed: {
          type: Boolean,
          default: false,
        },
      },
    ],
    GetPeople: [
      {
        username: {
          type: String,
        },
        email: {
          type: String,
        },
        role: {
          type: String,
        },
        userAddMessage: {
          type: String,
          default: "has added a new user",
        },
        date: {
          type: Date,
          default: Date.now,
        },
        isViewed: {
          type: Boolean,
          default: false,
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
        isViewed: {
          type: Boolean,
          default: false,
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
          tenantMaintenanceAcceptanceMessage: {
            type: String,
            default:
              "maintenance request has been accepted by property manager",
          },
          isViewed: {
            type: Boolean,
            default: false,
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
          contractorAssignMessage: {
            type: String,
            default: "contractor has been assigned for the job",
          },
          isViewed: {
            type: Boolean,
            default: false,
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
          jobCompletionMessage: {
            type: String,
            default: "job is completed",
          },
          isViewed: {
            type: Boolean,
            default: false,
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
          jobIncompletionMessage: {
            type: String,
            default: "job is incomplete",
          },
          isViewed: {
            type: Boolean,
            default: false,
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
          date: {
            type: Date,
            default: Date.now,
          },
          isViewed: {
            type: Boolean,
            default: false,
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
          date: {
            type: Date,
            default: Date.now,
          },
          tenantAddMessagePm: {
            type: String,
            default: "tenant has been added",
          },
          isViewed: {
            type: Boolean,
            default: false,
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
            reportDocumentInventoryMessageLandlord: {
              type: String,
              default: "inventory report has been added",
            },
            isViewed: {
              type: Boolean,
              default: false,
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
            reportDocumentInspectionMessageLandlord: {
              type: String,
              default: "inspection report has been added",
            },
            isViewed: {
              type: Boolean,
              default: false,
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
            landlordName: {
              type: String,
            },
            date: {
              type: Date,
              default: Date.now,
            },
            reportDocumentInspectionMessagePm: {
              type: String,
              default: "inspection report has been added",
            },
            isViewed: {
              type: Boolean,
              default: false,
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
          propertyAddMessageLandlord: {
            type: String,
            default: "property has been added",
          },
          isViewed: {
            type: Boolean,
            default: false,
          },
        },
      ],
      propertyManager: [
        {
          propertyName: {
            type: String,
          },
          landlordName: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
          propertyAddMessagePm: {
            type: String,
            default: "property has been added",
          },
          isViewed: {
            type: Boolean,
            default: false,
          },
        },
      ],
    },
    //Contractor Portal
    //Find Jobs

    ContractorJobPosting: [
      {
        issueName: {
          type: String,
        },
        tenantAddress: {
          type: String,
        },
        email: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        contractorJobPosting: {
          type: String,
          default: "new job has been posted!",
        },
        isViewed: {
          type: Boolean,
          default: false,
        },
      },
    ],

    //bidder info
    JobBidderInfo: [
      {
        bidderName: {
          type: String,
        },
        bidderAmount: {
          type: Number,
        },
        jobName: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        jobBidderInfo: {
          type: String,
          default: "contractor has bid for the job",
        },
        isViewed: {
          type: Boolean,
          default: false,
        },
      },
    ],
    //Contractor Portal
    //Job Status Showed in My Jobs in Contractor Portal
    Jobs: {
      CompleteJobs: [
        {
          contractorName: {
            type: String,
          },
          contractorEmail: {
            type: String,
          },
          issueName: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
          completeJob: {
            type: String,
            default: "job has been completed!",
          },
          isViewed: {
            type: Boolean,
            default: false,
          },
        },
      ],
      IncompleteJobs: [
        {
          contractorName: {
            type: String,
          },
          contractorEmail: {
            type: String,
          },
          issueName: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
          inCompleteJob: {
            type: String,
            default: "job has been incompleted!",
          },
          isViewed: {
            type: Boolean,
            default: false,
          },
        },
      ],
      CurrentJobs: [
        {
          contractorName: {
            type: String,
          },
          contractorEmail: {
            type: String,
          },
          issueName: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
          currentJob: {
            type: String,
            default: "this is the current job",
          },
          isViewed: {
            type: Boolean,
            default: false,
          },
        },
      ],
      DeclinedJobs: [
        {
          contractorName: {
            type: String,
          },
          contractorEmail: {
            type: String,
          },
          issueName: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
          declineJob: {
            type: String,
            default: "job has been declined!",
          },
          isViewed: {
            type: Boolean,
            default: false,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notifications", NotificationSchema);
