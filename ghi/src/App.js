import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Construct from "./Construct.js";
import EventForm from "./EventForm.js";
import LoginPage from "./LoginPage.js";
import ErrorNotification from "./ErrorNotification";
import "./App.css";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={ <LoginPage/>} />
          <Route path="/event" element={ <EventForm/>} />
          <Route path="/" element={MainApp} />
        </Routes>
      </Router>
    </div>
  );
}

function MainApp() {
  const [launchInfo, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      let url = `${process.env.REACT_APP_API_HOST}/api/launch-details`;
      console.log("fastapi url: ", url);
      let response = await fetch(url);
      console.log("------- hello? -------");
      let data = await response.json();

      if (response.ok) {
        console.log("got launch data!");
        setLaunchInfo(data.launch_details);
      } else {
        console.log("drat! something happened");
        setError(data.message);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <ErrorNotification error={error} />
    </div>
  );
}

export default App;
