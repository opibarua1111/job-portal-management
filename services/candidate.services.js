const Job = require("../models/Job");

exports.getAllJobServices = async (data) => {
  const jobs = await Job.find({});
  return jobs;
};
exports.getJobServiceById = async (id) => {
  const job = await Job.find({ _id: id });
  return job;
};
