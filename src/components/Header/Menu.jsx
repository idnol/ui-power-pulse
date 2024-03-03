import {
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
import { LogOut } from '../parts/LogOut/LogOut.jsx';

export const Menu = () => {
  const onCloseMenu = () => {
    const menu = document.getElementById('menu-wrapper');
    const backdrop = document.getElementById('backdrop');
    !backdrop.style.left || backdrop.style.left === '-100%'
      ? (backdrop.style.left = '0')
      : (backdrop.style.left = '-100%');
    menu.style.visibility = 'hidden';
    menu.style.opacity = 0;
    menu.style.display = 'none';
  };
  return (
    <div
      id="menu-wrapper"
      style={{
        opacity: 0,
        visibility: 'hidden',
        display: 'none',
      }}
    >
      <Backdrop id="backdrop">
        <CloseButton id="close-btn" onClick={onCloseMenu}>
          <CloseIcon>
            <use href={`${sprite}#x-modal`} />
          </CloseIcon>
        </CloseButton>

        <MenuUserNav>
          <MenuList>
            <li width="111" height="38">
              <MenuUserLink to={'/diary'} onClick={onCloseMenu}>
                Diary
              </MenuUserLink>
            </li>
            <li width="111" height="38">
              <MenuUserLink to={'/products'} onClick={onCloseMenu}>
                Products
              </MenuUserLink>
            </li>
            <li width="111" height="38">
              <MenuUserLink to={'/exercises'} onClick={onCloseMenu}>
                Exercises
              </MenuUserLink>
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
  );
};

export default Menu;
