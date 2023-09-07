import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../interfaces/PostType";
import { getPosts } from "../../api/api";

export interface PostState {
  loading: boolean;
  posts: Post[];
  error: string | null;
  currentPage: number;
  postsPerPage: number;
}
// default post initial state
const initialState: PostState = {
  loading: false,
  posts: [],
  error: null,
  currentPage: 1,
  postsPerPage: 10,
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostsStart(state) {
      state.loading = true;
      state.posts = [];
      state.error = null;
      state.currentPage = 1;
      state.postsPerPage = 10;
    },
    getPostsSuccess(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },
    getPostsFailure(state, action: PayloadAction<string | null>) {
      state.loading = false;
      state.error = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  getPostsSuccess,
  getPostsFailure,
  getPostsStart,
  setCurrentPage,
} = postSlice.actions;
//export to use it on combineReducer on reduc config
export default postSlice.reducer;

// Create an async action creator using createAsyncThunk
export const fetchPosts = createAsyncThunk(
  "post/fetchPosts", // Action type prefix
  async (_, { dispatch }) => {
    // The second argument provides access to dispatch and other options
    try {
      dispatch(getPostsStart()); // Dispatch the start action

      const postsData = await getPosts();
      dispatch(getPostsSuccess(postsData)); // Dispatch the success action
      return postsData;
    } catch (err) {
      throw err; // Throwing an error will automatically trigger the "rejected" action
    }
  }
);
