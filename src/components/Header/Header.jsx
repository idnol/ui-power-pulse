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
  MenuList,
  MenuUserLink,
  LogOutWrapper,
} from './Header.styled.jsx';
import sprite from '/public/img/sprait.svg';
import { theme } from '../../vars.js';
import { UserNav } from './UserNav.jsx';
import { UserBar } from './UserBar.jsx';
import { LogOut } from '../parts/LogOut/LogOut.jsx';

export const Header = () => {
  const onCloseMenu = () => {
    const menu = document.getElementById('menu-wrapper');
    const backdrop = document.getElementById('backdrop')
    !(backdrop.style.left) || backdrop.style.left === '-100%'? backdrop.style.left = '0': backdrop.style.left= '-100%';
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
        <Backdrop id='backdrop'>
          <CloseButton id="close-btn" onClick={onCloseMenu}>
            <CloseIcon>
              <use href={`${sprite}#x-modal`} />
            </CloseIcon>
          </CloseButton>

          <MenuUserNav>
            <MenuList>
              <li width="111" height="38">
                <MenuUserLink to={'/diary'}>Diary</MenuUserLink>
              </li>
              {/* <li     width= '111' height= '38' */}
              <li width="111" height="38">
                <MenuUserLink to={'/products'}>Products</MenuUserLink>
              </li>
              <li width="111" height="38">
                <MenuUserLink to={'/exercises'}>Exercises</MenuUserLink>
              </li>
            </MenuList>
          </MenuUserNav>
          
          <LogOutWrapper>
            <LogOut
              color={theme.color.white}
              hovercolor={theme.color.white}
              stroke={theme.color.white}
            />
          </LogOutWrapper>
        </Backdrop>
      </div>
    </>
  );
};
