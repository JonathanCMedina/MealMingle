import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function UserEventsList() {
  const [userEvents, setUserEvents] = useState([]);
  const { token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    async function fetchUserEvents() {
  try {
    const url = `${process.env.REACT_APP_API_HOST}/events`;
    const fetchConfig = {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      const data = await response.json();
      console.log("Received data from API:", data);
      setUserEvents(data || []);
    } else {
      console.error("An error has occurred fetching user events.");
    }
  } catch (error) {
    console.error("An error occurred while fetching user events:", error);
  }
}

    fetchUserEvents();
  }, [token]);

  const handleEditEvent = (eventId) => {
    navigate(`/events/${eventId}/edit`);
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const url = `${process.env.REACT_APP_API_HOST}/events/${eventId}`;
      const fetchConfig = {
        method: "DELETE",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, fetchConfig);

      if (response.ok) {
        setUserEvents((prevEvents) => prevEvents.filter((event) => event.event_id !== eventId));
      } else {
        console.error("An error has occurred while deleting the event.");
      }
    } catch (error) {
      console.error("An error occurred while deleting the event:", error);
    }
  };

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  console.log("userEvents:", userEvents);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">My Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userEvents.map((event) => (
          <div
            className="bg-white p-4 shadow-md rounded-md"
            key={event.event_id}
          >
            <h3
              onClick={() => handleEventClick(event.event_id)}
              className="cursor-pointer text-lg font-semibold mb-2"
            >
              {event.event_name}
            </h3>
            <p>Date: {event.event_date}</p>
            <p>Hosted by {event.user_id}</p>
            {/* Add other event details  */}
            <div className="mt-4 flex space-x-2">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-full text-sm flex items-center justify-center"
                onClick={() => handleEditEvent(event.event_id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full text-sm flex items-center justify-center"
                onClick={() => handleDeleteEvent(event.event_id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserEventsList;
