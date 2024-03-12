import styled from 'styled-components';
import { theme } from '../../vars.js';
import { NavLink } from 'react-router-dom';

export const BoxDayDiary = styled.div`
  border: ${theme.border.grey2};
  border-radius: 12px;
  padding: 16px 8px 16px 16px;
  background: ${theme.color.greySeven};
  //margin: 40px auto 40px auto;
  max-width: 335px;
  width: 335px;
  min-height: 335px;
  max-height: 824px;
  overflow: hidden;

   @media (max-width: 375px) {
    min-width: 300px;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    //margin: 32px auto 32px auto;
    max-width: 704px;
    min-height: 234px;
    max-height: 234px;
    width: 704px;
  }

  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 826px;
    width: 826px;
  }
`;

export const WrapperAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;

  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${theme.color.greyThird};
`;

export const StyledAddNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${theme.color.orange};
  stroke: ${theme.color.orange};
  transition-duration: 300ms;

  &:hover {
    stroke: ${theme.color.white};
    color: ${theme.color.white};
    transition-duration: 300ms;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const SvgArrow = styled.svg`
  width: 16px;
  height: 16px;
`;

export const TextNoFound = styled.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${theme.color.grey};
  text-align: center;

  @media (min-width: ${theme.breakpoint.md}) {
    margin-top: 65px;
  }
`;
