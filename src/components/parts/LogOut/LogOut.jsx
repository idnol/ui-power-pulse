import sprite from 'assets/sprite-2.svg';
import { LogOutLink, LogOutIcon } from './LogOut.styled';
import { theme } from '/src/vars.js';
import { closeMenu } from '../../Header/closeMenu';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/api.js';


export const LogOut = ({color = theme.color.white, hovercolor=`none`, stroke = theme.color.orange}) => {
  const dispatch = useDispatch()
  const logoutFoo = ()=>{
    dispatch(logout())
  }
  return (
    <LogOutLink color={color} hovercolor={hovercolor} to={'/'} onClick={logoutFoo}>
      <span>Logout</span>
      <LogOutIcon stroke={stroke}> 
        <use href={`${sprite}#log-out`}/>
      </LogOutIcon>
    </LogOutLink>
  );
};