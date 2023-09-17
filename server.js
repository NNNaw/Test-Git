const express = require("express");
const app = express();
const port = 9999;

var bodyParser = require("body-parser");
var cors = require("cors");
app.use(express.static(__dirname + "/_public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "false");

  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  // res.setHeader("Content-Type", "application/json;charset=utf-8"); // Opening this comment will cause problems
  next();
});

const accountRoute = require("./_routes/account.route");
const accountTypeRoute = require("./_routes/accountType.route");
const topicRoute = require("./_routes/topic.route");
const studentRoute = require("./_routes/students.route");

const adminRoute = require("./_routes/admin.route");

app.use("/accounts", accountRoute);
app.use("/accountTypes", accountTypeRoute);
app.use("/topic", topicRoute);
app.use("/student", studentRoute);
app.use("/admin", adminRoute);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

app.get("/test", (req, res) => {
  res.send("Hello123");
});
