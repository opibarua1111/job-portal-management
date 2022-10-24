const {
  createJobServices,
  getManagerJobServices,
  findUserByEmail,
  updateJobServicesById,
  getManagerJobApplyServices,
  getManagerJobDetailsServices,
} = require("../services/hiring-manager.services");

exports.createJob = async (req, res, next) => {
  try {
    const result = await createJobServices(req.body);

    res.status(200).json({
      status: "success",
      message: "Job inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.getManagerJobs = async (req, res, next) => {
  try {
    const user = await findUserByEmail(req.user?.email);
    if (user.role !== "hiring-manager") {
      return res.status(400).json({
        status: "fail",
        message: "you are not permited",
      });
    }
    const result = await getManagerJobServices(user._id);

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "couldn't find jobs",
      error: error.message,
    });
  }
};
exports.getManagerJobAppliedInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await findUserByEmail(req.user?.email);
    if (user.role !== "hiring-manager") {
      return res.status(400).json({
        status: "fail",
        message: "you are not permited",
      });
    }
    const jobDetails = await getManagerJobDetailsServices(id);
    const jobApplyCandidates = await getManagerJobApplyServices(id);

    res.status(200).json({
      status: "success",
      jobDetails: jobDetails,
      appliedCandidates: jobApplyCandidates,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "couldn't find jobs",
      error: error.message,
    });
  }
};

exports.updateJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateJobServicesById(id, req.body);

    res.status(200).json({
      status: "success",
      message: "Updated the job successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Could't update the job",
      error: error.message,
    });
  }
};
