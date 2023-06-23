const { sendMail } = require("../sendEmail");

const sendPropertyAddToEveryPropertyManagerEmail = async (propertyAddInfo) => {
  const subject = "New Property Added";
  const text = "A new property has been added.";

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
            .description {
              font-size: 16px;
              color: #666666;
              margin-bottom: 20px;
            }
            .property-details {
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
              <p class="title">New Property Added</p>
              <p class="description">A new property has been added:</p>
            </div>
            <div class="property-details">
              <p><strong>Property Name:</strong> ${propertyAddInfo.propertyAddress.propertyName}</p>
              <p><strong>Address:</strong> ${propertyAddInfo.propertyAddress.addressline1}</p>
              <p><strong>Description:</strong> ${propertyAddInfo.briefDesc.comment}</p>
            </div>
            <div class="footer">
              <p>This email was sent by the Task Management System.</p>
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
    console.log("Property add info emails sent:", emailResults);
  } catch (error) {
    console.log("Error sending property add info emails:", error);
  }
};

const sendPropertyAddToSingleLandlordEmail = async (propertyAddInfo) => {
  const subject = "New Property Added";
  const text = "A new property has been added.";

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
              .description {
                font-size: 16px;
                color: #666666;
                margin-bottom: 20px;
              }
              .property-details {
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
                <p class="title">New Property Added</p>
                <p class="description">A new property has been added:</p>
              </div>
              <div class="property-details">
                <p><strong>Property Name:</strong> ${propertyAddInfo.propertyAddress.propertyName}</p>
                <p><strong>Address:</strong> ${propertyAddInfo.propertyAddress.addressline1}</p>
                <p><strong>Description:</strong> ${propertyAddInfo.briefDesc.comment}</p>
              </div>
              <div class="footer">
                <p>This email was sent by the Task Management System.</p>
              </div>
            </div>
          </body>
        </html>
      `;

  try {
    const recipient = propertyAddInfo.landlordInfo.landlordEmail;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Property add notification email sent:", info);
  } catch (error) {
    console.log("Error sending Property add notification email:", error);
  }
};
module.exports = {
  sendPropertyAddToEveryPropertyManagerEmail,
  sendPropertyAddToSingleLandlordEmail,
};
