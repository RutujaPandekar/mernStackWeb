import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOthers } from '../slices/formSlice';

export default function OtherDetails({ onSubmit }) {
  const [form, setForm] = useState({ hobby: '', notes: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    dispatch(setOthers(form));
    onSubmit(); 
  };

  return (
    <div>
      <h2>Other Details</h2>
      <input name="hobby" onChange={handleChange} placeholder="Hobby" />
      <input name="notes" onChange={handleChange} placeholder="Notes" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
