import React from "react";
import MovieCreationFormDisplay from "../../displays/MovieCreationFormDisplay/MovieCreationFormDisplay";
import SuperHeroCreationFormDisplay from "../../displays/SuperHeroCreationFormDisplay/SuperHeroCreationFormDisplay";
import SuperPowerCreationFormDisplay from "../../displays/SuperPowerCreationFormDisplay/SuperPowerCreationFormDisplay";
import { ContenType } from "../../enumerators/ContentTypeEnum";

const ContentCreationModalComponent = ({ contentType }) => {
  return (
    <div>
      {contentType === ContenType.Movie && <MovieCreationFormDisplay />}
      {contentType === ContenType.SuperHero && <SuperHeroCreationFormDisplay />}
      {contentType === ContenType.SuperPower && <SuperPowerCreationFormDisplay />}
    </div>
  );
};

export default ContentCreationModalComponent;
