import React from "react";
import { useSelector } from "react-redux";
import MoviesDisplay from "../../displays/MoviesDisplay/MoviesDisplay";
import SuperHeroesDisplay from "../../displays/SuperHeroesDisplay/SuperHeroesDisplay";
import SuperPowersDisplay from "../../displays/SuperPowersDisplay/SuperPowersDisplay";

const LandingPageComponent = () => {
  const movies = useSelector((state) => state.movies);
  const superHeroes = useSelector((state) => state.superHeroes);
  const superPowers = useSelector((state) => state.superPowers);

  return (
    <div>
      <div>Hello World!!</div>
      <MoviesDisplay />
      <SuperHeroesDisplay />
      <SuperPowersDisplay />
    </div>
  );
};

export default LandingPageComponent;
