import {
  Backdrop,
  CloseButton,
  CloseIcon,
  MenuUserNav,
  MenuList,
  MenuUserLink,
  LogOutWrapper,
  MenuItem,
} from './Header.styled.jsx';
import sprite from 'assets/sprite-2.svg';
import { theme } from '../../vars.js';
import { LogOut } from '../parts/LogOut/LogOut.jsx';
import { closeMenu } from './closeMenu.js';



export const Menu = () => {
  
  return (
    <div id="menu-wrapper">
      <Backdrop id="backdrop" >
        <CloseButton id="close-btn" onClick={closeMenu}>
          <CloseIcon>
            <use href={`${sprite}#x-modal`} />
          </CloseIcon>
        </CloseButton>

        <MenuUserNav>
          <MenuList>
            <MenuItem>
              <MenuUserLink to={'/diary'} onClick={closeMenu}>
                Diary
              </MenuUserLink>
            </MenuItem>
            <MenuItem>
              <MenuUserLink to={'/products'} onClick={closeMenu}>
                Products
              </MenuUserLink>
            </MenuItem>
            <MenuItem>
              <MenuUserLink to={'/exercises'} onClick={closeMenu}>
                Exercises
              </MenuUserLink>
            </MenuItem>
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
