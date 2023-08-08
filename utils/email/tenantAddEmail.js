const { sendMail } = require("../sendEmail");

const sendTenantAddInfoToPropertyManager = async (tenantInfo) => {
  const subject = "New Tenant Added";
  const text = "A new tenant has been added to your property";
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
        <h1 class="title">New Tenant Added</h1>
        <p class="description">A new tenant has been added to your property:</p>
      </div>
      <div class="content">
        <p><strong>Tenant Name:</strong> ${tenantInfo.tenantPersonalInfo.fullName}</p>
        <p><strong>Email:</strong> ${tenantInfo.tenantPersonalInfo.email}</p>
        <p><strong>Phone Number:</strong> ${tenantInfo.tenantPersonalInfo.phoneNo}</p>
        <p><strong>Property Name:</strong> ${tenantInfo.tenantResidency.propertyName}</p>
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
    console.log("Tenant addition emails sent:", emailResults);
  } catch (error) {
    console.log("Error sending tenant addition emails:", error);
  }
};

const sendTenantAddInfoToLandlord = async (tenantInfo, propertyInfo) => {
  const subject = "New Tenant Added";
  const text = "A new tenant has been added to your property";
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
        <h1 class="title">New Tenant Added</h1>
        <p class="description">A new tenant has been added to your ${propertyInfo.propertyAddress.propertyName} property:</p>
      </div>
      <div class="content">
        <p><strong>Tenant Name:</strong> ${tenantInfo.tenantPersonalInfo.fullName}</p>
        <p><strong>Email:</strong> ${tenantInfo.tenantPersonalInfo.email}</p>
        <p><strong>Phone Number:</strong> ${tenantInfo.tenantPersonalInfo.phoneNo}</p>
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
    console.log("Tenant addition email sent:", info);
  } catch (error) {
    console.log("Error sending tenant addition email:", error);
  }
};

module.exports = {
  sendTenantAddInfoToPropertyManager,
  sendTenantAddInfoToLandlord,
};
