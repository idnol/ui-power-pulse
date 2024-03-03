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
  display: flex;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  transition: 1s linear

  :hover {
    color: ${theme.color.orange};
  }
`;

export const NavigationWrap = styled.div`
  display: flex;
  gap: 32px;
`;

export const UserNav = styled.nav`
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
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: inherit;
  border-radius: 12px;
  padding: 10px 27px;
  width: 119px;
  height: 44px;
  text-align: center;
  cursor: pointer;
  color: ${theme.color.white};

  &:hover {
    border: ${theme.color.orange};
    background-color: ${theme.color.orange};
  }
  &.active {
    border: ${theme.color.orange};
    background-color: ${theme.color.orange};
  }
`;

export const UserBar = styled.div`
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
  cursor: pointer;
`;

export const UserIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${theme.color.grey};
`;

export const LogoText = styled.span`
  margin-left: 3px;
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size?.width || '32px'};
  height: ${(props) => props.size?.height || '32px'};
  stroke: ${(props) => props.color || 'none'};
  display: inline-block;
`;

export const SettingsIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${theme.color.grey};
  cursor: pointer;
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
