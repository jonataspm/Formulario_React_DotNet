import { Button, Grid, Stack, TextField } from '@mui/material';
import BasicSelect from '../select';
import React, { useEffect, useState } from 'react';
import FormattedInputs from '../inputFormated';
import AddressList from '../addressList';
import { SimpleBackdrop } from '../backdop';



export const AddressGrid = () => {
  const [addressList, setAddressList] = React.useState<any[]>([]);

  const handleSaveAddress = (newAddress: any) => {
    setAddressList((prevAddresses: any) => [...prevAddresses, newAddress]);
  };

  const handleRemoveAddress = (index: number) => {
    setAddressList((prevAddresses) => prevAddresses.filter((_, i) => i !== index));
  }

  return (
    <div>
      <Stack  direction="row" justifyContent={'space-between'}>
        <p>Endereços</p>
        <SimpleBackdrop onSaveAddress={handleSaveAddress}/>
      </Stack>
      <AddressList addresses={addressList} onRemoveAddress={handleRemoveAddress}/>
    </div>
  );
};
