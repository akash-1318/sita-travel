import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";
import createPostReducer from "../features/createPostSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    createPost: createPostReducer,
  },
});
