import sprite from '/public/img/sprait.svg';
import { LogOutLink, LogOutIcon } from './LogOut.styled';

export const LogOut = () => {
  return (
    <LogOutLink>
      <span>LogOut</span>
      <LogOutIcon>
        <use href={`${sprite}#log-out`} />
      </LogOutIcon>
    </LogOutLink>
  );
};