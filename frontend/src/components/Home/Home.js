import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import Card from "../Card/Card";

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

  const [list, setList] = useState([]);
  const [autono, setAutono] = useState("");

  useEffect(() => {
    const fetchData = () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // const name = user.displayName;
          const email = user.email;

          axios
            .get(`http://localhost:5000/api/get-driver-info/${email}`)
            .then((res) => {
              setList([
                {
                  id: crypto.randomUUID(),
                  name: res.data.passengerOneName,
                  status: res.data.passengerOneIsBooked,
                },
                {
                  id: crypto.randomUUID(),
                  name: res.data.passengerTwoName,
                  status: res.data.passengerTwoIsBooked,
                },
                {
                  id: crypto.randomUUID(),
                  name: res.data.passengerThreeName,
                  status: res.data.passengerThreeIsBooked,
                },
                {
                  id: crypto.randomUUID(),
                  name: res.data.passengerFourName,
                  status: res.data.passengerFourIsBooked,
                },
              ]);

              setAutono(res.data.autono);
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
    fetchData();
    const intervalId = setInterval(fetchData, 15000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>
        {props.name ? (
          <>
            Welcome - {props.name}
            <br />
            Your Auto No.: {autono}
            <ul>
              {list.map((item) => (
                <li key={item.id}>
                  <Card name={item.name} status={item.status} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          "Login please"
        )}
      </h2>
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
    </div>
  );
};

export default Home;
