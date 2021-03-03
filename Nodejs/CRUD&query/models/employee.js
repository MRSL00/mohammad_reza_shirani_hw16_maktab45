const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  ntnumber: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  manger: {
    type: Boolean,
    default: false,
  },

  dob: {
    type: Date,
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
