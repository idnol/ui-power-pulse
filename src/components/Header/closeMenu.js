import { logout } from '../../redux/auth/api.js';
import { useDispatch } from 'react-redux';


export const closeMenu = () => {
  console.log(1);
  const dispatch = useDispatch()
  console.log(4);
  const menu = document.getElementById('menu-wrapper');
  const backdrop = document.getElementById('backdrop');
  !backdrop.style.left || backdrop.style.left === '-100%'
    ? (backdrop.style.left = '0')
    : (backdrop.style.left = '-100%');
  menu.style.visibility = 'hidden';
  menu.style.opacity = 0;
  menu.style.display = 'none';
  console.log(5);
  dispatch(logout())

};
