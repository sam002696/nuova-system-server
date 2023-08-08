const { sendMail } = require("../sendEmail");

const sendTenantFactFindEmail = async (factFindInfo) => {
  const subject = "Tenant Fact Find";
  const text = "New Tenant Fact Find Enquiry";
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
  // Custom HTML template
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
      .message {
        font-size: 16px;
        color: #666666;
        margin-bottom: 20px;
      }
      .details {
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
        <h1 class="title">Tenant Fact Find</h1>
      </div>
      <div class="message">
        <p>Hello,</p>
        <p>You have received a new tenant fact find. Here are the details:</p>
      </div>
      <div class="details">
        <p><strong>Name:</strong> ${factFindInfo.tenantInfo.fullName}</p>
        <p><strong>Email:</strong> ${factFindInfo.tenantInfo.email}</p>
        <p><strong>Phone Number:</strong> ${factFindInfo.tenantInfo.telephoneNo}</p>
        <p><strong>Address:</strong> ${factFindInfo.tenantInfo.currentAddress}</p>
      </div>
      <div class="footer">
        <p>This email was sent by the Tenant Fact Find System.</p>
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
    console.log("Tenant Fact Find emails sent:", emailResults);
  } catch (error) {
    console.log("Error sending Tenant Fact Find emails:", error);
  }
};

module.exports = { sendTenantFactFindEmail };
