import React from 'react';
import './styles.css';

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <label>City:</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      <label>State:</label>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
