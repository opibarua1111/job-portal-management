const { mongoose } = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

//schema design
const applySchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide a last name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    email: {
      type: String,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
      trim: true,
      unique: true,
      required: [true, "Email address is required"],
    },
    jobId: {
      type: ObjectId,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Apply = mongoose.model("Apply", applySchema);

module.exports = Apply;
