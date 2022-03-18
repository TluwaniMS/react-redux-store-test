import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../app/features/movieSlice";

const MoviesDisplay = ({ movie, index }) => {
  const dispatch = useDispatch();

  const deleteMovieTrigger = (movieIndex) => {
    dispatch(deleteMovie(movieIndex));
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <div>{movie.title}</div>
        <div>
          <IconButton aria-label="delete" onClick={() => deleteMovieTrigger(index)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoviesDisplay;
