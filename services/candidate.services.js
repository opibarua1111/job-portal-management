const Apply = require("../models/Apply");
const Job = require("../models/Job");

exports.getAllJobServices = async (data) => {
  const jobs = await Job.find({});
  return jobs;
};
exports.getJobServiceById = async (id) => {
  const job = await Job.find({ _id: id });
  return job;
};
exports.createJobService = async (id, data) => {
  data.jobId = id;
  const apply = await Apply.create(data);
  return apply;
};
