import React from "react";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateMovieFormDisplay = () => {
  const schema = yup.object({
    title: yup.string().required("Title is required"),
    about: yup.string().email("Please enter a valid description").required("Email is required")
  });

  return (
    <div>
      <TextField id="outlined-textarea" label="Movie Title" placeholder="Movie Title" multiline />
      <TextField
        id="outlined-multiline-static"
        label="About movie"
        multiline
        rows={4}
        defaultValue="Movie description"
      />
    </div>
  );
};

export default CreateMovieFormDisplay;
