import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export interface UserState {
  currentUser: {
    data: {
      _id: string;
      name: string;
      email: string;
      isAdmin: boolean;
      createdAt: string;
      updatedAt: string;
    };
  };
}

const initialState = {
  currentUser: {
    data: {
      _id: null,
      name: null,
      email: null,
      isAdmin: null,
      createdAt: null,
      updatedAt: null,
    },
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (user, action) => {
      user.currentUser = action.payload;
    },
  },
});

// This selector return the name of the current user.
export const selectUserName = (state: RootState) =>
  state.entities.user.currentUser.data.name;

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
