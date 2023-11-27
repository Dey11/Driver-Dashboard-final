import React from "react";
import styles from "./Card.module.css";
import axios from "axios";

function Card({ name, status, pickup, destination, num, autono }) {
  const handleFinishRide = async () => {
    await axios
      .post("http://localhost:5000/api/finishRide", {
        autono,
        num,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.usercard}>
      <h3>{status ? name : "Unavailable"}</h3>
      <p>Status: {status ? "Booked" : "Not Booked"}</p>
      <p> Pickup: {pickup}</p>
      <p> Destination: {destination}</p>
      {status ? <button onClick={handleFinishRide}>Finish Ride</button> : <></>}
    </div>
  );
}

export default Card;
