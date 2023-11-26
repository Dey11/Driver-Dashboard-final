const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    driveruid: {
      type: String,
      required: true,
    },
    autono: {
      type: String,
      required: true,
      trim: true,
    },
    passengerOneName: {
      type: String,
      trim: true,
      default: "Pass1",
    },
    passengerOneIsBooked: {
      type: Boolean,
      required: true,
      default: false,
    },
    passengerTwoName: {
      type: String,
      trim: true,
      default: "Pass2",
    },
    passengerTwoIsBooked: {
      type: Boolean,
      required: true,
      default: false,
    },
    passengerThreeName: {
      type: String,
      trim: true,
      default: "Pass3",
    },
    passengerThreeIsBooked: {
      type: Boolean,
      required: true,
      default: false,
    },
    passengerFourName: {
      type: String,
      trim: true,
      default: "Pass4",
    },
    passengerFourIsBooked: {
      type: Boolean,
      required: true,
      default: false,
    },
    driverIsBooked: {
      type: String,
      default: "null", // Options: Null, Full, Filling
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Driver", DriverSchema);
