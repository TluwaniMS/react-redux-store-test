import { createSlice } from "@reduxjs/toolkit";
import { SuperPowers } from "../sampleData/superPowers";

const initialState = SuperPowers;

const superPowerSlice = createSlice({
  name: "superPowers",
  initialState,
  reducers: {
    createSuperPower: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { createSuperPower } = superPowerSlice.actions;
export default superPowerSlice.reducer;
