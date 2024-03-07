import { Outlet } from 'react-router-dom';
import { AppLayoutStyled, HeaderStyled } from './AppLayout.styled';
import { Suspense } from 'react';
import { GlobalStyle } from '../../GlobalSyles.js';
import { Header } from '../Header/Header.jsx';

export const AppLayout = () => {
  return (
    <AppLayoutStyled>
      <GlobalStyle />
      <HeaderStyled id='hdr-layout'>
        <div className='container'>
          <Header />
        </div>
      </HeaderStyled>
      <main>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
      </main>
    </AppLayoutStyled>
  )
}