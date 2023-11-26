import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

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

  const getDriverInfo = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const name = user.displayName;
        const email = user.email;

        axios
          .get(`http://localhost:5000/api/get-driver-info/${email}`)
          .then((res) => {
            // do something with response
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // User is signed out
        // ...
      }
    });
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const name = user.displayName;
        const email = user.email;

        axios
          .get(`http://localhost:5000/api/get-driver-info/${email}`)
          .then((res) => {
            // do something with response
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

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
