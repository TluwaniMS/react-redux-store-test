import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateSuperHeroFormDisplay = () => {
  const schema = yup.object({
    name: yup.string().required("Name is required")
  });

  return (
    <div>
      <TextField id="outlined-textarea" label="Super Hero Name" placeholder="Hero Name" multiline />
    </div>
  );
};

export default CreateSuperHeroFormDisplay;