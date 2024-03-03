import {
  HeaderContainer,
  LinkWrapper,
  UserBar,
  StyledLink,
  User,
  UserNav,
  StyledNavLink,
  NavigationWrap,
  IconWrapper,
  LogoText,
  SettingsIcon,
  BurgerIcon,
  UserIcon,
  LogOutWrapDesktop,
} from './Header.styled.jsx';
import sprite from '/public/img/sprait.svg';
import { theme } from '../../vars.js';
import { LogOut } from '../parts/LogOut/LogOut.jsx';


export const Header = () => {
  const handleClick = (e) => {
    console.dir(e.target)
  }

  return (
    <HeaderContainer>
      <StyledLink to="/profile">
        <IconWrapper
          fill={theme.color.orange}
          size={{ width: '40px', height: '16px' }}
        >
          <use href={`${sprite}#logo`} />
        </IconWrapper>
        <LogoText>PowerPulse</LogoText>
      </StyledLink>

      <NavigationWrap>
        <UserNav>
          <StyledNavLink to={'/diary'}>Diary</StyledNavLink>
          <StyledNavLink to={'/products'}>Products</StyledNavLink>
          <StyledNavLink to={'/exercises'}>Exercises</StyledNavLink>
        </UserNav>

        <UserBar>
          <LinkWrapper to={'/profile'}>
            <SettingsIcon
              width={24}
              height={24}
              stroke={theme.color.white}
              fill="none">
              <use href={`${sprite}#settings`} />
            </SettingsIcon>
            <User>
              <UserIcon>
                <use href={`${sprite}#avatar-header`} />
              </UserIcon>
            </User>
          </LinkWrapper>
            <BurgerIcon onClick={handleClick}>
              <use href={`${sprite}#burger-menu`} />
            </BurgerIcon>
          <LogOutWrapDesktop>
            <LogOut />
          </LogOutWrapDesktop>
        </UserBar>
      </NavigationWrap>
    </HeaderContainer>
  );
};
