import React from "react";
import styles from "./Card.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Card({ name, status, pickup, destination, num, autono }) {
  const [flag, setFlag] = useState(false);
  const handleFinishRide = async () => {
    setFlag(true);
    await axios
      .post("https://test1-mk8a.onrender.com/api/finishRide", {
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

  useEffect(() => {
    setFlag(false);
  }, []);

  return (
    <div className={styles.usercard}>
      <h3>{status ? name : "Unavailable"}</h3>
      <p>Status: {status ? "Booked" : "Not Booked"}</p>
      <p> Pickup: {pickup}</p>
      <p> Destination: {destination}</p>
      {status ? <button onClick={handleFinishRide}>Finish Ride</button> : <></>}
      {status && flag ? "Finishing the ride..." : ""}
    </div>
  );
}

export default Card;
