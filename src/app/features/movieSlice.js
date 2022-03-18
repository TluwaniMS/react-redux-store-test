import { createSlice } from "@reduxjs/toolkit";
import { Movies } from "../sampleData/movies";

const initialState = Movies;

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    createMovie: (state, action) => {
      state.push(action.payload);
    },
    deleteMovie: (state, action) => {
      state.splice(action.payload, 1);
    }
  }
});

export const { createMovie, deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;
