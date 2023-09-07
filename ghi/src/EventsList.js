import { useState, useEffect } from "react";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function EventsList(props) {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      let url = `http://localhost:8000/events`;
      console.log("fastapi url: ", url);
      let response = await fetch(url);
      console.log("Successfully fetched the URL!");

      if (response.ok) {
        let data = await response.json();
        setEventsList(data);
        console.log(eventsList);
      } else {
        console.error("An error has occurred fetching the URL");
      }
    }
    fetchEvents();
  }, []);

  return (
    <div>
      <head>
        <title> MealMingle | All Events </title>
      </head>

      <main className=" bg-gray-200 dark:bg-gray-900">
        <h1 className="text-3xl pt-6 font-bold text-center">
          {" "} All Events {" "}
        </h1>
        <div className="grid gap-10 lg:grid-cols-3 px-10">
          {eventsList?.map((prop) => {
            console.log("prop: ", prop);
            console.log("eventsList: ", eventsList);
            return (
                <div key={prop.event_id}>
                  <div className="gap-10 text-center shadow-md hover:shadow-green-500 shadow-yellow-500 p-6 rounded-xl my-10  dark:shadow-pink-700">
                    <h3 className="text-lg pt-2 pb-2 dark:text-gray-200">
                      {prop.event_name}
                    </h3>
                    <p className="dark:text-gray-300">Hosted by {prop.user_id}</p>
                    <p className="py-2 text-green-800">
                      Located in {prop.address}, {prop.zipcode} on {prop.event_date}
                    </p>
                    <div className="text-gray-800 pb-1 dark:text-gray-300">
                      <p className="pb-1"> {prop.description} </p>
                      <p>The featured cuisine is {prop.food_types}</p>
                    </div>
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
