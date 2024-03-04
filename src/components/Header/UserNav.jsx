import { StyledUserNav, StyledNavLink } from './Header.styled.jsx';

export const UserNav = () => {
  return (
    <StyledUserNav>
      <StyledNavLink to={'/diary'}>Diary</StyledNavLink>
      <StyledNavLink to={'/products'}>Products</StyledNavLink>
      <StyledNavLink to={'/exercises'}>Exercises</StyledNavLink>
    </StyledUserNav>
  );
};
