import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const MoviesDisplay = ({ movie }) => {
  return (
    <Card variant="outlined">
      <CardContent>{movie.title}</CardContent>
    </Card>
  );
};

export default MoviesDisplay;
