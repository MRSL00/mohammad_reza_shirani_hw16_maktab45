const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  rgtnumber: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  state: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  phonenum: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Company", CompanySchema);
