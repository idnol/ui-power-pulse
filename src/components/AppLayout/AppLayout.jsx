import { Outlet } from 'react-router-dom';
import { AppLayoutStyled, HeaderStyled } from './AppLayout.styled';
import { GlobalStyle } from '../../GlobalSyles.js';
import { Header } from '../Header/Header.jsx';
import { closeMenu } from '../Header/closeMenu';
export const AppLayout = () => {
  return (
    <AppLayoutStyled >
      <GlobalStyle />
      <HeaderStyled id='hdr-layout' >
        <div className='container'>
          <Header />
        </div>
      </HeaderStyled>
      <main onClick={closeMenu}>
            <Outlet />
      </main>
    </AppLayoutStyled>
  )
}