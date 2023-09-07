import React, { useState, useEffect } from "react";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";



function EventForm() {
  const [foodTypes, setFoodTypes] = useState([]);
  const {token} = useAuthContext();
  const [formData, setFormData] = useState({
    user_id: "",
    event_name: "",
    address: "",
    zipcode: 0,
    description: "",
    event_date: "",
    private_event: false,
    food_types: "",
    alcohol_free: false,
    vegan: false,
    gluten_free: false,
    pescatarian: false,
    vegetarian: false,
    omnivore: false,
    keto_friendly: false,
    dairy_free: false,
    halal: false,
    kosher: false,
  });




  useEffect(() => {
    if (!token) return ;
    async function fetchFoodTypeData() {
      const url = `http://localhost:8000/foods`;
      const fetchConfig = {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
      }
        const response = await fetch(url, fetchConfig);
          if (response.ok) {
            const data = await response.json();
            let dataOfFood = data;
            setFoodTypes(dataOfFood);
        }
    } fetchFoodTypeData();
  }, [token]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = `http://localhost:8000/event`;

    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    };

    const response = await fetch(url, fetchConfig);
    console.log(await response.json());

    if (response.ok) {
      setFormData({
        user_id: "",
        event_name: "",
        address: "",
        zipcode: "",
        description: "",
        event_date: "",
        private_event: "",
        food_types: "",
        alcohol_free: "",
        vegan: "",
        gluten_free: "",
        pescatarian: "",
        vegetarian: "",
        omnivore: "",
        keto_friendly: "",
        dairy_free: "",
        halal: "",
        kosher: "",
      });
    }
  };
  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
      ...formData,
      [inputName]: value,
    });
  };



  return (
    <form id="create-event-form">
      <div className="px-10 py-10 grid grid-cols-6 gap-4">

        <div className="col-start-2 col-span-3">

        <div className="col-start-2 col-span-3">
        <label htmlFor="user_id" className="grid mb-2 text-sm font-medium text-gray-900 dark:text-white">User ID</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"/>
            </svg>
          </div>
          <input onChange={handleFormChange} type="text" name="user_id" id="user_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 grid w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Id" required/>
        </div>
        </div>

          <label htmlFor="event_name" className="grid mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4"/>
                </svg>
              </div>
              <input onChange={handleFormChange} type="text" name="event_name" id="event_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 grid w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Event Name" required />
            </div>
        </div>

        <div className="col-start-2 col-span-3">
          <label htmlFor="address" className="grid mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"/>
              </svg>
            </div>
            <input onChange={handleFormChange} type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 grid w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required/>
          </div>
        </div>

        <div className="col-start-2 col-span-3">
        <label htmlFor="zipcode" className="grid mb-2 text-sm font-medium text-gray-900 dark:text-white">Zipcode</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"/>
            </svg>
          </div>
          <input onChange={handleFormChange} type="number" name="zipcode" id="zipcode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 grid w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zipcode" required/>
        </div>
        </div>

        <div className="col-start-2 col-span-3">
        <label htmlFor="description" className="grid mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <div className="relative">
          <textarea onChange={handleFormChange} name="description" id="description" rows="4" className="grid p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Give a brief description about your event" required ></textarea>
        </div>

        <div className="col-start-2 col-span-3">
        <label htmlFor="event_date" className="grid mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Date</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"/>
            </svg>
          </div>
          <input onChange={handleFormChange} type="date" name="event_date" id="event_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 grid w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date" required/>
        </div>
        </div>
        </div>

        <div className="col-start-2 col-span-3">
            <div className="flex items-center h-5">
            <input onChange={handleFormChange} name="private" id="private" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
            </div>
            <label htmlFor="private" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Private Event</label>
        </div>

        <div className="col-start-2 col-span-3">
        <label htmlFor="food_types" className="grid mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Types</label>
        <select
        name="food_types"
        id="food_types"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 grid w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleFormChange}
        >
        <option value="">Food Type</option>
        {/* FIND A WAY TO LIMIT THE AMOUNT OF FOOD TYPES THAT DISPLAY TO 10 AT A TIME */}
            {foodTypes?.map((foodType) => {
              return (
                <option
                  key={foodType.food_type_id}
                  value={foodType.food_type_id}
                >
                  {foodType.name}
                </option>
                    );
            })}
        </select>
        </div>
        </div>

        <div className="px-10 grid grid-cols-6 gap-4">
          <div className="flex items-center mr-4">
              <div className="flex items-center h-5">
              <input onChange={handleFormChange} id="alcohol_free" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="alcohol_free" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Alcohol Free</label>
          </div>

          <div className="flex items-center mr-4">
              <div className="flex items-center h-5">
              <input onChange={handleFormChange} id="vegan" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="vegan" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vegan</label>
          </div>

          <div className="flex items-center mr-4">
              <div className="flex items-center h-5">
              <input onChange={handleFormChange} id="gluten_free" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="gluten_free" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gluten Free</label>
          </div>

          <div className="flex items-center mr-4">
              <div className="flex items-center h-5">
              <input onChange={handleFormChange} id="pescatarian" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="pescatarian" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pescatarian</label>
          </div>

          <div className="flex items-center mr-4">
              <div className="flex items-center h-5">
              <input onChange={handleFormChange} id="vegetarian" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="vegetarian" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vegetarian</label>
          </div>

          <div className="flex items-center mr-4">
              <div className="flex items-center h-5">
              <input onChange={handleFormChange} id="omnivore" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="omnivore" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Omnivore</label>
          </div>

          <div className="flex items-center mr-4">
              <div className="flex items-center h-5">
              <input onChange={handleFormChange} id="keto_friendly" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="keto_friendly" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Keto Friendly</label>
          </div>

          <div className="flex items-center mr-4">
              <div className="flex items-center h-5">
              <input onChange={handleFormChange} id="dairy_free" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="dairy_free" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dairy Free</label>
          </div>

          <div className="flex items-center mr-4">
              <div className="flex items-center h-5">
              <input onChange={handleFormChange} id="halal" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="halal" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Halal</label>
          </div>

          <div className="flex items-center mr-4">
              <div className="flex items-center h-5">
              <input onChange={handleFormChange} id="kosher" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="kosher" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kosher</label>
          </div>
        </div>

        <div className="px-10 py-10 grid grid-cols-6 gap-6">
          <div className="col-start-4 col-span-4">
            <button onClick = {handleSubmit} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create</button>
          </div>
        </div>
      </form>
  );

}

export default EventForm;
