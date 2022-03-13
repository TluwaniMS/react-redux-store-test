import { createSlice } from "@reduxjs/toolkit";
import { Movies } from "../sampleData/movies";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    value: Movies
  },
  reducers: {}
});

export default movieSlice.reducer