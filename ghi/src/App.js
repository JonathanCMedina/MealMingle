import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsList from "./EventsList";
import EventForm from "./EventForm.js";
import LoginPage from "./LoginPage.js";
import ErrorNotification from "./ErrorNotification";
import "./App.css";
import LandingPage from "./LandingPage.js";
import SignupForm from "./SignupForm.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/event" element={<EventForm />} />
          {/* <Route path="/main" element={<MainApp />} /> This path currently has no js file linked */}
          <Route path="/events" element={<EventsList />} />
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
