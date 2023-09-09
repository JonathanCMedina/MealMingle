import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EventsList from "./EventsList";
import EventForm from "./EventForm.js";
import LoginForm from "./LoginForm.jsx";
import "./App.css";
import LandingPage from "./LandingPage.js";
import SignupForm from "./SignupForm.js";
import EditEventPage from "./EditEvent.js";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";

function GetToken() {
  useToken();
  return null;
}

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
  return (
    <div>
      {/* <AuthProvider baseUrl={process.env.REACT_APP_API_HOST}> */}
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <GetToken />
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/event" element={<EventForm />} />
            <Route path="/events/:event_id/edit" element={<EditEventPage />} />
            {/* <Route path="/main" element={<MainApp />} /> This path currently has no js file linked */}
            <Route path="/events" element={<EventsList />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
