const { sendMail } = require("../sendEmail");

const sendInventoryInfoToLandlordEmail = async (
  inventoryInfo,
  propertyInfo
) => {
  const subject = "Inventory Report";
  const text = "Inventory report for your property";
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
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
      .logo-container {
        text-align: center;
        margin-bottom: 20px;
      }
      .logo-image {
        max-width: 200px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo-container">
        <img class="logo-image" src=${logoUrl} alt="Logo">
      </div>
      <div class="header">
        <h1 class="title">Inventory Report</h1>
        <p class="description">An inventory report has been generated for your property:</p>
      </div>
      <div class="content">
        <p><strong>Property Address:</strong> ${
          propertyInfo.propertyAddress.addressline1
        }</p>
        <p><strong>Date:</strong> ${new Date(
          inventoryInfo.createdAt
        ).toDateString()}</p>
        
      </div>
      <div class="footer">
        <p>This email was sent by the Property Management System.</p>
      </div>
    </div>
  </body>
  </html>
  
  `;

  try {
    const recipient = propertyInfo.landlordInfo.landlordEmail;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Inventory report email sent:", info);
  } catch (error) {
    console.log("Error sending inventory report email:", error);
  }
};

const sendInspectionInfoToPropertyManagerEmail = async (
  inspectionInfo,
  propertyInfo
) => {
  const subject = "Inspection Report";
  const text = "Inspection report for your property";
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
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
      .signature-container {
        text-align: right;
        margin-top: 40px;
      }
      .signature {
        border-top: 1px solid #333333;
        display: inline-block;
        padding-top: 10px;
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
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo-container">
        <img class="logo-image" src=${logoUrl} alt="Logo">
      </div>
      <div class="header">
        <h1 class="title">Inventory Report</h1>
        <p class="description">An inspection report has been updated for your property:</p>
      </div>
      <div class="content">
        <p><strong>Property Name:</strong> ${
          propertyInfo.propertyAddress.propertyName
        }</p>
        <p><strong>Date:</strong> ${new Date(
          inspectionInfo.createdAt
        ).toDateString()}</p>
        <p><strong>Report:</strong></p>
        
      </div>
      <div class="footer">
        <p>This email was sent by the Property Management System.</p>
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
    console.log("Inventory report emails sent:", emailResults);
  } catch (error) {
    console.log("Error sending inventory report emails:", error);
  }
};

const sendInspectionInfoToLandlordEmail = async (
  inspectionInfo,
  propertyInfo
) => {
  const subject = "Inspection Report";
  const text = "Inspection report for your property";
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
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
      .signature-container {
        text-align: right;
        margin-top: 40px;
      }
      .signature {
        border-top: 1px solid #333333;
        display: inline-block;
        padding-top: 10px;
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
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo-container">
        <img class="logo-image" src=${logoUrl} alt="Logo">
      </div>
      <div class="header">
        <h1 class="title">Inventory Report</h1>
        <p class="description">An inspection report has been generated for your property:</p>
      </div>
      <div class="content">
        <p><strong>Property Address:</strong> ${
          inventoryInfo.propertyAddress
        }</p>
        <p><strong>Date:</strong> ${new Date(
          inspectionInfo.createdAt
        ).toDateString()}</p>
       
      </div>
      <div class="footer">
        <p>This email was sent by the Property Management System.</p>
      </div>
    </div>
  </body>
  </html>
  
    `;

  try {
    const recipient = propertyInfo.landlordInfo.landlordEmail;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Inspection report email sent:", info);
  } catch (error) {
    console.log("Error sending inspection report email:", error);
  }
};

module.exports = {
  sendInventoryInfoToLandlordEmail,
  sendInspectionInfoToPropertyManagerEmail,
  sendInspectionInfoToLandlordEmail,
};
