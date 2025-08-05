
# React Multi-Step Form (Vite + Tailwind CSS + Material UI + Redux Toolkit + Axios)

This project is a modern multi-step form built using:

- ⚡ Vite (React)
- 🎨 Tailwind CSS
- 🎨 Material UI (for components)
- ⚙️ Redux Toolkit (for managing form state)
- 🔗 Axios (for API integration)
- 🌐 React Router (for routing)

## 📁 Project Structure

```
react-form-app/
├── public/
├── src/
│   ├── app/                    # Redux Toolkit store setup
│   │   └── store.js
│   ├── components/             # Reusable components
│   ├── forms/                  # Step-wise form components
│   │   ├── YourDetails.jsx
│   │   ├── EducationalDetails.jsx
│   │   ├── FamilyDetails.jsx
│   │   └── OtherDetails.jsx
│   ├── pages/                  # Main Pages
│   │   └── MultiStepForm.jsx
│   ├── slices/                 # Redux slices
│   │   └── formSlice.js
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Vite entry point
│   └── index.css               # Tailwind CSS imports
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### 1. Create the project using Vite

```bash
npm create vite@latest react-form-app -- --template react
cd react-form-app
```

### 2. Install Dependencies

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install @mui/material @emotion/react @emotion/styled
npm install react-router-dom axios @reduxjs/toolkit react-redux
```

### 3. Configure Tailwind CSS

In `tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

In `src/index.css`, add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Setup Redux Toolkit

In `src/app/store.js`:

```js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
```

### 5. Form Logic – Multi-step Flow

Each form step (YourDetails, EducationalDetails, etc.) will dispatch data to the global Redux store using `useDispatch`. At the end, the final **Submit** button will combine all data from the Redux store and send it via a **single API call** using Axios.

### Example Final Submit Logic:

```js
import axios from 'axios';
import { useSelector } from 'react-redux';

const handleSubmit = async () => {
  const formData = useSelector((state) => state.form);

  try {
    await axios.post('http://localhost:3000/api/submit-form', formData);
    alert('Form submitted successfully');
  } catch (err) {
    console.error('Submission failed:', err);
  }
}
```

## ✅ Features

- Multi-step form navigation
- Centralized form state (Redux)
- Final single API submission of all form steps
- Responsive styling with Tailwind + MUI

---

- client folder run by 
$ npm run dev
- server folder run by 
$ node index.js



## 🧑‍💻 Author

Built with ❤️ by [Rutuja Pandekar]
