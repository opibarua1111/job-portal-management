const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const jobRoute = require("./routes/v1/job.route");
const userRoute = require("./routes/v1/user.route");

app.get("/", (req, res) => {
  res.send("Route is working!");
});

app.use("/api/v1", jobRoute);
app.use("/api/v1/user", userRoute);

module.exports = app;
