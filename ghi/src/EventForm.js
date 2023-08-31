import React, { useState, useEffect } from 'react';



function EventForm(){
    const[foodTypes, setFoodTypes] = useState([])
    const[hasSignedUp, setHasSignedUp] = useState(false)
    const[formData, setFormData] = useState({
        user_id: 1,
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
})

    const fetchFoodTypeData = async () => {
    const url = `http://localhost:8000/api/foods`;
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        let dataOfFood = data
        setFoodTypes(dataOfFood)
    }
    }

    useEffect(() => {
        fetchFoodTypeData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

    const url = `http://localhost:8000/event`;

    const fetchConfig = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(url, fetchConfig);
    console.log(await response.json());

    if (response.ok) {
        setFormData({
            user_id: '',
            event_name: '',
            address: '',
            zipcode: '',
            description: '',
            event_date: '',
            private_event: '',
            food_types: '',
            alcohol_free: '',
            vegan: '',
            gluten_free: '',
            pescatarian: '',
            vegetarian: '',
            omnivore: '',
            keto_friendly: '',
            dairy_free: '',
            halal: '',
            kosher: '',
        });
        setHasSignedUp(true)
    }
}
const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
        ...formData,
        [inputName]: value
    });
}


let messageClasses = 'alert alert-success d-none mb-0';
if (hasSignedUp) {
  messageClasses = 'alert alert-success mb-0';
}

return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Create an Event</h1>
        <form onSubmit={handleSubmit} id="create-event-form">

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="User" required type="number" name="user" id="user" className="form-control" />
            <label htmlFor="user">User ID</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Name" required type="text" name="event_name" id="event_name" />
            <label className="form-label">Event Name</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="address" required type="text" name="address" id="address" className="form-control" />
            <label htmlFor="address">Address</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Zipcode" required type="number" name="zipcode" id="zipcode" className="form-control" />
            <label htmlFor="zipcode">Zipcode</label>
        </div>

        <div className="mb-3">
            <textarea onChange={handleFormChange} rows = "3" name="description" id="description" className="form-control" />
            <label htmlFor="description">Description</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Date" required type="date" name="event_date" id="event_date" className="form-control" />
            <label htmlFor="date">Date</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Private" required type="checkbox" name="private" id="private" className="form-control" />
            <label htmlFor="private">Private</label>
        </div>

        <div className="mb-3">
            <select onChange={handleFormChange} required name="food_types" id="food_types" className="form-select" >
              <option value="">Food Type</option>
              {foodTypes?.map(foodType => {
                return (
                  <option key={foodType.food_type_id} value={foodType.food_type_id}>{foodType.name}</option>
                )
              })}
            </select>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Alcohol Free" required type="checkbox" name="alcohol_free" id="alcohol_free" className="form-control" />
            <label htmlFor="alcohol_free">Alcohol Free</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Vegan" required type="checkbox" name="vegan" id="vegan" className="form-control" />
            <label htmlFor="vegan">Vegan</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Gluten Free" required type="checkbox" name="gluten_free" id="gluten_free" className="form-control" />
            <label htmlFor="gluten_free">Gluten Free</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Pescatarian" required type="checkbox" name="pescatarian" id="pescatarian" className="form-control" />
            <label htmlFor="pescatarian">Pescatarian</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Vegetarian" required type="checkbox" name="vegetarian" id="vegetarian" className="form-control" />
            <label htmlFor="vegetarian">Vegetarian</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Omnivore" required type="checkbox" name="omnivore" id="omnivore" className="form-control" />
            <label htmlFor="omnivore">Omnivore</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Keto Friendly" required type="checkbox" name="keto_friendly" id="keto_friendly" className="form-control" />
            <label htmlFor="keto_friendly">Keto Friendly</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Dairy Free" required type="checkbox" name="dairy_free" id="dairy_free" className="form-control" />
            <label htmlFor="dairy_free">Dairy Free</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Halal" required type="checkbox" name="halal" id="halal" className="form-control" />
            <label htmlFor="halal">Halal</label>
        </div>

        <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Kosher" required type="checkbox" name="kosher" id="kosher" className="form-control" />
            <label htmlFor="kosher">Kosher</label>
        </div>
          <button className="btn btn-primary">Create</button>
        </form>
        <div className={messageClasses} id="success-message">
            You're appointment was created!
        </div>
      </div>
    </div>
  </div>
)
}

export default EventForm
