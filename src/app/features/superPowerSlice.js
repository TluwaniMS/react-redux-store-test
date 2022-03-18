import { createSlice } from "@reduxjs/toolkit";
import { SuperPowers } from "../sampleData/superPowers";

const initialState = SuperPowers;

const superPowerSlice = createSlice({
  name: "superPowers",
  initialState,
  reducers: {
    createSuperPower: (state, action) => {
      state.push(action.payload);
    },
    deleteSuperPower: (state, action) => {
      state.splice(action.payload, 1);
    }
  }
});

export const { createSuperPower, deleteSuperPower } = superPowerSlice.actions;
export default superPowerSlice.reducer;
