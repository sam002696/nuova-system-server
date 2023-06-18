const { sendMail } = require("../sendEmail");

// send maintenance email to property manager
const sendMaintenanceEmail = async (maintenanceInfo) => {
  const subject = "Maintenance Request";
  const text = `There is a maintenance request.`;
  const html = `
    <html>
      <head>
        <style>
          /* Add your custom styles here */
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
          .title {
            font-size: 24px;
            color: #333333;
            margin-bottom: 10px;
          }
          .description {
            font-size: 16px;
            color: #666666;
            margin-bottom: 20px;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #999999;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">Maintenance Request</h1>
            <p class="description">There is a maintenance request for ${maintenanceInfo.issueName}.</p>
          </div>
          <div class="content">
            <p>${maintenanceInfo.issueDesc}</p>
          </div>
          <div class="footer">
            <p>This email was sent by the Maintenance Request System.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const recipients = ["sadmansakib221@gmail.com", "prangansen634@gmail.com"];
    const emailPromises = recipients.map((recipient) =>
      sendMail(recipient, subject, text, html)
    );

    const emailResults = await Promise.all(emailPromises);
    console.log("Maintenance emails sent:", emailResults);
  } catch (error) {
    console.log("Error sending maintenance emails:", error);
  }
};

const sendMaintenanceAcceptanceToTenantEmail = async (maintenanceInfo) => {
  const subject = "Maintenance Request Acceptance";
  const text = `Your maintenance request has been accepted`;
  const html = `
    <html>
      <head>
        <style>
          /* Add your custom styles here */
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
          .title {
            font-size: 24px;
            color: #333333;
            margin-bottom: 10px;
          }
          .description {
            font-size: 16px;
            color: #666666;
            margin-bottom: 20px;
          }
          .content {
            font-size: 16px;
            color: #333333;
            margin-bottom: 20px;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #999999;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">Maintenance Request Acceptance</h1>
            <p class="description">Your maintenance request for ${maintenanceInfo.issueName} has been accepted.</p>
          </div>
          <div class="content">
            <p><strong>Issue Description:</strong></p>
            <p>${maintenanceInfo.issueDesc}</p>
          </div>
          <div class="footer">
            <p>This email was sent by the Maintenance Request System.</p>
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
  const subject = "Contractor Assignment Information";
  const text = `A contractor has been assigned to your maintenance request`;
  const html = `
    <html>
      <head>
        <style>
          /* Add your custom styles here */
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
          .title {
            font-size: 24px;
            color: #333333;
            margin-bottom: 10px;
          }
          .description {
            font-size: 16px;
            color: #666666;
            margin-bottom: 20px;
          }
          .content {
            font-size: 16px;
            color: #333333;
            margin-bottom: 20px;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #999999;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">Contractor Assignment Information</h1>
            <p class="description">A contractor has been assigned to your maintenance request:</p>
          </div>
          <div class="content">
            <p><strong>Maintenance Request:</strong> ${maintenanceInfo.issueName}</p>
            <p><strong>Contractor Name:</strong> ${contractorInfo.contractorName}</p>
            <p><strong>Contact Number:</strong> ${contractorInfo.contractorPhone}</p>
            <p><strong>Job Bidding Amount:</strong> ${contractorInfo.BiddingAmount}</p>
          </div>
          <div class="footer">
            <p>This email was sent by the Maintenance Request System.</p>
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
  const subject = "Job Completion Information";
  const text = "Your maintenance job has been completed";

  const html = `
    <html>
      <head>
        <style>
          /* Add your custom styles here */
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
          .title {
            font-size: 24px;
            color: #333333;
            margin-bottom: 10px;
          }
          .description {
            font-size: 16px;
            color: #666666;
            margin-bottom: 20px;
          }
          .content {
            font-size: 16px;
            color: #333333;
            margin-bottom: 20px;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #999999;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">Job Completion Information</h1>
            <p class="description">Your maintenance job has been completed:</p>
          </div>
          <div class="content">
            <p><strong>Maintenance Request:</strong> ${maintenanceInfo.issueName}</p>
            <p><strong>Contractor Name:</strong> ${contractorInfo.contractorName}</p>
            <p><strong>Contact Number:</strong> ${contractorInfo.contactNumber}</p>
            <p><strong>Job Bidding Amount:</strong> ${contractorInfo.biddingAmount}</p>
          </div>
          <div class="footer">
            <p>This email was sent by the Maintenance Request System.</p>
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
  const subject = "Job Incompletion Information";
  const text = "There is an issue with your maintenance job";

  const html = `
    <html>
      <head>
        <style>
          /* Add your custom styles here */
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
          .title {
            font-size: 24px;
            color: #333333;
            margin-bottom: 10px;
          }
          .description {
            font-size: 16px;
            color: #666666;
            margin-bottom: 20px;
          }
          .content {
            font-size: 16px;
            color: #333333;
            margin-bottom: 20px;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #999999;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">Job Incompletion Information</h1>
            <p class="description">There is an issue with your maintenance job:</p>
          </div>
          <div class="content">
            <p><strong>Maintenance Request:</strong> ${maintenanceInfo.issueName}</p>
            <p><strong>Contractor Name:</strong> ${contractorInfo.contractorName}</p>
            <p><strong>Contact Number:</strong> ${contractorInfo.contactNumber}</p>
            <p><strong>Issue Description:</strong> ${maintenanceInfo.issueDescription}</p>
          </div>
          <div class="footer">
            <p>This email was sent by the Maintenance Request System.</p>
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

const sendJobInfoToAllContractorEmail = async (maintenanceInfo) => {
  const subject = "Job Information";
  const text = "There is a new job";

  const html = `
    <html>
      <head>
        <style>
          /* Add your custom styles here */
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
          .title {
            font-size: 24px;
            color: #333333;
            margin-bottom: 10px;
          }
          .description {
            font-size: 16px;
            color: #666666;
            margin-bottom: 20px;
          }
          .content {
            font-size: 16px;
            color: #333333;
            margin-bottom: 20px;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #999999;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">New Job Information</h1>
            <p class="description">There is a new maintenance job:</p>
          </div>
          <div class="content">
            <p><strong>Maintenance Request:</strong> ${maintenanceInfo.issueName}</p>
            <p><strong>Issue Description:</strong> ${maintenanceInfo.issueDescription}</p>
            <p><strong>Contact Email:</strong> ${maintenanceInfo.email}</p>
          </div>
          <div class="footer">
            <p>This email was sent by the Maintenance Request System.</p>
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

module.exports = {
  sendMaintenanceEmail,
  sendMaintenanceAcceptanceToTenantEmail,
  sendContractorAssignInfoToTenantEmail,
  sendJobCompletionInfoToTenantEmail,
  sendJobInCompletionInfoToTenantEmail,
  sendJobInfoToAllContractorEmail,
};
