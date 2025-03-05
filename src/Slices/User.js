import { createSlice } from "@reduxjs/toolkit";

const initState = {
  userName: "",
  userEmail: "",
  userPhoto: "",
  prevLocation: "",
};

const usersCredential = createSlice({
  name: "USER",
  initialState: initState,
  reducers: {
    addUser: (state, action) => {
      state.userName = action.payload;
    },
    addEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    addPhotoUrl: (state, action) => {
      state.userPhoto = action.payload;
    },
    addLocation: (state, action) => {
      state.prevLocation = action.payload;
    }
  },
});

export const { addUser, addEmail, addPhotoUrl, addLocation } = usersCredential.actions;

export default usersCredential.reducer;