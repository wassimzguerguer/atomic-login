import React from "react";
import { Button } from "../../atom";
import { InputLabel } from "../../molecule";
import "./inputLabel.css";

export const form = ({ formProps }) => {
  const { buttonProps, InputLabelProps } = formProps;
  return (
    <div className="form">
      <InputLabel {...InputLabelProps} />
      <InputLabel {...InputLabelProps} />
      
      <Button {...buttonProps} />
    </div>
  );
};
