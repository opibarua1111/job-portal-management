const Job = require("../models/Job");

exports.createJobServices = async (data) => {
  const job = await Job.create(data);
  return job;
};
