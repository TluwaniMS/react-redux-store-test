import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { deleteSuperHero } from "../../app/features/superHeroSlice";

const SuperHeroesDisplay = ({ superHero, index }) => {
  const dispatch = useDispatch();

  const deleteSuperHeroTrigger = (heroIndex) => {
    dispatch(deleteSuperHero(heroIndex));
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <div>{superHero.name}</div>
        <div>
          <IconButton aria-label="delete" onClick={() => deleteSuperHeroTrigger(index)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuperHeroesDisplay;
