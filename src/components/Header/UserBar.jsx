import {
  LinkWrapper,
  StyledUserBar,
  User,
  SettingsIcon,
  BurgerIcon,
  UserAvatar,
  UserIcon,
  LogOutWrapDesktop,
} from './Header.styled.jsx';
import sprite from 'assets/sprite-2.svg';
import { theme } from '../../vars.js';
import { LogOut } from '../parts/LogOut/LogOut.jsx';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/auth/selectors.js';
import { selectProfile } from '../../redux/profile/selectors.js';
import { closeMenu } from './closeMenu.js';
import { useEffect } from 'react';

export const UserBar = () => {
  const openSidebar = () => {
    const backdrop = document.getElementById('backdrop');
    !backdrop.style.left || backdrop.style.left === '-100%'
      ? (backdrop.style.left = '0')
      : (backdrop.style.left = '-100%');
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        closeMenu();
      }
    };
    if (openSidebar) {
      document.addEventListener('keydown', handleKeyPress);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [openSidebar, closeMenu]);
  if (!openSidebar) {
    return null;
  }

  const isLoggedIn = useSelector(selectIsAuthenticated);
  const { bodyData } = useSelector(selectProfile);

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
        </LinkWrapper>
        <User>
          {isLoggedIn && bodyData?.avatar ? (
            <UserAvatar
              src={bodyData.avatar}
              alt="Avatar"
            />
          ) : (
            <UserIcon>
              <use href={`${sprite}#avatar-header`} />
            </UserIcon>
          )}
        </User>
        <BurgerIcon onClick={openSidebar}>
          <use href={`${sprite}#burger-menu`} />
        </BurgerIcon>
        <LogOutWrapDesktop>
          <LogOut stroke={`${theme.color.orange}`} />
        </LogOutWrapDesktop>
      </StyledUserBar>
    </>
  );
};
