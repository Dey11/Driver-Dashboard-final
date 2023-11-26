import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Home = (props) => {
  const handleSignOut = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Signed out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
      <div>
        {props.name ? (
          <>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            <h1>
              <Link to="/login">Login</Link>
            </h1>
            <h1>
              <Link to="/signup">Signup</Link>
            </h1>
          </>
        )}
      </div>

      <br />
      <br />
    </div>
  );
};

export default Home;
