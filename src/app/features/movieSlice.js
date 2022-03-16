import { createSlice } from "@reduxjs/toolkit";
import { Movies } from "../sampleData/movies";

const initialState = Movies;

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    createMovie: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { createMovie } = movieSlice.actions;
export default movieSlice.reducer;
