// import { createSlice } from "@reduxjs/toolkit";

// // Load user from local storage
// const loadUserFromStorage = () => {
//   const user = localStorage.getItem("user");
//   return user ? JSON.parse(user) : null;
// };

// const initialState = {
//   user: loadUserFromStorage(),
//   isAuthenticated: !!loadUserFromStorage(),
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       console.log("Login Action Dispatched:", action.payload); // ✅ Debug Log
//       state.user = action.payload;
//       state.isAuthenticated = true;
//       localStorage.setItem("user", JSON.stringify(action.payload));
//     },
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem("user");
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;

// export default authSlice.reducer;

// // Selectors
// export const selectUser = (state) => state.auth.user;
// export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;



import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Store user data
      state.isAuthenticated = true;
      localStorage.setItem("auth", JSON.stringify(state)); // Save to localStorage
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("auth"); // Remove from localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export default authSlice.reducer;
