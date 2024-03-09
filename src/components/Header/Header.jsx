import {
  HeaderContainer,
  StyledLink,
  NavigationWrap,
  StyledSvg
} from './Header.styled.jsx';
import { UserNav } from './UserNav.jsx';
import { UserBar } from './UserBar.jsx';
import { Menu } from './Menu.jsx';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/auth/selectors.js';
import sprite from 'assets/logo/logo-sprite.svg';

export const Header = () => {
  const { pathname } = useLocation();
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
          <StyledLink to={`${isLoggedIn ? '/diary' : '/'}`}>
            <StyledSvg>
              <use href={`${sprite}#logo-sm-white`} />
            </StyledSvg>
          </StyledLink>
        ) : !isLoggedIn ? (
          <StyledLink to="/">
            <StyledSvg>
              <use href={`${sprite}#logo-sm`}></use>
            </StyledSvg>
          </StyledLink>
        ) : (
          <>
            <StyledLink to="/diary">
              <StyledSvg>
                <use href={`${sprite}#logo-sm`}></use>
              </StyledSvg>
            </StyledLink>
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
