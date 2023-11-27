const router = require("express").Router();
const {
  signUp,
  getDriverInfo,
  finishRide,
  finishAllRides,
} = require("../controllers/driver");
const { bookUser } = require("../controllers/user");

router
  .post("/sign-up", signUp)
  .post("/finishRide", finishRide)
  .get("/get-driver-info/:email", getDriverInfo)
  .post("/reserve-ride", bookUser)
  .post("/finishAllRides", finishAllRides);
// .get("/get-passenger-status", getPassengerStatus);

module.exports = router;
