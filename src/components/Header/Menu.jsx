import {
  Backdrop,
  CloseButton,
  CloseIcon,
  MenuUserNav,
  MenuList,
  MenuUserLink,
  LogOutWrapper,
} from './Header.styled.jsx';
import sprite from 'assets/sprite-2.svg';
import { theme } from '../../vars.js';
import { LogOut } from '../parts/LogOut/LogOut.jsx';
import { closeMenu } from './closeMenu.js';

export const Menu = () => {
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
        <CloseButton id="close-btn" onClick={closeMenu}>
          <CloseIcon>
            <use href={`${sprite}#x-modal`} />
          </CloseIcon>
        </CloseButton>

        <MenuUserNav>
          <MenuList>
            <li width="111" height="38">
              <MenuUserLink to={'/diary'} onClick={closeMenu}>
                Diary
              </MenuUserLink>
            </li>
            <li width="111" height="38">
              <MenuUserLink to={'/products'} onClick={closeMenu}>
                Products
              </MenuUserLink>
            </li>
            <li width="111" height="38">
              <MenuUserLink to={'/exercises'} onClick={closeMenu}>
                Exercises
              </MenuUserLink>
            </li>
          </MenuList>
        </MenuUserNav>

        <LogOutWrapper>
          <LogOut
            color={theme.color.white}
            stroke={`${theme.color.white}`}
          />
        </LogOutWrapper>
      </Backdrop>
    </div>
  );
};
