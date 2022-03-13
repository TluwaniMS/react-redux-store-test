import { createSlice } from "@reduxjs/toolkit";
import { SuperPowers } from "../sampleData/superPowers";

const superPowerSlice = createSlice({
  name: "superPowers",
  initialState: {
    value: SuperPowers
  },
  reducers: {}
});

export default superPowerSlice.reducer
