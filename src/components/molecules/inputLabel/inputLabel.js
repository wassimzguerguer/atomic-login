import React from "react";
import { Input, Label } from "../../atom";
import "./inputLabel.css";

export const InputLabel = ({ InputLabelProps }) => {
  const { errorMessage, inputProps, labelProps } = InputLabelProps;
  return (
    <div className="form-groupe">
      <Label {...labelProps} />
      <Input {...inputProps} />
      {errorMessage && (<div className="InputMolecule-error">{errorMessage}</div>)}
    </div>
  );
};
