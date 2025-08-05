import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  yourDetails: {},
  education: {},
  family: {},
  others: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setYourDetails: (state, action) => { state.yourDetails = action.payload; },
    setEducation: (state, action) => { state.education = action.payload; },
    setFamily: (state, action) => { state.family = action.payload; },
    setOthers: (state, action) => { state.others = action.payload; },
    resetForm: () => initialState,
  },
});

export const { setYourDetails, setEducation, setFamily, setOthers, resetForm } = formSlice.actions;
export default formSlice.reducer;
