import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import  './styles.css';


const FormWizard = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
  });

  // State to manage current step
  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle form data change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to proceed to the next step
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Function to go back to the previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Function to submit the form
  const handleSubmit = () => {
    alert('Form Submitted');
    console.log(formData);
    setCurrentStep(1);
  };

  return (
    <div className="form-container">
      <h1>Basic Form Wizard</h1>
      {currentStep === 1 && (
        <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />
      )}
      {currentStep === 2 && (
        <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
      )}
      {currentStep === 3 && (
        <Step3 formData={formData} handleSubmit={handleSubmit} prevStep={prevStep} />
      )}
    </div>
  );
};

export default FormWizard;
