import styled from 'styled-components';
import { theme } from '../../../vars';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;

  transform: translate(-50%, -50%);
  background-color: #10100f;
  border-radius: 12px;
  border: none;

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
