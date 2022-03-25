import React from "react";
import { ContenType } from "../../enumerators/ContentTypeEnum";

const ModalFormDisplay = ({ contentType }) => {
  return (
    <div>
      {contentType === ContenType.Movie && <div>Movie display</div>}
      {contentType === ContenType.SuperHero && <div>SuperHero display</div>}
      {contentType === ContenType.SuperPower && <div>SuperPower display</div>}
    </div>
  );
};

export default ModalFormDisplay;
