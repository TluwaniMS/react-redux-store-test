import { Link } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import MoviesDisplay from "../../displays/MoviesDisplay/MoviesDisplay";
import SuperHeroesDisplay from "../../displays/SuperHeroesDisplay/SuperHeroesDisplay";
import SuperPowersDisplay from "../../displays/SuperPowersDisplay/SuperPowersDisplay";
import "./LandingPageComponent.css";

const LandingPageComponent = () => {
  const movies = useSelector((state) => state.movies);
  const superHeroes = useSelector((state) => state.superHeroes);
  const superPowers = useSelector((state) => state.superPowers);

  return (
    <div>
      <div className="landing-page-section-container">
        <div className="landing-page-section-header">Movies</div>
        <div className="landing-page-sectioned-content-container">
          {movies.map((movie, index) => (
            <Link key={movie._id}>
              <MoviesDisplay movie={movie} index={index} />
            </Link>
          ))}
        </div>
      </div>
      <div className="landing-page-section-container">
        <div className="landing-page-section-header">Super Heroes</div>
        <div className="landing-page-sectioned-content-container">
          {superHeroes.map((superHero, index) => (
            <Link key={superHero._id}>
              <SuperHeroesDisplay superHero={superHero} index={index} />
            </Link>
          ))}
        </div>
      </div>
      <div className="landing-page-section-container">
        <div className="landing-page-section-header">Super Powers</div>
        <div className="landing-page-sectioned-content-container">
          {superPowers.map((superPower, index) => (
            <Link key={superPower._id}>
              <SuperPowersDisplay superPower={superPower} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPageComponent;
