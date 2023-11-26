const router = require("express").Router();
const { signUp, getDriverInfo } = require("../controllers/driver");
const { getPassengerStatus } = require("../controllers/user");

router.post("/sign-up", signUp).get("/get-driver-info/:email", getDriverInfo);
// .get("/get-passenger-status", getPassengerStatus);

module.exports = router;
