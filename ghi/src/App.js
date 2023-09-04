import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsList from "./EventsList";
import EventForm from "./EventForm.js";
import LoginPage from "./LoginPage.js";
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
          <Route path="/events" element={<EventsList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
