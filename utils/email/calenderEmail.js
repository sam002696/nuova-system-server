const { sendMail } = require("../sendEmail");

const sendCalendarEmail = async (eventInfo) => {
  const subject = "Calendar Invitation";
  const { eventName, eventDetails, eventDate, eventTime } = eventInfo;
  const text = `Calender Event`;
  const logoUrl = "https://i.ibb.co/vY3j7Wg/Nuova-Logo.png";
  // Custom HTML template
  const html = `
  <html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #f8f1e9;
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
    .event-details {
      font-size: 16px;
      color: #333333;
      margin-bottom: 20px;
      background-color: #ffffff;
      border-radius: 5px;
      padding: 20px;
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
    <div class="header">
      <div class="logo-container">
        <img class="logo-image" src=${logoUrl} alt="Logo">
      </div>
      <h1 class="title">Calendar Event</h1>
      <p class="description">Event Details:</p>
    </div>
    <div class="event-details">
      <p><strong>Event:</strong> ${eventName}</p>
      <p><strong>Date:</strong> ${eventDate}</p>
      <p><strong>Time:</strong> ${eventTime}</p>
      <p><strong>Details:</strong> ${eventDetails}</p>
    </div>
    <div class="footer">
      <p>This email was sent by the Calendar Invitation System.</p>
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
    console.log("Calendar invitation emails sent:", emailResults);
  } catch (error) {
    console.log("Error sending calendar invitation emails:", error);
  }
};

module.exports = { sendCalendarEmail };
