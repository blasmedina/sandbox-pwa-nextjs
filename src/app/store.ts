import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appSlice from "@/redux/app.slice";

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
  devTools: process.env.NODE_ENV === "development",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
