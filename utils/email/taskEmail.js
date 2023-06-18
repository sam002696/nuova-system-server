const User = require("../../models/AdminPortal/CreateUser/User");
const { sendMail } = require("../sendEmail");

const sendTaskToEveryTenantEmail = async (taskInfo) => {
  const subject = "Task Information";
  const text = `You have been assigned a new task`;
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
        .task-details {
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
          <p class="description">Task Details:</p>
        </div>
        <div class="task-details">
          <p><strong>Task:</strong> ${taskInfo.taskTitle}</p>
          <p><strong>Description:</strong> ${taskInfo.taskDesc}</p>
        </div>
        <div class="footer">
          <p>This email was sent by the Task Management System.</p>
        </div>
      </div>
    </body>
  </html>
`;

  try {
    const recipients = await User.find({ role: "Tenant" }).distinct("email");
    const emailPromises = recipients.map((recipient) =>
      sendMail(recipient, subject, text, html)
    );

    const emailResults = await Promise.all(emailPromises);
    console.log("Task notification emails sent:", emailResults);
  } catch (error) {
    console.log("Error sending task notification emails:", error);
  }
};

const sendTaskToEveryLandlordEmail = async (taskInfo) => {
  const subject = "Task Information";
  const text = `You have been assigned a new task`;
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
          .task-details {
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
            <p class="description">Task Details:</p>
          </div>
          <div class="task-details">
            <p><strong>Task:</strong> ${taskInfo.taskTitle}</p>
            <p><strong>Description:</strong> ${taskInfo.taskDesc}</p>
          </div>
          <div class="footer">
            <p>This email was sent by the Task Management System.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const recipients = await User.find({ role: "Landlord" }).distinct("email");
    const emailPromises = recipients.map((recipient) =>
      sendMail(recipient, subject, text, html)
    );

    const emailResults = await Promise.all(emailPromises);
    console.log("Task notification emails sent:", emailResults);
  } catch (error) {
    console.log("Error sending task notification emails:", error);
  }
};

const sendTaskToSingleTenantEmail = async (taskInfo) => {
  const subject = "Task Information";
  const text = `You have been assigned a new task`;

  // Custom HTML template
  const html = `
      <html>
        <head>
          <!-- Styles and formatting here -->
        </head>
        <body>
          <div class="container">
            <div class="header">
              <p class="description">Task Details:</p>
            </div>
            <div class="task-details">
              <p><strong>Task:</strong> ${taskInfo.taskTitle}</p>
              <p><strong>Description:</strong> ${taskInfo.taskDesc}</p>
            </div>
            <div class="footer">
              <p>This email was sent by the Task Management System.</p>
            </div>
          </div>
        </body>
      </html>
    `;

  try {
    const recipient = taskInfo.assignedUseremail;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Task notification email sent:", info);
  } catch (error) {
    console.log("Error sending task notification email:", error);
  }
};

const sendTaskToSingleLandlordEmail = async (taskInfo) => {
  const subject = "Task Information";
  const text = `You have been assigned a new task`;

  // Custom HTML template
  const html = `
        <html>
          <head>
            <!-- Styles and formatting here -->
          </head>
          <body>
            <div class="container">
              <div class="header">
                <p class="description">Task Details:</p>
              </div>
              <div class="task-details">
                <p><strong>Task:</strong> ${taskInfo.taskTitle}</p>
                <p><strong>Description:</strong> ${taskInfo.taskDesc}</p>
              </div>
              <div class="footer">
                <p>This email was sent by the Task Management System.</p>
              </div>
            </div>
          </body>
        </html>
      `;

  try {
    const recipient = taskInfo.assignedUseremail;
    const info = await sendMail(recipient, subject, text, html);
    console.log("Task notification email sent:", info);
  } catch (error) {
    console.log("Error sending task notification email:", error);
  }
};

const sendTaskToPropertyManagerEmail = async (personInfo, taskInfo) => {
  const subject = "Task Information";
  const text = `A new task has been uploaded`;

  // Custom HTML template
  const html = `
        <html>
          <head>
            <!-- Styles and formatting here -->
          </head>
          <body>
            <div class="container">
              <div class="header">
                <p class="description">Task Uploader Details:</p>
              </div>
              <div class="task-details">
                <p><strong>Uploader Name:</strong> ${personInfo.username}</p>
                <p><strong>Uploader Email:</strong> ${personInfo.useremail}</p>
                <p><strong>Uploader Email:</strong> ${personInfo.useremail}</p>
                <p><strong>Task Description:</strong> ${taskInfo.taskDesc}</p>
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
    console.log("Task notification email sent:", emailResults);
  } catch (error) {
    console.log("Error sending Task notification emails:", error);
  }
};

module.exports = {
  sendTaskToEveryTenantEmail,
  sendTaskToEveryLandlordEmail,
  sendTaskToSingleTenantEmail,
  sendTaskToSingleLandlordEmail,
  sendTaskToPropertyManagerEmail,
};
