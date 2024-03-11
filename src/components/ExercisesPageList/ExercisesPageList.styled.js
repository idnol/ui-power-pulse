import styled from 'styled-components';
import { theme } from '../../vars';

export const ExercisesListContainer = styled.div`
  @media (min-width: ${theme.breakpoint.md}) {
    overflow-y: scroll;
    max-width: 704px;
    max-height: 660px;

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
  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 850px;
    max-height: 487px;
  }
`;

export const ExercisesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-row-gap: 20px;

  margin: 0 auto;

  @media (min-width: ${theme.breakpoint.md}) {
    grid-row-gap: 32px;
    grid-column-gap: 16px;

    max-width: 704px;
  }

  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 850px;
  }
`;

export const ExercisesListItem = styled.li`
  position: relative;

  padding: 18px 16px 16px 16px;

  width: 100%;

  border-radius: 12px;
  border: ${theme.border.grey2};
  background: rgba(239, 237, 232, 0.05);

  @media (min-width: ${theme.breakpoint.md}) {
    max-width: 335px;
  }

  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 405px;
  }
`;
