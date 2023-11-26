import React from "react";
import styles from "./Card.module.css";

function Card({ name, status }) {
  return (
    <div className={styles.usercard}>
      <h3>{name}</h3>
      <p>{status ? "Booked" : "Not Booked"}</p>
    </div>
  );
}

export default Card;
