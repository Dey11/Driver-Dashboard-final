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
                  num: 1,
                  name: res.data.passengerOneName,
                  status: res.data.passengerOneIsBooked,
                  pickup: res.data.passengerOnePickup,
                  destination: res.data.passengerOneDestination,
                },
                {
                  id: crypto.randomUUID(),
                  num: 2,
                  name: res.data.passengerTwoName,
                  status: res.data.passengerTwoIsBooked,
                  pickup: res.data.passengerTwoPickup,
                  destination: res.data.passengerTwoDestination,
                },
                {
                  id: crypto.randomUUID(),
                  num: 3,
                  name: res.data.passengerThreeName,
                  status: res.data.passengerThreeIsBooked,
                  pickup: res.data.passengerThreePickup,
                  destination: res.data.passengerThreeDestination,
                },
                {
                  id: crypto.randomUUID(),
                  num: 4,
                  name: res.data.passengerFourName,
                  status: res.data.passengerFourIsBooked,
                  pickup: res.data.passengerFourPickup,
                  destination: res.data.passengerFourDestination,
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
                  <Card
                    name={item.name}
                    num={item.num}
                    status={item.status}
                    pickup={item.pickup}
                    destination={item.destination}
                    autono={autono}
                  />
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
      <></>
    </div>
  );
};

export default Home;
