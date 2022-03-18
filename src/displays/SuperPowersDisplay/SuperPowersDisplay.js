import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { deleteSuperPower } from "../../app/features/superPowerSlice";

const SuperPowersDisplay = ({ superPower, index }) => {
  const dispatch = useDispatch();

  const deleteSuperPowerTrigger = (powerIndex) => {
    dispatch(deleteSuperPower(powerIndex));
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <div>{superPower.power}</div>
        <div>
          <IconButton aria-label="delete" onClick={() => deleteSuperPowerTrigger(index)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuperPowersDisplay;
