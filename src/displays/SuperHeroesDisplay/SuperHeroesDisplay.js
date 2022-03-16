import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const SuperHeroesDisplay = ({ superHero }) => {
  return (
    <Card>
      <CardContent>{superHero.name}</CardContent>
    </Card>
  );
};

export default SuperHeroesDisplay;
