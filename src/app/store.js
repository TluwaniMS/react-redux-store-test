import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./features/movieSlice";
import superHeroSlice from "./features/superHeroSlice";
import superPowerSlice from "./features/superPowerSlice";

export default configureStore({
  reducer: {
    movie: movieSlice,
    superHero: superHeroSlice,
    superPower: superPowerSlice
  }
});
