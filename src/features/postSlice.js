import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allPosts: [],
  singlePost: {},
  postStatus: "idle",
};

export const getAllPostsData = createAsyncThunk(
  "post/getAllPostsData",
  async (thunkAPI) => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSinglePostData = createAsyncThunk(
  "post/getSinglePostData",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPostsData.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getAllPostsData.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload;
    },
    [getAllPostsData.rejected]: (state) => {
      state.postStatus = "rejected";
    },
    [getSinglePostData.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getSinglePostData.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.singlePost = action.payload;
    },
    [getSinglePostData.rejected]: (state) => {
      state.postStatus = "rejected";
    },
  },
});

export default postSlice.reducer;
