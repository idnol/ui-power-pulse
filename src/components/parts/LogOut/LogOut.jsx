import sprite from 'assets/sprite-2.svg';
import { LogOutLink, LogOutIcon } from './LogOut.styled';
import { theme } from '/src/vars.js';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/api.js';


export const LogOut = ({color = theme.color.white, hovercolor=`none`, stroke = theme.color.orange}) => {
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(logout())
  }
  return (
    <LogOutLink color={color} hovercolor={hovercolor} to={'/'} onClick={handleLogout}>
      <span>Logout</span>
      <LogOutIcon stroke={stroke}> 
        <use href={`${sprite}#log-out`}/>
      </LogOutIcon>
    </LogOutLink>
  );
};