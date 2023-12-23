import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      // هذه البيانات
      username: "JohnDoe",
      address: {
        city: "Alexandria",
        twon: "Gleem",
        details: "123 Main St",
      },
      age: 25,
      phone: "0123456789",
    },
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;
