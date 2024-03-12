import styled from 'styled-components';
import { theme } from '../../../vars';

export const ExercisesContainer = styled.div`
  
`

export const SupportContainerExercise = styled.div`
  max-width: 335px;
  margin-right: auto;

  @media (min-width: ${theme.breakpoint.md}) {
    max-width: 100%;
    display: flex;
    align-items: baseline;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  background-color: transparent;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${theme.color.greyFifth};
  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 16px;
  }
`;

export const ButtonIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;
export const ButtonText = styled.span`
  font-size: 14px;
  line-height: 1.285;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.33;
  }
`;

export const ExercisesTitle = styled.h2`
  font-size: 24px;
  line-height: 1.16;
  max-width: 200px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media (min-width: ${theme.breakpoint.md}) {
    display: flex;
    justify-content: baseline;
    max-width: 200px;
    line-height: 1.375;
    font-size: 32px;
    margin-bottom: 64px;
  }
`;

export const ExercisesUl = styled.ul`
  display: flex;
  width: 244px;
  height: 26px;
  gap: 28px;
  margin-bottom: 40px;

  @media (min-width: ${theme.breakpoint.md}) {
    gap: 32px;
    margin-left: auto;
    width: 279px;
    height: 32px;
    margin-bottom: 0px;
  }
`;

export const ExercisesLi = styled.li`
  line-height: 1.285;
  font-size: 14px;

  @media (min-width: ${theme.breakpoint.md}) {
    line-height: 1.5;
    height: 24px;
    font-size: 16px;
  }
`;

export const StyledSpanCategories = styled.span`
  text-decoration: none;
  position: relative;
  color: ${theme.color.greyFifth};
  cursor: pointer;
  &.active, &:hover {
    color: ${theme.color.white};
    &:after {
      content: '';
      position: absolute;
      bottom: -9px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 4px;
      background-color: ${theme.color.orangeSecond};
      border-radius: 2px;
    }
  }
`;