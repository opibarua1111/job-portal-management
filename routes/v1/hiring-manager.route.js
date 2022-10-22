const express = require("express");
const router = express.Router();
const hiringManagerController = require("../../controllers/hiring-manager.controller");
const verifyToken = require("../../middleware/verifyToken");

router.route("/jobs").post(verifyToken, hiringManagerController.createJob);
router
  .route("/manager/jobs")
  .get(verifyToken, hiringManagerController.getManagerJobs);
// router
//   .route("/manager/jobs/:id")
//   .get(verifyToken, hiringManagerController.getManagerJobs);
router.route("/jobs/:id").patch(verifyToken, hiringManagerController.updateJob);
module.exports = router;
