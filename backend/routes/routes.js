const router = require("express").Router();
const { signUp, getDriverInfo } = require("../controllers/driver");
const { getPassengerStatus } = require("../controllers/user");

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/sign-up", signUp);
// .get("/get-passenger-status", getPassengerStatus)
// .get("/get-driver-info", getDriverInfo);

module.exports = router;
