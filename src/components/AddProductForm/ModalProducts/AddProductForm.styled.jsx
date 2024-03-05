import styled from 'styled-components';
import { theme } from '../../../vars';

export const Wrapper = styled.div`
  padding: 48px 24px;
  max-width: 335px;

  @media (min-width: ${theme.breakpoint.md}) {
    padding: 48px 32px;
    max-width: 479px;
  }
`;
export const ModalCloseBtn = styled.button`
  position: absolute;

  width: 22px;
  height: 22px;
  top: 14px;
  right: 14px;

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

export const Icon = styled.use`
  stroke: ${theme.color.white};
  fill: transparent;
  &:hover {
    stroke: ${theme.color.orangeSecond};
  }
`;

export const ModalSvg = styled.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${theme.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`;
