import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null, // Change the initial state to null or an empty object
  reducers: {
    login: (state, action) => {
      return action.payload; // Replace state with the action.payload
    },
    logout: (state, action) => {
      return null; // Clear the state when logging out
    },
    setAuthStatus(state, action) {
      return action.payload; // Replace state with the action.payload
    },
  },
});

export const { login, logout, setAuthStatus } = userSlice.actions;

export default userSlice.reducer;
