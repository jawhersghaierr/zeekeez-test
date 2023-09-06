import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../interfaces/PostType";
import { getPosts } from "@/api/api";

export interface PostState {
  loading: boolean;
  posts: Post[];
  error: string | null;
}
// default post initial state
const initialState: PostState = {
  loading: false,
  posts: [],
  error: null,
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostsStart(state) {
      state.loading = true;
      state.posts = [];
      state.error = null;
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
  },
});

export const { getPostsSuccess, getPostsFailure, getPostsStart } =
  postSlice.actions;
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
