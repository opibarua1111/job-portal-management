const express = require("express");
const router = express.Router();
const candidateController = require("../../controllers/candidate.controller");

router.route("/jobs").get(candidateController.getAllJobs);
router.route("/jobs/:id").get(candidateController.getJobDetailsById);
router.route("/jobs/:id/apply").post(candidateController.createJobApply);

module.exports = router;
