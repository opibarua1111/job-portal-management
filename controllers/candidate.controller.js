const {
  getAllJobServices,
  getJobServiceById,
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
    console.log(id);
    // const result = await getJobServiceById(id);

    // res.status(200).json({
    //   status: "success",
    //   data: result,
    // });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Coul'd not find data",
      error: error.message,
    });
  }
};
