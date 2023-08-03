import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function InputWithIcon() {
  const [value, setValue] = useState("");

  return (
    <TextField
      placeholder="Search"
      type="text"
      variant="outlined"
      fullWidth
      size="small"
      onChange={(e) => setValue(e.target.value)}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),

        endAdornment: value && (
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setValue("")}
          ><CloseIcon/>
          </IconButton>
        )
      }}
    />
  );
}