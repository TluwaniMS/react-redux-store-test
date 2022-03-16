import { createSlice } from "@reduxjs/toolkit";
import { SuperHeroes } from "../sampleData/superHeroes";

const initialState = SuperHeroes;

const superHeroSlice = createSlice({
  name: "superHeroes",
  initialState,
  reducers: {
    createSuperHero: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { createSuperHero } = superHeroSlice.actions;
export default superHeroSlice.reducer;
