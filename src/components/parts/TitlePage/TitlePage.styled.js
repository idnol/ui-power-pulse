import styled from 'styled-components';
import { theme } from '../../../vars';

export const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${theme.color.white};
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 32px;
    line-height: 1.37;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
  }
`;