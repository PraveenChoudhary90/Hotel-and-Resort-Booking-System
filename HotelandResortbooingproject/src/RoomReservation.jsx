import React, { useState } from 'react';

const Reservation = () => {
  // Step 1: Initialize state for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    room: '',
    arrival: '',
    departure: '',
    adults: '1',
    children: '0',
  });

  // Step 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log(formData); // You can replace this with your submission logic
    // Reset form or perform any other actions as needed
  };

  return (
    <>
      <div id="from">
        <h1>ROOM RESERVATION</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="phone">Phone No</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <label htmlFor="room">Room</label>
          <select name="room" value={formData.room} onChange={handleChange}>
            <option value="">Select a room</option>
            <option value="standard">Standard Room</option>
            <option value="deluxe">Deluxe Apartment</option>
            <option value="single">Single Room</option>
          </select>
          <br />
          <label htmlFor="arrival">Arrival Date</label>
          <input
            type="date"
            name="arrival"
            value={formData.arrival}
            onChange={handleChange}
          />
          <label htmlFor="departure">Departure Date</label>
          <input
            type="date"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="adults">Adults</label>
          <select name="adults" value={formData.adults} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <label htmlFor="children">Children</label>
          <select name="children" value={formData.children} onChange={handleChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

 export default Reservation;

