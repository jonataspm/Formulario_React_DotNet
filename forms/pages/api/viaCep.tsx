// UseViaCep.tsx
import { useEffect, useState } from 'react';

type AddressData = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

const UseViaCep = (cep: string) => {
  const [addressData, setAddressData] = useState<AddressData | "">("");

  useEffect(() => {
    debugger
    if (cep.length === 9) {
      const cepWithoutHyphen = cep.replace('-', '');

      fetch(`https://viacep.com.br/ws/${cepWithoutHyphen}/json/`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setAddressData(data);
        })
        .catch((error) => {
          console.log(error);
          setAddressData("");
        });
    }
  }, [cep]);

  return addressData;
};

export default UseViaCep;
