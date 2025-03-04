const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://sravaniyamalapallidev:scVIGGg2eqjhLydH@namstedev.0s1h7.mongodb.net/devTinder");
};

module.exports = connectDB;
