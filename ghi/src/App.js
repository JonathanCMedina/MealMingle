import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EventsList from "./EventsList";
import EventForm from "./EventForm.js";
import LoginForm from "./LoginForm.jsx";
import "./App.css";
import LandingPage from "./LandingPage.js";
import SignupForm from "./SignupForm.js";
import EditEventPage from "./EditEvent.js";
import InviteForm from "./InviteForm";
import EventDetails from "./EventDetail";
import UserEventsList from "./UserEventList";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import MainPage from "./MainPage";
import Nav from "./Nav";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
  return (
    <div className="object-cover w-full h-full p-0 m-0">
      <AuthProvider baseUrl={process.env.REACT_APP_API_HOST}>
        <BrowserRouter basename={basename}>
          <Nav />
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/event" element={<EventForm />} />
            <Route path="/invite" element={<InviteForm />} />
            <Route path="/events/:event_id/edit" element={<EditEventPage />} />
            <Route path="/events" element={<EventsList />} />
            <Route path="/events/:event_id" element={<EventDetails />} />
            <Route path="/users/events" element={<UserEventsList />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
