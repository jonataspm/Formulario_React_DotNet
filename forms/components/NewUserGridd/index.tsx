import { Button, Grid, TextField } from '@mui/material';
import BasicSelect from '../select';
import React, { useEffect, useState } from 'react';
import FormattedInputs from '../inputFormated';
import styles from '../../styles/NewUser.module.css'
import UseViaCep from '../../pages/api/viaCep';


export const NewUserGrid = () => {
  const personType = ['Pessoa Física', 'Pessoa Jurídica'];
  const [selectedPersonType, setSelectedPersonType] = useState<string | null>(null);
  const [hasType, setHasType] = useState(false);
  const [maskType, setMaskType] = useState<string>('');

  const handlePersonTypeChange = (selectedValue: string) => {
    setSelectedPersonType(selectedValue);
  };

  useEffect(() => {
    setHasType(selectedPersonType == null);
  }, [selectedPersonType]);

  useEffect(() => {
    setMaskType(selectedPersonType == 'Pessoa Física' ? '000.000.000-00' : '00.000.000/0000-00');
  }, [selectedPersonType]);

  return (
    <div>
      <Grid container spacing={3} marginBottom={2.5}>
        <Grid item xs={4}>
          <BasicSelect label='Tipo de pessoa*' valuesOptions={personType} onChange={handlePersonTypeChange} />
        </Grid>
        <Grid item xs={4}>
          <TextField className="btnNewUserGrid" label="Nome*" variant="outlined" disabled={hasType} style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={4}>
          <FormattedInputs mask={maskType} label='CPF/CNPJ*' disabled={hasType} />
        </Grid>
        <Grid item xs={4}>
          <FormattedInputs mask='(00) 9 0000-0000' label='Telefone'></FormattedInputs>
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </div>
  );
};

export const NewAddressGrid = ({ onSaveAddress }: { onSaveAddress: (newAddress: any) => void }) => {
  const addressType = ['Residencial', 'Comercial'];
  const [selectedPersonType, setSelectedPersonType] = useState<string | null>(null);
  const [cep, setCep] = useState<any>('');
  const [show, setShow] = useState<any>('');
  const [numero, setNumero] = useState<string>('');
  const [complemento, setComplemento] = useState<string>('');
  const [address, setAddress] = useState<any>({
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
  });


  const handlePersonTypeChange = (selectedValue: string) => {
    setSelectedPersonType(selectedValue);
  };

  const handleCepChange = (event: any) => {
    if(event.length === 9){
      setShow(true)
      setCep(event);

    }
    else
      setShow(false)
  };

  useEffect(() => {
    if (cep.length === 9) {
      const cepFormatted= cep.replace('-', '');
      fetch(`https://viacep.com.br/ws/${cepFormatted}/json/`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setAddress(data);
        })
        .catch((error) => {
          console.log(error);
          setAddress({
            logradouro: '',
            bairro: '',
            localidade: '',
            uf: '',
          });
        });
    }
  }, [cep]);

  const handleSave = () => {
    const newAddress = {
      tipoEndereco: selectedPersonType,
      cep: cep,
      logradouro: address.logradouro,
      numero: numero, // Add the value of the 'Número' field here
      complemento: complemento, // Add the value of the 'Complemento' field here
      bairro: address.bairro,
      cidade: address.localidade,
      uf: address.uf,
    };

    onSaveAddress(newAddress);
  };

  return (
    <div>
      <Grid container spacing={3} marginBottom={2} alignItems={'center'}>
        <Grid item xs={4}>
          <BasicSelect label='Tipo de Endereço*' valuesOptions={addressType} onChange={handlePersonTypeChange} />
        </Grid>
        <Grid item xs={4}>
          <FormattedInputs mask='00000-000' label='Cep'onChanger={handleCepChange} value={show?cep:""}></FormattedInputs>
        </Grid>
        <p>não sabe?</p>
      </Grid>
      <Grid container spacing={1} marginBottom={3} direction="column" >
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="Endereço" variant="outlined" style={{ width: '100%' }} value={show?address.logradouro:""}/>
        </Grid>
      
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="Número" variant="outlined" style={{ width: '100%' }} onChange={(e) => setNumero(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="Complemento" variant="outlined" style={{ width: '100%' }} onChange={(e) => setComplemento(e.target.value)}/>
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="Bairro" variant="outlined" style={{ width: '100%' }} value={show?address.bairro:""}/>
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="Cidade" variant="outlined" style={{ width: '100%' }} value={show?address.localidade:""}/>
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="UF" variant="outlined" style={{ width: '100%' }} value={show?address.uf:""}/>
        </Grid>
      </Grid>

      <Button variant="contained" size="large" className={styles.saveButtonAddress} onClick={handleSave}>
        Salvar
      </Button>
    </div>
  );
};



