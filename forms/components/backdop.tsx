import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import styles from '../styles/NewUser.module.css'
import { NewAddressGrid } from './NewUserGridd';
import AddressList from './addressList';

export const SimpleBackdrop = ({ onSaveAddress }: { onSaveAddress: (newAddress: any) => void }) => {
  const [open, setOpen] = React.useState(false);

  const handleSaveAddress = (value: any) => {
    onSaveAddress(value);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div >
      <Button variant="contained"  size='small' className={styles.button} onClick={handleOpen}>Adicionar endereço</Button>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open} 
      >
         <div className={styles.containerBackdrop}>
            <h3>Novo Endereço</h3>
            <NewAddressGrid onSaveAddress={handleSaveAddress} />
            <Button variant="text" className={styles.saveButtonAddress} onClick={handleClose}>Cancelar</Button>
         </div>
      </Backdrop>
    </div>
  );
}