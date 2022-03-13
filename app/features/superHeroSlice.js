import { createSlice } from "@reduxjs/toolkit";
import { SuperHeroes } from "../sampleData/superHeroes";

const superHeroSlice = createSlice({
  name: "superHeroes",
  initialState: {
    value: SuperHeroes
  },
  reducers: {}
});

export default superHeroSlice.reducer;
