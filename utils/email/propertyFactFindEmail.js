const { sendMail } = require("../sendEmail");

const sendPropertyFactFindEmail = async (factFindInfo) => {
  const subject = "New Property Fact Find";
  const text = "New Property Fact Find Enquiry";
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
        <h1 class="title">Property Fact Find Enquiry</h1>
      </div>
      <div class="message">
        <p>Hello,</p>
        <p>You have received a new property fact find. Here are the details:</p>
      </div>
      <div class="details">
        <p><strong>First Name:</strong> ${factFindInfo.ownershipDetails.firstName}</p>
        <p><strong>Sur Name:</strong> ${factFindInfo.ownershipDetails.surname}</p>
        <p><strong>Property Address:</strong> ${factFindInfo.property.propertyAddress}</p>
        <p><strong>Move-in Date:</strong> ${factFindInfo.moveInDate}</p>
      </div>
      <div class="footer">
        <p>This email was sent by the Property Fact Find Enquiry System.</p>
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
    console.log("Property Fact Find emails sent:", emailResults);
  } catch (error) {
    console.log("Error sending Property Fact Find emails:", error);
  }
};

module.exports = { sendPropertyFactFindEmail };
