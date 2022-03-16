import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const SuperPowersDisplay = ({ superPower }) => {
  return (
    <Card variant="outlined">
      <CardContent>{superPower.power}</CardContent>
    </Card>
  );
};

export default SuperPowersDisplay;
