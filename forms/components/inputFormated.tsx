// FormattedInputs.tsx

import * as React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { IMaskInput } from 'react-imask';

type MaskProps = {
  mask: string,
  label: string,
  disabled?: boolean,
  onChanger?: (value: string) => void,
  value?: string, // Adiciona a prop value para receber o valor do cepInput
};

const Mask = React.forwardRef((props: any, ref: React.Ref<HTMLInputElement>) => {
  const { mask } = props;

  return (
    <IMaskInput
      {...props}
      mask={mask}
      inputRef={ref}
      overwrite
    />
  );
});

export default function FormattedInputs({ label, mask, disabled, onChanger, value }: MaskProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChanger && onChanger(event.target.value);
  };


  if(value){
    return (
      <TextField
        label={label}
        variant="outlined"
        onChange={handleInputChange}
        disabled={disabled == null ? false : disabled}
        value={value}
        style={{ width: '100%' }} // Exibe o valor do cepInput no TextField
        InputProps={{
          inputComponent: (props: any) => <Mask {...props} mask={mask} />,
        }}
      />
    );
  }
  return (
    <TextField
      label={label}
      variant="outlined"
      onChange={handleInputChange}
      disabled={disabled == null ? false : disabled}
      style={{ width: '100%' }} // Exibe o valor do cepInput no TextField
      InputProps={{
        inputComponent: (props: any) => <Mask {...props} mask={mask} />,
      }}
    />
  );
};
