import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = {
  createdPost: [],
};

export const createPostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    createPostHandler: (state, action) => {
      state.createdPost = [
        { ...action.payload, id: uuid() },
        ...state.createdPost,
      ];
    },
  },
});

export const { createPostHandler } = createPostSlice.actions;

export default createPostSlice.reducer;
