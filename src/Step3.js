import React from 'react';
import './styles.css';

const Step3 = ({ formData, handleSubmit, prevStep }) => {
  return (
    <div>
      <h2>Step 3: Review and Submit</h2>
      <ul>
        <li>Name: {formData.name}</li>
        <li>Email: {formData.email}</li>
        <li>Address: {formData.address}</li>
        <li>City: {formData.city}</li>
        <li>State: {formData.state}</li>
      </ul>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
