import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility } from "@material-ui/icons";
import { VisibilityOff } from "@material-ui/icons";
import { useField } from 'formik';

import './FormInput.css';

const FormInput = ({ name, type, ...otherProps }) => {
    const [field, meta] = useField(name);
    const [showPassword, setShowPassword] = useState(false)

    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined'
    }

    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    let inputProps;
    if (type === 'password') {
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
            )
        }
    }

    return (
        <TextField 
            {...configTextField}
            className="formInput"
            InputProps={inputProps}
            type={showPassword ? 'text' : type}
        />
    );
};

export default FormInput;