export const closeMenu = () => {
  const menu = document.getElementById('menu-wrapper');
  const backdrop = document.getElementById('backdrop');
  !backdrop.style.left || backdrop.style.left === '-100%'
    ? (backdrop.style.left = '0')
    : (backdrop.style.left = '-100%');
  menu.style.visibility = 'hidden';
  menu.style.opacity = 0;
  menu.style.display = 'none';
};
