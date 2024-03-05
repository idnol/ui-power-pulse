import { Outlet } from 'react-router-dom';
import { AppLayoutStyled, HeaderStyled } from './AppLayout.styled';
import { Suspense } from 'react';
import { GlobalStyle } from '../../GlobalSyles.js';
import { Header } from '../Header/Header.jsx';
import { AddExerciseForm } from '../AddExerciseForm/AddExerciseForm.jsx';


export const AppLayout = () => {
  return (
    <AppLayoutStyled>
      <GlobalStyle />
      <HeaderStyled>
        <div className='container'>
          <Header />
        </div>
      </HeaderStyled>
      <main>
        <div className='container'>

          <AddExerciseForm />
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </AppLayoutStyled>
  )
}
