// Example: src/forms/YourDetails.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFamily } from '../slices/formSlice';

export default function YourDetails({ onNext }) {
  const [form, setForm] = useState({ name: '', email: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleNext = () => {
    dispatch(setFamily(form));
    onNext();
  };

  return (
    <div>
      <h2>Your Details</h2>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
