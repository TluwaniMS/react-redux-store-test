import React from "react";
import MovieCreationFormDisplay from "../../displays/MovieCreationFormDisplay/MovieCreationFormDisplay";
import SuperHeroCreationFormDisplay from "../../displays/SuperHeroCreationFormDisplay/SuperHeroCreationFormDisplay";
import SuperPowerCreationFormDisplay from "../../displays/SuperPowerCreationFormDisplay/SuperPowerCreationFormDisplay";

const ContentCreationModalComponent = ({ contentType }) => {
  return (
    <div>
      {<MovieCreationFormDisplay />}
      {<SuperHeroCreationFormDisplay />}
      {<SuperPowerCreationFormDisplay />}
    </div>
  );
};

export default ContentCreationModalComponent;
