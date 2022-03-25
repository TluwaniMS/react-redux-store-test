import React from "react";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateSuperHeroFormDisplay = () => {
  const schema = yup.object({
    name: yup.string().required("Name is required")
  });

  return (
    <div className="main-input-form-container">
      <div className="input-form">
        <TextField id="outlined-textarea" label="Super Hero Name" placeholder="Hero Name" multiline />
      </div>
      <div className="button-container">
        <Button variant="contained" component="span">
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateSuperHeroFormDisplay;
