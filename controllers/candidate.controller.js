const {
  getAllJobServices,
  getJobServiceById,
  createJobService,
} = require("../services/candidate.services");

exports.getAllJobs = async (req, res, next) => {
  try {
    const result = await getAllJobServices();

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Coul'd not find data",
      error: error.message,
    });
  }
};
exports.getJobDetailsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getJobServiceById(id);

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Coul'd not find data",
      error: error.message,
    });
  }
};
exports.createJobApply = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await createJobService(id, data);
    console.log(result);
    res.status(200).json({
      status: "success",
      message: "applyed successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Coul'd not find data",
      error: error.message,
    });
  }
};
