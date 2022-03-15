import { createSlice } from "@reduxjs/toolkit";
import { SuperPowers } from "../sampleData/superPowers";

const initialState = SuperPowers

const superPowerSlice = createSlice({
  name: "superPowers",
  initialState,
  reducers: {}
});

export default superPowerSlice.reducer
