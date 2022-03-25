import React from "react";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateSuperPowerFormDisplay = () => {
  const schema = yup.object({
    popwer: yup.string().required("Title is required"),
    description: yup.string().email("Please enter a valid description").required("Email is required")
  });

  return (
    <div className="main-input-form-container">
      <div className="input-form">
        <TextField id="outlined-textarea" label="Super power" placeholder="Super power" multiline />
      </div>
      <div className="input-form">
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Power description"
        />
      </div>
      <div className="button-container">
        <Button variant="contained" component="span">
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateSuperPowerFormDisplay;
