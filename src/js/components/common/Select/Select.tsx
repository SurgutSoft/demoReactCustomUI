import React from 'react';
import {muiTheme} from '../../../consts/muiTheme';
import {ThemeProvider} from '@material-ui/core/styles';

import {FormControl, InputLabel, MenuItem, Select as MuiSelect} from "@material-ui/core";

interface IOption {
  value: string,
  label: string
}

interface IProps {
  label: string;
  value?: string;
  options: Array<IOption>;
  onChange: (value: any) => void;
}

const Select = ({label, value, options, onChange}: IProps) => {

  return (
    <ThemeProvider theme={muiTheme}>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="select-label">{label}</InputLabel>
        <MuiSelect
          fullWidth
          id="select"
          disableUnderline
          style={{
            backgroundColor: "#F4F3F1",
          }}
          labelId="select-label"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map(option => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)}
        </MuiSelect>
      </FormControl>
    </ThemeProvider>

  )
}

export default Select;
