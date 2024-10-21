import React from 'react';
import  './styles.css';

const Step1 = ({ formData, handleChange, nextStep }) => {
  return (
    <div>
      <h2>Step 1: User Information</h2>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1;
