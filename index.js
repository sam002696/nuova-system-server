const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 5500;
//require routes

const authRoute = require("./routes/Authentication/auth");
const userRoute = require("./routes/adminPortal/users/users");
const propertyRoute = require("./routes/propertyManagementPortal/addProperty/properties");
const tenantUploadRoute = require("./routes/propertyManagementPortal/propertyReview/tenantUpload/tenantUpload");
const reportRoute = require("./routes/tenantPortal/maintenanceReport/reportModel");
const contractorJobRoute = require("./routes/contractorPortal/contractorJob/contractorJob");
const biddingRoute = require("./routes/contractorPortal/contractorBidding/bidding");
const taskRoute = require("./routes/propertyManagementPortal/tasks/task");
const taskDocumentsRoute = require("./routes/propertyManagementPortal/tasks/taskDocuments");
const certficatesAndDocumentsRoute = require("./routes/propertyManagementPortal/propertyReview/certificates&Documets/certificateUpload");
const calenderEventsRoute = require("./routes/propertyManagementPortal/calender/addEvents");
const prospectsRoute = require("./routes/propertyManagementPortal/prospect/prospect");

// express app initialization
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const uri = process.env.MONGOURI;

const connect = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};
mongoose.set("strictQuery", false);

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/tasks", taskRoute);
app.use("/api/properties", propertyRoute);
app.use("/api/uploadTenants", tenantUploadRoute);
app.use("/api/certificatesDocuments", certficatesAndDocumentsRoute);
app.use("/api/reports", reportRoute);
app.use("/api/prospects", prospectsRoute);
app.use("/api/calenderEvents", calenderEventsRoute);
app.use("/api/contractorJobs", contractorJobRoute);
app.use("/api/biddings", biddingRoute);
app.use("/api/taskDocuments", taskDocumentsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.use("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  connect();
  console.log("Connected to Server");
});
