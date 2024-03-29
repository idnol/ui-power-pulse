import styled from 'styled-components';
import { theme } from '../../vars';

export const StatsItem = styled.li`
  color: ${theme.color.greyFifth};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  margin-right: 16px;
  display: flex;
  gap: 4px;
  &:last-child {
    margin-right: 0;
  }
`;

export const StatsSpan = styled.span`
  color: ${theme.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
 display: block;
 max-width: 76px;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
`;
