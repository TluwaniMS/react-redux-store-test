import React from "react";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateMovieFormDisplay = () => {
  const schema = yup.object({
    title: yup.string().required("Title is required"),
    about: yup.string().email("Please enter a valid description").required("Email is required")
  });

  return (
    <div className="main-input-form-container">
      <div className="input-form">
        <TextField id="outlined-textarea" label="Movie Title" placeholder="Movie Title" multiline />
      </div>
      <div className="input-form">
        <TextField
          id="outlined-multiline-static"
          label="About movie"
          multiline
          rows={4}
          defaultValue="Movie description"
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

export default CreateMovieFormDisplay;
