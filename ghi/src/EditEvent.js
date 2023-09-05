import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditEventPage() {
  const navigate = useNavigate();
  const {event_id} = useParams();
  const [formData, setFormData] = useState({
    user_id: 0,
    event_name: '',
    address: '',
    zipcode: 0,
    description: '',
    event_date: '',
    private_event: false,
    food_types: 0,
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
  async function fetchEventData() {
    try {
      const response = await fetch(`http://localhost:8000/events/${event_id}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        console.error('Failed to fetch event data');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  fetchEventData();
}, [event_id]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Convert specific values to integers
    const parsedValue = type === 'number' ? parseInt(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : parsedValue,
    }));
  };

  const handleEditEvent = async () => {
    try {
      const response = await fetch(`http://localhost:8000/events/${event_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Event edited successfully');
        navigate(`/events/${event_id}`);
      } else {
        console.error('Failed to edit event');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Edit Event</h1>
      <label className="block mb-2">Event Name:</label>
      <input
        type="text"
        name="event_name"
        value={formData.event_name}
        onChange={handleInputChange}
        className="mb-4 p-2 border"
      />
      <label className="block mb-2">User ID:</label>
      <input
        type="number"
        name="user_id"
        value={formData.user_id}
        onChange={handleInputChange}
        className="mb-4 p-2 border"
      />
      <label className="block mb-2">Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        className="mb-4 p-2 border"
      />
      <label className="block mb-2">Zipcode:</label>
      <input
        type="number"
        name="zipcode"
        value={formData.zipcode}
        onChange={handleInputChange}
        className="mb-4 p-2 border"
      />
      <label className="block mb-2">Description:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        className="mb-4 p-2 border"
      />
      <label className="block mb-2">Event Date:</label>
      <input
        type="date"
        name="event_date"
        value={formData.event_date}
        onChange={handleInputChange}
        className="mb-4 p-2 border"
      />
      <div className="mb-4">
        <label className="block mb-2">Private Event:</label>
        <input
          type="checkbox"
          name="private_event"
          checked={formData.private_event}
          onChange={handleInputChange}
        />
      </div>
       <div className="mb-4">
        <label className="block mb-2">Food Type:</label>
        <input
          type="number"
          name="food_types"
          checked={formData.food_types}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Food Attributes:</label>
        <div className="flex flex-wrap">
          <label className="mr-4">
            <input
              type="checkbox"
              name="alcohol_free"
              checked={formData.alcohol_free}
              onChange={handleInputChange}
            />
            Alcohol Free
          </label>
          <label className="mr-4">
            <input
              type="checkbox"
              name="vegan"
              checked={formData.vegan}
              onChange={handleInputChange}
            />
            Vegan
          </label>
          {/* Add checkboxes for other attributes */}
          {/* ... */}
        </div>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleEditEvent}
      >
        Save Changes
      </button>
    </div>
  );
}

export default EditEventPage;
