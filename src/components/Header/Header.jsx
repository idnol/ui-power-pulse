import {
  HeaderContainer,
  StyledLink,
  NavigationWrap,
} from './Header.styled.jsx';
import { UserNav } from './UserNav.jsx';
import { UserBar } from './UserBar.jsx';
import { Menu } from './Menu.jsx';
// import { Loader } from '../parts/Loader/Loader.jsx';

export const Header = () => {
  return (
    <>
      {/* <Loader /> */}
      <HeaderContainer>
        <StyledLink to="/profile"></StyledLink>
        <NavigationWrap>
          <UserNav />
          <UserBar />
        </NavigationWrap>
      </HeaderContainer>

      <Menu />
    </>
  );
};
