import { useState } from 'react';
import YourDetails from '../forms/YourDetails';
import EducationalDetails from '../forms/EducationalDetails';
import FamilyDetails from '../forms/FamilyDetails';
import OtherDetails from '../forms/OtherDetails';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const formData = useSelector((state) => state.form);

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${import.meta.env.VITE_API_URL}/api/submit-form`, formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Form Submitted!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {step === 1 && <YourDetails onNext={() => setStep(2)} />}
      {step === 2 && <EducationalDetails onNext={() => setStep(3)} />}
      {step === 3 && <FamilyDetails onNext={() => setStep(4)} />}
      {step === 4 && <OtherDetails onSubmit={handleSubmit} />}
    </>
  );
}
