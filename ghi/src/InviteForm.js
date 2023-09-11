import React, { useState, useEffect } from "react";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function InviteForm() {
  const [event, setEvent] = useState("");
  const [events, setEvents] = useState([]);
  const [guests, setGuests] = useState([]);
  const { token } = useAuthContext();
  const [guest, setGuest] = useState("");

  useEffect(() => {
    if (!token) return;
    async function fetchEventListData() {
      const url = `${process.env.REACT_APP_API_HOST}/events`;
      const fetchConfig = {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, fetchConfig);
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    }
    fetchEventListData();
  }, [token]);

  useEffect(() => {
    if (!token) return;
    async function fetchUserData() {
      const url = `${process.env.REACT_APP_API_HOST}/users`;
      const fetchConfig = {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, fetchConfig);
      if (response.ok) {
        const data = await response.json();
        setGuests(data);
      }
    }
    fetchUserData();
  }, [token]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      guest: guest ? parseInt(guest) : null,
      event: event ? parseInt(event) : null,
    };

    const url = `${process.env.REACT_APP_API_HOST}/invite`;

    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, fetchConfig);
    console.log(await response.json());

    if (response.ok) {
      setGuests([]);
      setEvents([]);
    } else {
      console.log(response);
    }
  }

  const handleGuestChange = (e) => {
    setGuest(e.target.value);
  };

  const handleEventChange = (e) => {
    setEvent(e.target.value);
  };

  return (
    <form id="invite-form">
      <div className="px-10 py-10 grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-3">
          <label
            htmlFor="email"
            className="grid mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <select
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 grid w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleGuestChange}
          >
            <option value={guest}>Email</option>
            {guests.map((email) => {
              return (
                <option key={email.user_id} value={email.user_id}>
                  {email.email}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-start-2 col-span-3">
          <label
            htmlFor="events"
            className="grid mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Event
          </label>
          <select
            name="events"
            id="events"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 grid w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleEventChange}
          >
            <option value={event}>Event</option>
            {events.map((events) => {
              return (
                <option key={events.event_id} value={events.event_id}>
                  {events.event_name}
                </option>
              );
            })}
          </select>
        </div>
        <button
          onClick={handleSubmit}
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Invite
        </button>
      </div>
    </form>
  );
}

export default InviteForm;
