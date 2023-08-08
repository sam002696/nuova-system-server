const { sendMail } = require("../sendEmail");

// send maintenance email to property manager
const sendMaintenanceEmail = async (maintenanceInfo) => {
  const subject = "New Maintenance Request";

  // Add your logo URL here
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";

  const html = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f1e9;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .logo-container {
            margin-bottom: 20px;
          }
          .title {
            font-size: 28px;
            color: #333333;
            margin-bottom: 10px;
          }
          .description {
            font-size: 16px;
            color: #555555;
            margin-bottom: 20px;
          }
          .info-label {
            font-size: 14px;
            font-weight: bold;
            color: #333333;
            margin-bottom: 5px;
          }
          .content {
            font-size: 14px;
            color: #555555;
            margin-bottom: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            padding: 20px;
          }
          .info-value {
            margin-bottom: 10px;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #999999;
            font-size: 12px;
          }
          .logo-container {
            text-align: center;
            margin-bottom: 20px;
          }
          .logo-image {
            max-width: 200px;
          }
          .button-container {
            text-align: center;
            margin-top: 20px;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #6e462a;
            color: #ffffff;
            font-size: 14px;
            font-weight: bold;
            text-decoration: none;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo-container">
              <img class="logo-image" src=${logoUrl} alt="Logo">
            </div>
            <h1 class="title">Maintenance Request</h1>
          </div>
          <div class="content">
            <h2 class="info-label">Issue Name:</h2>
            <p class="info-value">${maintenanceInfo.issueName}</p>

            <p class="info-label">Issue Description:</p>
            <p class="info-value">${maintenanceInfo.issueDesc}</p>
            
            <p class="info-label">Property Name:</p>
            <p class="info-value">${maintenanceInfo.propertyName}</p>
            
            <p class="info-label">Tenant Address:</p>
            <p class="info-value">${maintenanceInfo.tenantAddress}</p>
            
            <p class="info-label">Email:</p>
            <p class="info-value">${maintenanceInfo.email}</p>
            
            <p class="info-label">Phone Number:</p>
            <p class="info-value">${maintenanceInfo.phoneNo}</p>
            
            <div class="button-container">
              <button class="button">View Details</button>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent by the Nuova Property Maintenance System.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const recipients = ["sadmansakib221@gmail.com", "prangansen634@gmail.com"];
    const emailPromises = recipients.map((recipient) =>
      sendMail(recipient, subject, null, html)
    );

    const emailResults = await Promise.all(emailPromises);
    console.log("Maintenance emails sent:", emailResults);
  } catch (error) {
    console.log("Error sending maintenance emails:", error);
  }
};

const sendMaintenanceAcceptanceToTenantEmail = async (maintenanceInfo) => {
  const subject = "Maintenance Request Accepted";
  const text = `Your maintenance request has been accepted`;
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
  const html = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f1e9;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .logo-container {
            margin-bottom: 20px;
          }
          .title {
            font-size: 28px;
            color: #333333;
            margin-bottom: 10px;
          }
          .description {
            font-size: 16px;
            color: #555555;
            margin-bottom: 20px;
          }
          .info-label {
            font-size: 14px;
            font-weight: bold;
            color: #333333;
            margin-bottom: 5px;
          }
          .content {
            font-size: 14px;
            color: #555555;
            margin-bottom: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            padding: 20px;
          }
          .info-value {
            margin-bottom: 10px;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #999999;
            font-size: 12px;
          }
          .logo-container {
            text-align: center;
            margin-bottom: 20px;
          }
          .logo-image {
            max-width: 200px;
          }
          .button-container {
            text-align: center;
            margin-top: 20px;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #6e462a;
            color: #ffffff;
            font-size: 14px;
            font-weight: bold;
            text-decoration: none;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo-container">
              <img class="logo-image" src=${logoUrl} alt="Logo">
            </div>
            <h1 class="title">Maintenance Request Acceptance</h1>
          </div>
          <div class="content">
            <h2 class="info-label">Issue Name:</h2>
            <p class="info-value">${maintenanceInfo.issueName}</p>

            <p class="info-label">Issue Description:</p>
            <p class="info-value">${maintenanceInfo.issueDesc}</p>
            
            <p class="info-label">Property Name:</p>
            <p class="info-value">${maintenanceInfo.propertyName}</p>
            
            <p class="info-label">Tenant Address:</p>
            <p class="info-value">${maintenanceInfo.tenantAddress}</p>
            
            <p class="info-label">Email:</p>
            <p class="info-value">${maintenanceInfo.email}</p>
            
            <p class="info-label">Phone Number:</p>
            <p class="info-value">${maintenanceInfo.phoneNo}</p>
            
            <div class="button-container">
              <button class="button">View Details</button>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent by the Nuova Property Maintenance System.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const recipient = maintenanceInfo.email;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Maintenance acceptance email sent:", info);
  } catch (error) {
    console.log("Error sending maintenance acceptance email:", error);
  }
};

