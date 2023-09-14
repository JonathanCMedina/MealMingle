import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function EventsList(props) {
  const [eventsList, setEventsList] = useState([]);
  const { token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;
    async function fetchEvents() {
      let url = `${process.env.REACT_APP_API_HOST}/events`;
      const fetchConfig = {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
          Content: "application/json",
        },
      };
      console.log("fastapi url: ", url);
      const response = await fetch(url, fetchConfig);
      console.log("Successfully fetched the URL!");

      if (response.ok) {
        let data = await response.json();
        setEventsList(data);
      } else {
        console.error("An error has occurred fetching the URL");
      }
    }
    fetchEvents();
  }, [token]);

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className=" min-h-screen bg-gradient-to-b from-black to-green-800 dark:bg-gray-900">
      <main>
        <h1 className="text-3xl pt-6 text-gray-300 font-bold text-center">
          {" "}
          Welcome to all events{" "}
        </h1>
        <div className="grid gap-10 lg:grid-cols-3 px-10">
          {eventsList?.map((prop) => {
            console.log("prop: ", prop);
            console.log("eventsList: ", eventsList);
            return (
              <div key={prop.event_id}>
                <div className="bg-black-500 gap-10 text-center text-white shadow-lg hover:shadow-green-500 shadow-yellow-500 p-6 rounded-xl my-10  dark:shadow-pink-700">
                  <h3 className="text-xl pt-2 pb-2 dark:text-gray-300">
                    {prop.event_name}
                  </h3>
                  <p className="text-lg pt-1 pb-1 dark:text-gray-300">
                    Hosted by {prop.user_id}
                  </p>
                  <p className="py-2">
                    Located in {prop.address}, {prop.zipcode} on{" "}
                    {prop.event_date}
                  </p>
                  <div className="pb-1 dark:text-gray-300">
                    <p className="pb-1"> {prop.description} </p>
                    <p>The featured cuisine is {prop.food_types}</p>
                  </div>
                  <button
                    onClick={() => handleEventClick(prop.event_id)}
                    className="bg-yellow-500 hover:bg-green-500 text-black rounded-full px-3 py-1 text-md"
                  >
                    {" "}
                    View Event Details{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
export default EventsList;
