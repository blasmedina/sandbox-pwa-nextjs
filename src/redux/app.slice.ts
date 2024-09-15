import { RootState } from "@/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  isReady: boolean;
}

const initialState: AppState = {
  isReady: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsReady: (state, action: PayloadAction<AppState["isReady"]>) => {
      state.isReady = action.payload;
    },
  },
});

export const { setIsReady } = appSlice.actions;

export const selectAppIsReady = (state: RootState) => state.app.isReady;

export default appSlice.reducer;
