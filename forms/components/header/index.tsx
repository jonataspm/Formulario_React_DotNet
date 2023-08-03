import { NavBarDiv } from './style'
export const Header = () => {

  return (
    <NavBarDiv>
      <img
        className='logotipo'
        style={{ cursor: 'pointer' }}
        src='./paulo.png'
        alt='logo'
        onClick={() => {
        }}
      />
    </NavBarDiv>
  )
}
