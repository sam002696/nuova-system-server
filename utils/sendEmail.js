const nodemailer = require("nodemailer");

const sendMail = async (recipient, subject, text, html) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "brainsam056@gmail.com",
      pass: "qbdbpkrhfdegbxfo",
    },
  });

  let info = await transporter.sendMail({
    from: "brainsam056@gmail.com",
    to: recipient,
    subject: subject,
    text: text,
    html: html,
  });

  console.log("Message sent: %s", info.messageId);
  return info;
};

module.exports = { sendMail };
