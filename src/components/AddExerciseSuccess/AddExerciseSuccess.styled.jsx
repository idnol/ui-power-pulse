import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../../vars';

export const Wrapper = styled.div`
  padding: 48px 89px;
  max-width: 335px;

  @media (min-width: ${theme.breakpoint.md}) {
    padding: 64px 134px;
    max-width: 430px;
  }
`;

export const ModalClBtn = styled.button`
  position: absolute;

  width: 22px;
  height: 22px;
  top: 14px;
  right: 14px;
  stroke: ${theme.color.white};
  fill: transparent;
  &:hover {
    stroke: ${theme.color.orangeSecond};
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 26px;
    height: 26px;
    top: 16px;
    right: 16px;
  }

  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;



export const ModalSvg = styled.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${theme.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`;

export const SuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleSuccess = styled.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 27px;
  color: ${theme.color.white};
  @media (min-width: ${theme.breakpoint.md}) {
    margin-top: 32px;
  }
`;

export const Counts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px 8px;
`;

export const TimeText = styled.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 0;
  color: ${theme.color.white};
  opacity: 0.4;
`;

export const CaloriesText = styled.p`
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 24px;
  color: ${theme.color.white};
  opacity: 0.4;
  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 32px;
  }
`;

export const ValueMin = styled.p`
  color: ${theme.color.orange};
  margin-top: 16px;
  margin-bottom: 0;
  font-size: 14px;
`;

export const ValueClr = styled.p`
  color: ${theme.color.orange};
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 14px;
  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 32px;
  }
`;

export const BtnSuccess = styled.button`
  min-width: 162px;
  padding: 12px 32px;
  border-radius: 12px;
  border: none;
  background-color: ${theme.color.orange};
  color: ${theme.color.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${theme.color.orangeSecond};
  }
  @media (min-width: ${theme.breakpoint.md}) {
    padding: 14px 32px;
  }
`;



export const ModalSvgArrow = styled.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${theme.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 8px;
  stroke: ${theme.color.grey};
  font-size: 14px;
  

  fill: transparent;

  color: ${theme.color.grey};
  &:hover{
    color: ${theme.color.white};
    stroke: ${theme.color.white}
   
  }
`;

export const TextLink = styled.p`
  margin: 0;
  text-align: center;
  font-size: 14px;
`;
