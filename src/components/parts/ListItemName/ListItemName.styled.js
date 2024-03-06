import styled from 'styled-components';
import { theme } from '../../../vars';

export const NameContainer = styled.div`
  display: flex;
  gap: 16px;

  margin-bottom: 8px;
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Name = styled.p`
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
