const express = require("express");
const router = express.Router();
const jobController = require("../../controllers/job.controller");

router.route("/jobs").post(jobController.createJob);

module.exports = router;
