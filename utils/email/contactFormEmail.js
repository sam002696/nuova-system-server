const { sendMail } = require("../sendEmail");

// send contact form email to specific users
const sendTenantContactFormEmail = async (contactFormInfo) => {
  const subject = `New Contact Form Tenant - ${contactFormInfo.subject};`;

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
            <h1 class="title">Contact Us Form For Tenant</h1>
          </div>
          <div class="content">
            <h2 class="info-label">Full Name:</h2>
            <p class="info-value">${contactFormInfo.fullName}</p>
            
            <p class="info-label">Message:</p>
            <p class="info-value">${contactFormInfo.tenantMessage}</p>
            
            <p class="info-label">Email:</p>
            <p class="info-value">${contactFormInfo.tenantEmail}</p>
            
            <p class="info-label">Phone Number:</p>
            <p class="info-value">${contactFormInfo.tenantPhoneNo}</p>
            
          </div>
          <div class="footer">
            <p>This email was sent by the Nuova Property Management Software.</p>
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

module.exports = {
  sendTenantContactFormEmail,
};
