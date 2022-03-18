import { createSlice } from "@reduxjs/toolkit";
import { SuperHeroes } from "../sampleData/superHeroes";

const initialState = SuperHeroes;

const superHeroSlice = createSlice({
  name: "superHeroes",
  initialState,
  reducers: {
    createSuperHero: (state, action) => {
      state.push(action.payload);
    },
    deleteSuperHero: (state, action) => {
      state.splice(action.payload, 1);
    }
  }
});

export const { createSuperHero, deleteSuperHero } = superHeroSlice.actions;
export default superHeroSlice.reducer;
