import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type BasicSelectProps = {
    valuesOptions: string[],
    label: string,
    onChange: (selectedValue: string) => void; 

  }

export default function BasicSelect({ label, valuesOptions, onChange}: BasicSelectProps) {
  const [value, setValue] = React.useState('');
  
  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    setValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
        {valuesOptions.map((option) => <MenuItem key={option} value={option}>{option}</MenuItem>)}
          
        </Select>
      </FormControl>
    </Box>
  );
}