import sprite from '/public/img/sprait.svg';
import { LogOutLink, LogOutIcon } from './LogOut.styled';
import { theme } from '/src/vars.js';
import { closeMenu } from '../../Header/closeMenu';

export const LogOut = ({color = theme.color.white, hovercolor=`none`, stroke = theme.color.white}) => {
  return (
    <LogOutLink color={color} hovercolor={hovercolor} to={'/'} onClick={closeMenu}>
      <span>Logout</span>
      <LogOutIcon stroke={stroke}>
        <use href={`${sprite}#log-out`}/>
      </LogOutIcon>
    </LogOutLink>
  );
};