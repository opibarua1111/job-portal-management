const Apply = require("../models/Apply");
const Job = require("../models/Job");
const User = require("../models/User");

exports.createJobServices = async (data) => {
  const job = await Job.create(data);
  return job;
};
exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};
exports.getManagerJobServices = async (id) => {
  return await Job.find({ creator: id });
};
exports.getManagerJobDetailsServices = async (id) => {
  return await Job.find({ _id: id });
};
exports.getManagerJobApplyServices = async (id) => {
  return await Apply.find({ jobId: id });
};

exports.updateJobServicesById = async (JobId, data) => {
  const result = await Job.updateOne(
    { _id: JobId },
    { $inc: data },
    { runValidators: true }
  );
  return result;
};
