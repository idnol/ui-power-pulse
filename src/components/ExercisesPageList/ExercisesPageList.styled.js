import styled from 'styled-components';
import { theme } from '../../vars';

export const ExercisesListContainer = styled.div`
  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 850px;
    max-height: 487px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${theme.color.greySixth};
      border-radius: 12px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.color.orange};
      border-radius: 12px;
      height: 153px;
    }
  }
`;

export const ExercisesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 335px));
  justify-content: center;
  grid-row-gap: 20px;

  max-width: 335px;

  margin: 0 auto;

  @media (min-width: ${theme.breakpoint.md}) {
    grid-row-gap: 32px;
    grid-column-gap: 16px;

    max-width: 700px;
  }

  @media (min-width: ${theme.breakpoint.xl}) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 405px));
    max-width: 826px;
  }
`;

export const ExercisesListItem = styled.li`
  position: relative;

  padding: 18px 16px 16px 16px;

  max-width: 335px;
  width: 100%;

  border-radius: 12px;
  border: ${theme.border.grey2};
  background: rgba(239, 237, 232, 0.05);

  @media (min-width: ${theme.breakpoint.md}) {
  }

  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 405px;
  }
`;

export const ExercisesItemTitle = styled.p`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  margin-bottom: 33px;

  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 25px;
  }
`;

export const WorkoutNameContainer = styled.div`
  display: flex;
  gap: 16px;

  margin-bottom: 8px;
`;

export const WorkoutNameIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const WorkoutName = styled.p`
  color: ${theme.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */

  max-width: 240px;

  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const WorkoutStatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const WorkoutStatsItem = styled.li`
  color: ${theme.color.greyFifth};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */

  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

export const WorkoutStatsSpan = styled.span`
  color: ${theme.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const ExercisesButton = styled.button`
  position: absolute;
  top: 18px;
  right: 16px;

  background: none;
  border: none;

  cursor: pointer;
`;

export const ExercisesButtonIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${theme.color.orange};
`;

export const ExercisesButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ExercisesButtonText = styled.p`
  color: ${theme.color.orange};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 16px;
    line-height: 24px;
  }
`;
