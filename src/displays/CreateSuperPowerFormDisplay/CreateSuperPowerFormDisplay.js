import React from "react";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateSuperPowerFormDisplay = () => {
  const schema = yup.object({
    popwer: yup.string().required("Title is required"),
    description: yup.string().email("Please enter a valid description").required("Email is required")
  });

  return (
    <div>
      <TextField id="outlined-textarea" label="Super power" placeholder="Super power" multiline />
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        defaultValue="Power description"
      />
    </div>
  );
};

export default CreateSuperPowerFormDisplay;
