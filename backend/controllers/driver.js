const DriverSchema = require("../models/driverModel");

exports.signUp = async (req, res) => {
  const { name, email, password, autono, uid } = req.body;
  //   console.log(req.body);
  const newDriver = DriverSchema({
    name,
    email,
    password,
    autono,
  });
  //   console.log(newDriver);

  try {
    await newDriver.save();
    res.status(200).json({ message: "Driver has been signed up." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error! Driver has not been signed up." });
  }
};

exports.getDriverInfo = async (req, res) => {
  try {
    const { email } = req.params;
    const driver = await DriverSchema.findOne({ email });
    // console.log(driver);
    res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
};
