const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      dbName: "job_management_portal",
    });
    console.log(
      `Database connection is successful ${connect.connection.host}`.rainbow
        .underline.bold
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};
module.exports = connectDB;
