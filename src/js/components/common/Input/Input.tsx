import React from 'react';
import {muiTheme} from '../../../consts/muiTheme';
import {ThemeProvider} from '@material-ui/core/styles';

import {InputAdornment, makeStyles, TextField} from "@material-ui/core";

interface IProps {
  label: string;
  value?: string;
  endAdornment?: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const useStyles = makeStyles((theme) => ({

  input: {
    backgroundColor: "#F4F3F1",
  },
}));


const Input = ({label, value, endAdornment, error, onChange, disabled}: IProps) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <TextField label={label} placeholder={label}
                 value={value}
                 error={error}
                 onChange={(e: any) => {
                   if (onChange) onChange(e.target.value)
                 }}
                 disabled={disabled}
                 fullWidth
                 variant="filled"

                 InputProps={{
                   className: classes.input,
                   disableUnderline: true,
                   endAdornment: endAdornment ?
                     <InputAdornment position="end">{endAdornment}</InputAdornment> : undefined,
                 }}
      />
    </ThemeProvider>

  )
}

export default Input;
