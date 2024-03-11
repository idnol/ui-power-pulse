import styled from 'styled-components';
import { theme } from '../../../vars';

export const ExercisesContainer = styled.div`
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    max-width: 100%;
    display: flex;
    align-items: baseline;
  }
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  margin-bottom: 12px;
`;

export const ButtonIcon = styled.svg`
  width: 12px;
  height: 12px;
`;

export const ExercisesTitle = styled.h2`
  font-size: 24px;
  line-height: 1.16;
  max-width: 200px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: baseline;
    max-width: 200px;
    line-height: 1, 375;
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

  @media (min-width: 768px) {
    gap: 32px;
    margin-left: auto;
    width: 279px;
    height: 32px;
    margin-bottom: 0px;
  }
`;

export const ExercisesLi = styled.li`
  line-height: 1, 285;
  font-size: 14px;

  @media (min-width: 768px) {
    line-height: 1.5;
    height: 24px;
    font-size: 16px;
  }
`;

export const StyledSpanCategories = styled.span`
  text-decoration: none;
  position: relative;
  color: rgba(239, 237, 232, 0.4);
  &.active {
    color: #efede8;
    &:after {
      content: '';
      position: absolute;
      bottom: -9px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 4px;
      background-color: #ef8964;
      border-radius: 2px;
    }
  }
`;
