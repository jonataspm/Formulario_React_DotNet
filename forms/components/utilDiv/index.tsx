import { Button, Stack } from '@mui/material'
import { UtilDivContent } from './style'
import InputWithIcon from '../input'
import Link from 'next/link'

export const UtilDiv = () => {
  return (
    <UtilDivContent className='UtilDivContent'>
      
      <Stack spacing={1} direction="row">
          <InputWithIcon/>
          <Button variant="outlined" >Pesquisar</Button>
      </Stack >
      

      <Link href={"/newUser"}><Button variant="outlined">Novo Usuario</Button></Link>

    </UtilDivContent>
  )
}
