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
