import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const SuperHeroesDisplay = ({ superHero }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <div>{superHero.name}</div>
        <div>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuperHeroesDisplay;
