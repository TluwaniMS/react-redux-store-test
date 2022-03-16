import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";

const MoviesDisplay = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <Card variant="outlined">
      <CardContent>
        <div>{movie.title}</div>
        <div>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoviesDisplay;
