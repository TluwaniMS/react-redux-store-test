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
      state = state.filter((movie) => movie._id !== action.paylod);
    }
  }
});

export const { createMovie, deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;
