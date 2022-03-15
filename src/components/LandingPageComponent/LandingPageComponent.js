import React from "react";
import MoviesDisplay from "../../displays/MoviesDisplay/MoviesDisplay";
import SuperHeroesDisplay from "../../displays/SuperHeroesDisplay/SuperHeroesDisplay";
import SuperPowersDisplay from "../../displays/SuperPowersDisplay/SuperPowersDisplay";

const LandingPageComponent = () => {
  return (
    <div>
      <MoviesDisplay />
      <SuperHeroesDisplay />
      <SuperPowersDisplay />
    </div>
  );
};

export default LandingPageComponent;
