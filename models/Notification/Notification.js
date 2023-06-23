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
        label: {
          type: String,
          default: "MaintenanceInfo",
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
        label: {
          type: String,
          default: "PropertyFactFind",
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
        label: {
          type: String,
          default: "TenantFactFind",
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
        label: {
          type: String,
          default: "Prospects",
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
        label: {
          type: String,
          default: "Calender",
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
        label: {
          type: String,
          default: "TaskReceivePm",
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
        label: {
          type: String,
          default: "TaskReceiveTenant",
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
        label: {
          type: String,
          default: "TaskReceiveLandlord",
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
        label: {
          type: String,
          default: "GetPeople",
        },
      },
    ],
    CertificateAddPM: [
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
        certificateAddMessagePM: {
          type: String,
          default: "Landlord has added a new certificate",
        },
        date: {
          type: Date,
          default: Date.now,
        },
        isViewed: {
          type: Boolean,
          default: false,
        },
        label: {
          type: String,
          default: "CertificateAddPM",
        },
      },
    ],
    CertificateAddLandlord: [
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
        certificateAddMessageLandlord: {
          type: String,
          default: "PM has added a new certificate",
        },
        date: {
          type: Date,
          default: Date.now,
        },
        isViewed: {
          type: Boolean,
          default: false,
        },
        label: {
          type: String,
          default: "CertificateAddLandlord",
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
          label: {
            type: String,
            default: "TenantMaintenanceAcceptance",
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
          label: {
            type: String,
            default: "contractorAssignInfo",
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
          label: {
            type: String,
            default: "jobCompletion",
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
          label: {
            type: String,
            default: "jobIncomplete",
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
          label: {
            type: String,
            default: "TenantAddLandlord",
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
          label: {
            type: String,
            default: "TenantAddPM",
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
            label: {
              type: String,
              default: "InventoryLandlord",
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
            label: {
              type: String,
              default: "InspectionReportLandlord",
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
            label: {
              type: String,
              default: "InspectionReportPM",
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
          label: {
            type: String,
            default: "PropertyAddLandlord",
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
          label: {
            type: String,
            default: "PropertyAddPM",
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
        label: {
          type: String,
          default: "ContractorJobPosting",
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
        label: {
          type: String,
          default: "JobBidderInfo",
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
          label: {
            type: String,
            default: "CompleteJobs",
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
          label: {
            type: String,
            default: "IncompleteJobs",
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
          label: {
            type: String,
            default: "CurrentJobs",
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
          label: {
          type: String,
          default: "DeclinedJobs",
        },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notifications", NotificationSchema);
