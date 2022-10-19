const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const hiringManagerRoute = require("./routes/v1/hiring-manager.route");
const candidateRoute = require("./routes/v1/candidate.route");
const userRoute = require("./routes/v1/user.route");

app.get("/", (req, res) => {
  res.send("Route is working!");
});

app.use("/api/v1", hiringManagerRoute);
app.use("/api/v1", candidateRoute);
app.use("/api/v1/user", userRoute);

module.exports = app;
