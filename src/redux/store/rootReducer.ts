import { combineReducers } from "@reduxjs/toolkit";
import postSlice from "../slices/PostSlice";

const rootReducer = combineReducers({
  postSlice: postSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
