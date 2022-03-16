import { Link } from "@mui/material";
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
      <div className="landing-page-section-container">
        <div className="landing-page-section-header">Movies</div>
        <div className="landing-page-sectioned-content-container">
          {movies.map((movie) => (
            <Link>
              <MoviesDisplay movie={movie} />
            </Link>
          ))}
        </div>
      </div>
      <div className="landing-page-section-container">
        <div className="landing-page-section-header">Super Heroes</div>
        <div className="landing-page-sectioned-content-container">
          {superHeroes.map((superHero) => (
            <Link>
              <SuperHeroesDisplay superHero={superHero} />
            </Link>
          ))}
        </div>
      </div>
      <div className="landing-page-section-container">
        <div className="landing-page-section-header">Super Powers</div>
        <div className="landing-page-sectioned-content-container">
          {superPowers.map((superPower) => (
            <Link>
              <SuperPowersDisplay superPower={superPower} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPageComponent;
