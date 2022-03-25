import React from "react";
import { ContenType } from "../../enumerators/ContentTypeEnum";
import CreateMovieFormDisplay from "../CreateMovieFormDisplay/CreateMovieFormDisplay";
import CreateSuperHeroFormDisplay from "../CreateSuperHeroFormDisplay/CreateSuperHeroFormDisplay";
import CreateSuperPowerFormDisplay from "../CreateSuperPowerFormDisplay/CreateSuperPowerFormDisplay";

const ModalFormDisplay = ({ contentType }) => {
  return (
    <div>
      {contentType === ContenType.Movie && <CreateMovieFormDisplay />}
      {contentType === ContenType.SuperHero && <CreateSuperHeroFormDisplay />}
      {contentType === ContenType.SuperPower && <CreateSuperPowerFormDisplay />}
    </div>
  );
};

export default ModalFormDisplay;
