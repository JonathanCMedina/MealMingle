import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsList from "./EventsList";
import EventForm from "./EventForm.js";
import LoginPage from "./LoginPage.jsx";
import "./App.css";
import LandingPage from "./LandingPage.js";
import SignupForm from "./SignupForm.js";
import EditEventPage from "./EditEvent.js";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";



function App() {
  return (
    <div>
      <AuthProvider baseUrl={process.env.REACT_APP_API_HOST}>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/event" element={<EventForm />} />
            <Route path="/events/:event_id/edit" element={<EditEventPage/>} />
            {/* <Route path="/main" element={<MainApp />} /> This path currently has no js file linked */}
            <Route path="/events" element={<EventsList />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
