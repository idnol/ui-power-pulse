import {
  HeaderContainer,
  StyledLink,
  NavigationWrap,
  IconWrapper,
  LogoText,
  Backdrop,
  CloseButton,
  CloseIcon,
  MenuUserNav,
  MenuUserLink,
} from './Header.styled.jsx';
import sprite from '/public/img/sprait.svg';
import { theme } from '../../vars.js';
import { UserNav } from './UserNav.jsx';
import { UserBar } from './UserBar.jsx';
import { LogOut } from '../parts/LogOut/LogOut.jsx';

export const Header = () => {
  const onCloseMenu = () => {
    const menu = document.getElementById('menu-wrapper');
    menu.style.visibility = 'hidden';
    menu.style.opacity = 0;
    menu.style.display = 'none';
  };
  return (
    <>
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

      <div
        id="menu-wrapper"
        style={{
          opacity: 0,
          visibility: 'hidden',
          display: 'none',
        }}
      >
        <Backdrop>
            <CloseButton id="close-btn" onClick={onCloseMenu}>
              <CloseIcon>
                <use href={`${sprite}#x-modal`} />
              </CloseIcon>
            </CloseButton>
            <MenuUserNav>
              <MenuUserLink to={'/diary'}>Diary</MenuUserLink>
              <MenuUserLink to={'/products'}>Products</MenuUserLink>
              <MenuUserLink to={'/exercises'}>Exercises</MenuUserLink>
            </MenuUserNav>
          <div>
          <LogOut
              color={theme.color.white}
              hovercolor={theme.color.white}
              stroke={theme.color.white}
            />
          </div>
        </Backdrop>
      </div>
    </>
  );
};
