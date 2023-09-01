import { useState, useEffect } from "react";

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
    <>
      <h2> All Events </h2>
      <table class="table-auto">
        <thead>
          <tr>
            <th> Host </th>
            <th> Event Name </th>
            <th> Address </th>
            <th> Zipcode </th>
            <th> Description </th>
            <th> Event Date </th>
            <th> Food Cuisines </th>
          </tr>
        </thead>
        <tbody>
          {eventsList?.map((prop) => {
            console.log("prop: ", prop);
            console.log("eventsList: ", eventsList);
            return (
              <tr key={prop.event_id}>
                <td> {prop.user_id} </td>
                <td> {prop.event_name} </td>
                <td> {prop.address} </td>
                <td> {prop.zipcode} </td>
                <td> {prop.description} </td>
                <td> {prop.event_date} </td>
                <td> {prop.food_types} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default EventsList;
