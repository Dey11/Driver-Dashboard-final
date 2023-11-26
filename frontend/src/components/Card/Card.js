import React from "react";
import styles from "./Card.module.css";

function Card({ name, status, pickup, destination }) {
  return (
    <div className={styles.usercard}>
      <h3>{status ? name : "Unavailable"}</h3>
      <p>{status ? "Booked" : "Not Booked"}</p>
      <p> Pickup: {pickup}</p>
      <p> Destination: {destination}</p>
    </div>
  );
}

export default Card;
