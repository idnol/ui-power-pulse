import {
  LinkWrapper,
  StyledUserBar,
  User,
  SettingsIcon,
  BurgerIcon,
  UserIcon,
  LogOutWrapDesktop,
} from './Header.styled.jsx';
import sprite from '/public/img/sprait.svg';
import { theme } from '../../vars.js';
import { LogOut } from '../parts/LogOut/LogOut.jsx';

export const UserBar = () => {
  const handleClick = () => {
    const menu = document.getElementById('menu-wrapper');
    menu.style.visibility = 'visible';
    menu.style.opacity = 1;
    menu.style.display = 'block';
  };
  return (
    <>
      <StyledUserBar>
        <LinkWrapper to={'/profile'}>
          <SettingsIcon
            width={24}
            height={24}
            stroke={theme.color.white}
            fill="none"
          >
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
      </StyledUserBar>
    </>
  );
};
