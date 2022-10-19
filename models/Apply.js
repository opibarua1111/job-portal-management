const { mongoose } = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

//schema design
const jobSchema = mongoose.Schema(
  {
    creator: {
      type: ObjectId,
      ref: "hiring-manager",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please provide a job title."],
      trim: true,
      lowercase: true,
      minLength: [10, "title must be at least 10 characters."],
      maxLength: [150, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "inactive",
      enum: ["active", "inactive", "blocked"],
    },
    deadline: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
