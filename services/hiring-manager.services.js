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
