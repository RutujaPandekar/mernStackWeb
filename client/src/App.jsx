import { Routes, Route } from 'react-router-dom';
import MultiStepForm from './pages/MultiStepForm';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MultiStepForm />} />
    </Routes>
  );
}
