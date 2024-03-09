import {
  HeaderContainer,
  StyledLink,
  NavigationWrap,
} from './Header.styled.jsx';
import { UserNav } from './UserNav.jsx';
import { UserBar } from './UserBar.jsx';
import { Menu } from './Menu.jsx';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/auth/selectors.js';

export const Header = () => {
  const { pathname } = useLocation();
  //Тимчасове рішення + додати перевірку чи залогінений юзер через useSelector
  //На ErrorPage робити перевірку логінізації для відображення навігації юзера
  const isLoggedIn = useSelector(selectIsAuthenticated);

  const isNotCustomRoute = ![
    '/',
    '/signup',
    '/signin',
    '/profile',
    '/diary',
    '/products',
    '/exercises',
  ].includes(pathname);
  // const isNotAuthenticatedUser = ['/', '/signup', '/signin'].includes(pathname);

  useEffect(() => {
    const headerLayout = document.getElementById('hdr-layout');
    if (isNotCustomRoute || !isLoggedIn) {
      headerLayout.style.borderBottom = 'none';
    }
  });

  return (
    <>
      <HeaderContainer>
        {isNotCustomRoute ? (
          <StyledLink
            to="/"
            errsm="../../assets/logo/logo-sm-white.svg"
            errbig="../../assets/logo/logo-white.svg"
          ></StyledLink>
        ) : !isLoggedIn ? (
          <StyledLink to="/"></StyledLink>
        ) : (
          <>
            <StyledLink to="/diary"></StyledLink>
            <NavigationWrap>
              <UserNav />
              <UserBar />
            </NavigationWrap>
          </>
        )}
      </HeaderContainer>

      <Menu />
    </>
  );
};
