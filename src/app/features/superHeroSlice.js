import { createSlice } from "@reduxjs/toolkit";
import { SuperHeroes } from "../sampleData/superHeroes";

const initialState = SuperHeroes

const superHeroSlice = createSlice({
  name: "superHeroes",
  initialState,
  reducers: {}
});

export default superHeroSlice.reducer;
