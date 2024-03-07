import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../vars.js';

export const Container = styled.div`
  position: relative;
  margin-right: 72px;
  //height: 202px;

  // @media (min-width: ${theme.breakpoint.md}) {
  //   height: 354px;
  //  }
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const MainTitle = styled.h1`
  //margin-top: 127px;
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 38px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  width: 335px;

  @media (min-width: ${theme.breakpoint.md}) {
    //margin-top: 189px;
    font-size: 70px;
    line-height: 1.11;
    width: 598px;
  }

  @media (min-width: ${theme.breakpoint.xl}) {
    //margin-top: 200px;
  }
`;

export const WrapperNavLink = styled.nav`
  display: flex;
  gap: 14px;
  margin-top: 40px;
  width: 274px;
  height: 42px;
  text-align: center;

  @media (min-width: ${theme.breakpoint.md}) {
    gap: 20px;
    margin-top: 64px;
    width: 392px;
    height: 56px;
  }
`;

export const StyledSignUpNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 136px;
  height: 42px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  border: 1px solid transparent;
  background: ${theme.color.orange};
  color: ${theme.color.white};
  transition-duration: 300ms;

  &:hover {
    background: transparent;
    border: 1px solid rgba(239, 237, 232, 0.3);
    //box-shadow: 0px 2px 5px 1px #b7b7b7;
    transition-duration: 300ms;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 190px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const StyledSignInNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  width: 136px;
  height: 42px;
  color: ${theme.color.white};
  transition-duration: 300ms;

  &:hover {
    background: ${theme.color.orange};
    border: 1px solid transparent;
    //box-shadow: 0px 2px 5px 1px #b7b7b7;
    transition-duration: 300ms;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 190px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const SvgLine = styled.svg`
  position: absolute;
  top: 43px;
  left: -8px;
  width: 98px;
  height: 35px;
  stroke: ${theme.color.orange};

  @media (min-width: ${theme.breakpoint.md}) {
    top: 85px;
    left: -17px;
    width: 185px;
    height: 67px;
  }
`;
