import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Visibility } from "@material-ui/icons";
import { VisibilityOff } from "@material-ui/icons";
import { useField } from "formik";

import "./FormInput.css";

const styles = (theme) => ({
  root: {
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      borderColor: "#3659B5",
    },
    color: "#0E101A",
    borderColor: "#79809767",
  },
  disabled: {},
  focused: {},
  error: {},
  notchedOutline: {},
});

const FormInput = ({ name, type, classes, ...otherProps }) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  let inputProps;
  if (type === "password") {
    inputProps = {
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      ),
    };
  }

  return (
    <TextField
      {...configTextField}
      className="formInput"
      InputProps={{
        ...inputProps,
        classes: classes,
      }}
      type={showPassword ? "text" : type}
    />
  );
};

export default withStyles(styles)(FormInput);
