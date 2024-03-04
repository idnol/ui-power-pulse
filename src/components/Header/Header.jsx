import {
  HeaderContainer,
  StyledLink,
  NavigationWrap,
} from './Header.styled.jsx';
import { UserNav } from './UserNav.jsx';
import { UserBar } from './UserBar.jsx';
import { Menu } from './Menu.jsx';
import { useLocation } from 'react-router';

export const Header = () => {
  const { pathname } = useLocation();
  //Тимчасове рішення + додати перевірку чи залогінений юзер через useSelector
  //На ErrorPage робити перевірку логінізації для відображення навігації юзера

  // ADD CONTAINER
  //         width: 100%;
  // padding: 0 20px;
  // margin: 0 auto;
  // @media (min-width: ${theme.breakpoint.md}) {
  //     width: ${theme.breakpoint.md};
  //     padding: 0 32px;
  // }
  // @media (min-width: ${theme.breakpoint.xl}) {
  //     width: ${theme.breakpoint.xl};
  //     padding: 0 96px;
  // }
  return (
    <>
      <HeaderContainer>
        {pathname !== '/' &&
        pathname !== '/signup' &&
        pathname !== '/signin' &&
        pathname !== '/profile' &&
        pathname !== '/diary' &&
        pathname !== '/products' &&
        pathname !== '/exercises' &&
        pathname !== '/exercises/bodyparts' &&
        pathname !== '/exercises/muscles' &&
        pathname !== '/exercises/equipment' ? (
          <StyledLink
            to="/diary"
            errSm="../../../public/img/logo/logo-sm-white.svg"
            errBig="../../../public/img/logo/logo-white.svg"
          ></StyledLink>
        ) : (
          <StyledLink to="/diary"></StyledLink>
        )}
        {pathname !== '/signin' &&
          pathname !== '/signup' &&
          pathname !== '/' &&
          pathname !== '/jh' && (
            <NavigationWrap>
              <UserNav />
              <UserBar />
            </NavigationWrap>
          )}
      </HeaderContainer>

      <Menu />
    </>
  );
};
