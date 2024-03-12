import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../vars';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 61px;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  @media (min-width: ${theme.breakpoint.md}) {
    height: 84px;
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  width: 152px;
  height: 17px;
`;

export const StyledSvg = styled.svg`
  width: 126px;
  height: 13px;
  @media (min-width: ${theme.breakpoint.md}) {
    width: 152px;
    height: 17px;
  }
`;

export const NavigationWrap = styled.div`
  display: flex;
  gap: 32px;
`;

export const StyledUserNav = styled.nav`
  opacity: 0;
  visibility: hidden;
  display: none;

  @media (min-width: ${theme.breakpoint.xl}) {
    opacity: 1;
    visibility: visible;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  border: ${theme.border.grey2};
  background-color: inherit;
  border-radius: 12px;
  padding: 12px 27px;
  text-align: center;
  cursor: pointer;
  color: ${theme.color.white};

  &:hover {
    border: ${theme.border.orange};
    background-color: ${theme.color.orange};
  }
  &.active {
    border: ${theme.color.orange};
    background-color: ${theme.color.orange};
  }
`;

export const SettingsIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${theme.color.grey};
  cursor: pointer;
`;

export const StyledUserBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid ${theme.color.orange};
  overflow: hidden;
`;

export const UserAvatar = styled.img`
  width: 37px;
  height: 37px;
  object-fit: cover;
`;

export const UserIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${theme.color.grey};
`;

export const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
`;

export const BurgerIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${theme.color.orange};
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  display: block;
  @media (min-width: ${theme.breakpoint.xl}) {
    opacity: 0;
    visibility: hidden;
    display: none;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 5;
  width: 200px;
  height: 100vh;
  transition: left 0.5s ease-in-out;
  background-color: ${theme.color.orange};

  @media (min-width: ${theme.breakpoint.md}) {
    width: 350px;
  }
`;

export const LogOutWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const LogOutWrapDesktop = styled.div`
  opacity: 0;
  visibility: hidden;
  display: none;

  @media (min-width: ${theme.breakpoint.xl}) {
    opacity: 1;
    visibility: visible;
    display: block;
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${theme.color.white};
  display: inline-block;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  cursor: pointer;
  background-color: inherit;
  border: none;
`;

export const MenuUserNav = styled.nav`
  width: fit-content;
  text-align: center;
  position: absolute;
  top: 245px;
  left: 43px;

  @media (min-width: ${theme.breakpoint.md}) {
    top: 200px;
    left: 115px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const MenuItem = styled.li`
  width: 111px;
  height: 38px;

  @media (min-width: ${theme.breakpoint.md}) {
    width: 119px;
    height: 44px;
  }
`;

export const MenuUserLink = styled(NavLink)`
  display: block;
  border: ${theme.border.grey2};
  border-radius: 12px;
  padding: 10px 20px;
  color: ${theme.color.white};
  transition: 0.5s;

  &:hover {
    border: 1px solid ${theme.border.white};
    transform: scaleX(0.9);
  }
`;
