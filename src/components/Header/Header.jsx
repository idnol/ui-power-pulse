import {
  HeaderContainer,
  StyledLink,
  NavigationWrap,
  IconWrapper,
  LogoText,
} from './Header.styled.jsx';
import sprite from '/public/img/sprait.svg';
import { theme } from '../../vars.js';
import { UserNav } from './UserNav.jsx';
import { UserBar } from './UserBar.jsx';
import{Menu} from './Menu.jsx'
// import Loader from '../parts/Loader/Loader.jsx';

export const Header = () => {
  return (
    <>
      {/* <Loader/> */}
      <HeaderContainer>
        <StyledLink to="/profile">
          <IconWrapper
            fill={theme.color.orange}
            size={{ width: '40px', height: '24px' }}
            stroke={theme.color.white}
          >
            <use href={`${sprite}#logo`} />
          </IconWrapper>
          <LogoText>PowerPulse</LogoText>
        </StyledLink>

        <NavigationWrap>
          <UserNav />
          <UserBar />
        </NavigationWrap>
      </HeaderContainer>
      <Menu/>

    </>
  );
};