const sendContractorAssignInfoToTenantEmail = async (
  maintenanceInfo,
  contractorInfo
) => {
  const subject = "Contractor Assigned for Maintenance Request";
  const text = `A contractor has been assigned to your maintenance request`;
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
  const html = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f1e9;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo-container {
          margin-bottom: 20px;
        }
        .title {
          font-size: 28px;
          color: #333333;
          margin-bottom: 10px;
        }
        .description {
          font-size: 16px;
          color: #555555;
          margin-bottom: 20px;
        }
        .info-label {
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          margin-bottom: 5px;
        }
        .content {
          font-size: 14px;
          color: #555555;
          margin-bottom: 20px;
          background-color: #ffffff;
          border-radius: 5px;
          padding: 20px;
        }
        .info-value {
          margin-bottom: 10px;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #999999;
          font-size: 12px;
        }
        .logo-container {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo-image {
          max-width: 200px;
        }
        .button-container {
          text-align: center;
          margin-top: 20px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #6e462a;
          color: #ffffff;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-container">
            <img class="logo-image" src=${logoUrl} alt="Logo">
          </div>
          <h1 class="title">Information of Assigned Contractor</h1>
        </div>
        <div class="content">
          <h2 class="info-label">Issue Name:</h2>
          <p class="info-value">${maintenanceInfo.issueName}</p>

          <p class="info-label">Issue Description:</p>
          <p class="info-value">${maintenanceInfo.issueDesc}</p>
          
          <p class="info-label">Property Name:</p>
          <p class="info-value">${maintenanceInfo.propertyName}</p>
          
          <p class="info-label">Tenant Address:</p>
          <p class="info-value">${maintenanceInfo.tenantAddress}</p>
          
          <p class="info-label">Contractor Name:</p>
          <p class="info-value">${contractorInfo.contractorName}</p>
          
          <p class="info-label">Contractor Email:</p>
          <p class="info-value">${contractorInfo.contractorEmail}</p>

          <p class="info-label">Contractor Phone:</p>
          <p class="info-value">${contractorInfo.contractorPhone}</p>
          
          <div class="button-container">
            <button class="button">View Details</button>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent by the Nuova Property Maintenance System.</p>
        </div>
      </div>
    </body>
  </html>
`;

  try {
    const recipient = maintenanceInfo.email;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Contractor assignment email sent:", info);
  } catch (error) {
    console.log("Error sending contractor assignment email:", error);
  }
};

const sendJobCompletionInfoToTenantEmail = async (
  maintenanceInfo,
  contractorInfo
) => {
  const subject = "Maintenance Task Completion";
  const text = "Your maintenance task has been completed";
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
  const html = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f1e9;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo-container {
          margin-bottom: 20px;
        }
        .title {
          font-size: 28px;
          color: #333333;
          margin-bottom: 10px;
        }
        .description {
          font-size: 16px;
          color: #555555;
          margin-bottom: 20px;
        }
        .info-label {
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          margin-bottom: 5px;
        }
        .content {
          font-size: 14px;
          color: #555555;
          margin-bottom: 20px;
          background-color: #ffffff;
          border-radius: 5px;
          padding: 20px;
        }
        .info-value {
          margin-bottom: 10px;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #999999;
          font-size: 12px;
        }
        .logo-container {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo-image {
          max-width: 200px;
        }
        .button-container {
          text-align: center;
          margin-top: 20px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #6e462a;
          color: #ffffff;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-container">
            <img class="logo-image" src=${logoUrl} alt="Logo">
          </div>
          <h1 class="title">Your Maintenance Task has been Completed</h1>
        </div>
        <div class="content">
          <h2 class="info-label">Issue Name:</h2>
          <p class="info-value">${maintenanceInfo.issueName}</p>

          <p class="info-label">Issue Description:</p>
          <p class="info-value">${maintenanceInfo.issueDesc}</p>
          
          <p class="info-label">Property Name:</p>
          <p class="info-value">${maintenanceInfo.propertyName}</p>
          
          <p class="info-label">Tenant Address:</p>
          <p class="info-value">${maintenanceInfo.tenantAddress}</p>
          
          <p class="info-label">Contractor Name:</p>
          <p class="info-value">${contractorInfo.contractorName}</p>
          
          <p class="info-label">Contractor Email:</p>
          <p class="info-value">${contractorInfo.contractorEmail}</p>

          <p class="info-label">Contractor Phone:</p>
          <p class="info-value">${contractorInfo.contractorPhone}</p>

          <p class="info-label">Contractor Payment Amount :</p>
          <p class="info-value">${contractorInfo.biddingAmount} GBP</p>
          
          <div class="button-container">
            <button class="button">View Details</button>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent by the Nuova Property Maintenance System.</p>
        </div>
      </div>
    </body>
  </html>
`;

  try {
    const recipient = maintenanceInfo.email;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Job completion email sent:", info);
  } catch (error) {
    console.log("Error sending job completion email:", error);
  }
};

const sendJobInCompletionInfoToTenantEmail = async (
  maintenanceInfo,
  contractorInfo
) => {
  const subject = "Maintenance Task Remains Incomplete";
  const text = "There is an issue with your maintenance job";
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
  const html = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f1e9;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo-container {
          margin-bottom: 20px;
        }
        .title {
          font-size: 28px;
          color: #333333;
          margin-bottom: 10px;
        }
        .description {
          font-size: 16px;
          color: #555555;
          margin-bottom: 20px;
        }
        .info-label {
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          margin-bottom: 5px;
        }
        .content {
          font-size: 14px;
          color: #555555;
          margin-bottom: 20px;
          background-color: #ffffff;
          border-radius: 5px;
          padding: 20px;
        }
        .info-value {
          margin-bottom: 10px;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #999999;
          font-size: 12px;
        }
        .logo-container {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo-image {
          max-width: 200px;
        }
        .button-container {
          text-align: center;
          margin-top: 20px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #6e462a;
          color: #ffffff;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-container">
            <img class="logo-image" src=${logoUrl} alt="Logo">
          </div>
          <h1 class="title">Issue with your Maintenance Request : Task Incomplete</h1>
        </div>
        <div class="content">
          <h2 class="info-label">Issue Name:</h2>
          <p class="info-value">${maintenanceInfo.issueName}</p>

          <p class="info-label">Issue Description:</p>
          <p class="info-value">${maintenanceInfo.issueDesc}</p>
          
          <p class="info-label">Property Name:</p>
          <p class="info-value">${maintenanceInfo.propertyName}</p>
          
          <p class="info-label">Tenant Address:</p>
          <p class="info-value">${maintenanceInfo.tenantAddress}</p>
          
          <div class="button-container">
            <button class="button">View Details</button>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent by the Nuova Property Maintenance System.</p>
        </div>
      </div>
    </body>
  </html>
`;

  try {
    const recipient = maintenanceInfo.email;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Job incompletion email sent:", info);
  } catch (error) {
    console.log("Error sending job incompletion email:", error);
  }
};

// done

const sendJobInfoToAllContractorEmail = async (maintenanceInfo) => {
  const subject = "New Job Posting On Nuova Property Portal";
  const text = "There is a new job";
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
  const html = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f1e9;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo-container {
          margin-bottom: 20px;
        }
        .title {
          font-size: 28px;
          color: #333333;
          margin-bottom: 10px;
        }
        .description {
          font-size: 16px;
          color: #555555;
          margin-bottom: 20px;
        }
        .info-label {
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          margin-bottom: 5px;
        }
        .content {
          font-size: 14px;
          color: #555555;
          margin-bottom: 20px;
          background-color: #ffffff;
          border-radius: 5px;
          padding: 20px;
        }
        .info-value {
          margin-bottom: 10px;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #999999;
          font-size: 12px;
        }
        .logo-container {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo-image {
          max-width: 200px;
        }
        .button-container {
          text-align: center;
          margin-top: 20px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #6e462a;
          color: #ffffff;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-container">
            <img class="logo-image" src=${logoUrl} alt="Logo">
          </div>
          <h1 class="title">Your Job Alert for Nuova Property Maintenance Issue</h1>
        </div>
        <div class="content">
          <h2 class="info-label">Issue Name:</h2>
          <p class="info-value">${maintenanceInfo.issueName}</p>

          <p class="info-label">Issue Description:</p>
          <p class="info-value">${maintenanceInfo.issueDesc}</p>
          
          <p class="info-label">Property Name:</p>
          <p class="info-value">${maintenanceInfo.propertyName}</p>
          
          <p class="info-label">Tenant Address:</p>
          <p class="info-value">${maintenanceInfo.tenantAddress}</p>
          
          <div class="button-container">
            <button class="button">View Details</button>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent by Nuova Property Contractor Job Alert System.</p>
        </div>
      </div>
    </body>
  </html>
`;

  try {
    const recipients = await User.find({ role: "Contractor" }).distinct(
      "email"
    );
    const emailPromises = recipients.map((recipient) =>
      sendMail(recipient, subject, text, html)
    );

    const emailResults = await Promise.all(emailPromises);
    console.log("Job Information emails sent:", emailResults);
  } catch (error) {
    console.log("Error sending Job Information emails:", error);
  }
};

const sendCurrentJobInfoToSingleContractorEmail = async (
  maintenanceInfo,
  biddingInfo
) => {
  const subject = "New Current Job Information";
  const text = "New Current Job Information";
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
  const html = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f1e9;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo-container {
          margin-bottom: 20px;
        }
        .title {
          font-size: 28px;
          color: #333333;
          margin-bottom: 10px;
        }
        .description {
          font-size: 16px;
          color: #555555;
          margin-bottom: 20px;
        }
        .info-label {
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          margin-bottom: 5px;
        }
        .content {
          font-size: 14px;
          color: #555555;
          margin-bottom: 20px;
          background-color: #ffffff;
          border-radius: 5px;
          padding: 20px;
        }
        .info-value {
          margin-bottom: 10px;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #999999;
          font-size: 12px;
        }
        .logo-container {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo-image {
          max-width: 200px;
        }
        .button-container {
          text-align: center;
          margin-top: 20px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #6e462a;
          color: #ffffff;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-container">
            <img class="logo-image" src=${logoUrl} alt="Logo">
          </div>
          <h1 class="title">Your Bidding for Nuova Property Maintenance Task has Accepted</h1>
          <h2 class="info-label">See Details in Current Job Section </h2>
        </div>
        <div class="content">
          <h2 class="info-label">Issue Name:</h2>
          <p class="info-value">${maintenanceInfo.issueName}</p>

          <p class="info-label">Issue Description:</p>
          <p class="info-value">${maintenanceInfo.issueDesc}</p>
          
          <p class="info-label">Property Name:</p>
          <p class="info-value">${maintenanceInfo.propertyName}</p>
          
          <p class="info-label">Tenant Address:</p>
          <p class="info-value">${maintenanceInfo.tenantAddress}</p>

          <p class="info-label">Contractor Name:</p>
          <p class="info-value">${biddingInfo.contractorName}</p>
          
          <p class="info-label">Contractor Email:</p>
          <p class="info-value">${biddingInfo.contractorEmail}</p>

          <p class="info-label">Contractor Phone:</p>
          <p class="info-value">${biddingInfo.contractorPhone}</p>

          <p class="info-label">Contractor Payment Amount :</p>
          <p class="info-value">${biddingInfo.BiddingAmount} GBP</p>
          
          <div class="button-container">
            <button class="button">View Details</button>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent by Nuova Property Contractor Job Alert System.</p>
        </div>
      </div>
    </body>
  </html>
`;

  try {
    const recipient = biddingInfo.contractorEmail;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Contractor current job info email sent:", info);
  } catch (error) {
    console.log("Error sending contractor current job info email:", error);
  }
};

const sendCompleteJobInfoToSingleContractorEmail = async (
  maintenanceInfo,
  biddingInfo
) => {
  const subject = "Your Job Completion Information";
  const text = "Completed Maintenance Job Information";
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
  const html = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f1e9;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo-container {
          margin-bottom: 20px;
        }
        .title {
          font-size: 28px;
          color: #333333;
          margin-bottom: 10px;
        }
        .description {
          font-size: 16px;
          color: #555555;
          margin-bottom: 20px;
        }
        .info-label {
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          margin-bottom: 5px;
        }
        .content {
          font-size: 14px;
          color: #555555;
          margin-bottom: 20px;
          background-color: #ffffff;
          border-radius: 5px;
          padding: 20px;
        }
        .info-value {
          margin-bottom: 10px;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #999999;
          font-size: 12px;
        }
        .logo-container {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo-image {
          max-width: 200px;
        }
        .button-container {
          text-align: center;
          margin-top: 20px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #6e462a;
          color: #ffffff;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-container">
            <img class="logo-image" src=${logoUrl} alt="Logo">
          </div>
          <h1 class="title">Your Current Job for Nuova Property Maintenance Task has Completed</h1>
          <h2 class="info-label">See Details in Complete Job Section </h2>
        </div>
        <div class="content">
          <h2 class="info-label">Issue Name:</h2>
          <p class="info-value">${maintenanceInfo.issueName}</p>

          <p class="info-label">Issue Description:</p>
          <p class="info-value">${maintenanceInfo.issueDesc}</p>
          
          <p class="info-label">Property Name:</p>
          <p class="info-value">${maintenanceInfo.propertyName}</p>
          
          <p class="info-label">Tenant Address:</p>
          <p class="info-value">${maintenanceInfo.tenantAddress}</p>

          <p class="info-label">Contractor Name:</p>
          <p class="info-value">${biddingInfo.contractorName}</p>
          
          <p class="info-label">Contractor Email:</p>
          <p class="info-value">${biddingInfo.contractorEmail}</p>

          <p class="info-label">Contractor Phone:</p>
          <p class="info-value">${biddingInfo.contractorPhone}</p>

          <p class="info-label">Contractor Payment Amount :</p>
          <p class="info-value">${biddingInfo.biddingAmount} GBP</p>
          
          <div class="button-container">
            <button class="button">View Details</button>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent by Nuova Property Contractor Job Alert System.</p>
        </div>
      </div>
    </body>
  </html>
`;

  try {
    const recipient = biddingInfo.contractorEmail;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Contractor complete job info email sent:", info);
  } catch (error) {
    console.log("Error sending contractor complete job info email:", error);
  }
};

const sendIncompleteJobInfoToSingleContractorEmail = async (
  maintenanceInfo,
  biddingInfo
) => {
  const subject = "Your Current Job has been marked as Incomplete";
  const text = `Incomplete Maintenance Job Information:`;
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
  const html = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f1e9;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo-container {
          margin-bottom: 20px;
        }
        .title {
          font-size: 28px;
          color: #333333;
          margin-bottom: 10px;
        }
        .description {
          font-size: 16px;
          color: #555555;
          margin-bottom: 20px;
        }
        .info-label {
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          margin-bottom: 5px;
        }
        .content {
          font-size: 14px;
          color: #555555;
          margin-bottom: 20px;
          background-color: #ffffff;
          border-radius: 5px;
          padding: 20px;
        }
        .info-value {
          margin-bottom: 10px;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #999999;
          font-size: 12px;
        }
        .logo-container {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo-image {
          max-width: 200px;
        }
        .button-container {
          text-align: center;
          margin-top: 20px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #6e462a;
          color: #ffffff;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-container">
            <img class="logo-image" src=${logoUrl} alt="Logo">
          </div>
          <h1 class="title">Your Current Job for Nuova Property Maintenance Task is Incomplete.</h1>
          <h2 class="info-label">See Details in Incomplete Job Section </h2>
        </div>
        <div class="content">
          <h2 class="info-label">Issue Name:</h2>
          <p class="info-value">${maintenanceInfo.issueName}</p>

          <p class="info-label">Issue Description:</p>
          <p class="info-value">${maintenanceInfo.issueDesc}</p>
          
          <p class="info-label">Property Name:</p>
          <p class="info-value">${maintenanceInfo.propertyName}</p>
          
          <p class="info-label">Tenant Address:</p>
          <p class="info-value">${maintenanceInfo.tenantAddress}</p>

          <p class="info-label">Contractor Name:</p>
          <p class="info-value">${biddingInfo.contractorName}</p>
          
          <p class="info-label">Contractor Email:</p>
          <p class="info-value">${biddingInfo.contractorEmail}</p>

          <p class="info-label">Contractor Phone:</p>
          <p class="info-value">${biddingInfo.contractorPhone}</p>

          <p class="info-label">Contractor Payment Amount :</p>
          <p class="info-value">${biddingInfo.biddingAmount} GBP</p>
          
          <div class="button-container">
            <button class="button">View Details</button>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent by Nuova Property Contractor Job Alert System.</p>
        </div>
      </div>
    </body>
  </html>
`;

  try {
    const recipient = biddingInfo.contractorEmail;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Contractor incomplete job info email sent:", info);
  } catch (error) {
    console.log("Error sending contractor incomplete job info email:", error);
  }
};

const sendDeclinedJobInfoToSingleContractorEmail = async (
  maintenanceInfo,
  bididngInfo
) => {
  const subject = "Declination for your applied Maintenance Job ";
  const text = `Declined Maintenance Job Information:`;
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
  const html = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f1e9;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo-container {
          margin-bottom: 20px;
        }
        .title {
          font-size: 28px;
          color: #333333;
          margin-bottom: 10px;
        }
        .description {
          font-size: 16px;
          color: #555555;
          margin-bottom: 20px;
        }
        .info-label {
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          margin-bottom: 5px;
        }
        .content {
          font-size: 14px;
          color: #555555;
          margin-bottom: 20px;
          background-color: #ffffff;
          border-radius: 5px;
          padding: 20px;
        }
        .info-value {
          margin-bottom: 10px;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #999999;
          font-size: 12px;
        }
        .logo-container {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo-image {
          max-width: 200px;
        }
        .button-container {
          text-align: center;
          margin-top: 20px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #6e462a;
          color: #ffffff;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-container">
            <img class="logo-image" src=${logoUrl} alt="Logo">
          </div>
          <h1 class="title">Your Application for Nuova Property Maintenance Task is Declined.</h1>
          <h2 class="info-label">See Details in Declined Job Section </h2>
        </div>
        <div class="content">
          <h2 class="info-label">Issue Name:</h2>
          <p class="info-value">${maintenanceInfo.issueName}</p>

          <p class="info-label">Issue Description:</p>
          <p class="info-value">${maintenanceInfo.issueDesc}</p>
          
          <p class="info-label">Property Name:</p>
          <p class="info-value">${maintenanceInfo.propertyName}</p>
          
          <p class="info-label">Tenant Address:</p>
          <p class="info-value">${maintenanceInfo.tenantAddress}</p>
          
          <div class="button-container">
            <button class="button">View Details</button>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent by Nuova Property Contractor Job Alert System.</p>
        </div>
      </div>
    </body>
  </html>
`;

  try {
    const recipient = bididngInfo.contractorEmail;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Contractor declined job info email sent:", info);
  } catch (error) {
    console.log("Error sending contractor declined job info email:", error);
  }
};

module.exports = {
  sendMaintenanceEmail,
  sendMaintenanceAcceptanceToTenantEmail,
  sendContractorAssignInfoToTenantEmail,
  sendJobCompletionInfoToTenantEmail,
  sendJobInCompletionInfoToTenantEmail,
  sendJobInfoToAllContractorEmail,
  sendCurrentJobInfoToSingleContractorEmail,
  sendCompleteJobInfoToSingleContractorEmail,
  sendIncompleteJobInfoToSingleContractorEmail,
  sendDeclinedJobInfoToSingleContractorEmail,
};
