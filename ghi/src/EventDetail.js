import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function EventDetails() {
  const [eventDetails, setEventDetails] = useState([]);
  const { token } = useAuthContext();
  const { event_id } = useParams();

  useEffect(() => {
    if (!token) return;
    async function fetchEventDetails() {
      try {
        const url = `${process.env.REACT_APP_API_HOST}/events/${event_id}`;
        const fetchConfig = {
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content": "application/json",
          },
        };

        const response = await fetch(url, fetchConfig);

        if (response.ok) {
          const data = await response.json();
          setEventDetails(data);
        } else {
          console.error("An error has occurred fetching the event details.");
        }
      } catch (error) {
        console.error("An error occurred while fetching event details:", error);
      }
    }
    fetchEventDetails();
  }, [token, event_id]);

  return (
    <div>
      <h1>{eventDetails.event_name}</h1>
      <p>Hosted by {eventDetails.user_id}</p>
      <p>Located in {eventDetails.address}, {eventDetails.zipcode} on {eventDetails.event_date}</p>
      <p>{eventDetails.description}</p>
      <p>The featured cuisine is {eventDetails.food_types}</p>
    </div>
  );
}

export default EventDetails;
