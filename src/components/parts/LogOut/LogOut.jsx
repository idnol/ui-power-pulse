import sprite from '/public/img/sprait.svg';
import { LogOutLink, LogOutIcon } from './LogOut.styled';
import { theme } from '/src/vars.js';

export const LogOut = ({color=`${theme.color.white}`, hovercolor=`${theme.color.orange}`, stroke =`${theme.color.orange}`}) => {
  return (
    <LogOutLink color={color} hovercolor={hovercolor} >
      <span>Logout</span>
      <LogOutIcon stroke={stroke}>
        <use href={`${sprite}#log-out`} />
      </LogOutIcon>
    </LogOutLink>
  );
};