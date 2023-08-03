import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';

type AddressGridProps = {
  addresses: any[],
  onRemoveAddress: (value: number) => void,
};

export default function AddressList({addresses,onRemoveAddress}:AddressGridProps) {

  return (
    <List sx={{ width: '100%' }}>
      {addresses?.map((address, index) => (
        <ListItem key={index} disableGutters>
          {address.tipoEndereco === 'Residencial' ? (
            <HomeIcon style={{ marginRight: '1%' }} />
          ) : (
            <BusinessIcon style={{ marginRight: '1%' }} />
          )}

          {/* Display the address details */}
          <ListItemText primary={`${address.logradouro}, ${address.numero} ${address.complento? '-'+address.complento:""}, ${address.bairro}, ${address.cidade}, ${address.uf}`} />
          <IconButton aria-label="comment" onClick={() => onRemoveAddress(index)}>
            <CancelIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}