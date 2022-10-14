const { createJobServices } = require("../services/job.services");

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
