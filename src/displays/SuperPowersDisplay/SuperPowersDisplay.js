import React from "react";

const SuperPowersDisplay = ({ superPower }) => {
  return (
    <Card>
      <CardContent>{superPower.power}</CardContent>
    </Card>
  );
};

export default SuperPowersDisplay;
