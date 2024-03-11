import styled from 'styled-components';
import { theme } from '../../vars';

export const Row = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  padding-top: 71px;
  width: 100%;
  @media (min-width: ${theme.breakpoint.md}) {
    padding-top: 116px;
    }
`;

export const SliderWrapper = styled.div`
  position: relative;
`;
