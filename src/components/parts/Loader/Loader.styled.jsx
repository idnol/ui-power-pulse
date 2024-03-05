import styled from 'styled-components';
import { theme } from '../../../vars';
import { keyframes } from 'styled-components'

export const Preloader = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.color.black};
  z-index: 9999;
  opacity: 1;
  visibility: visible;
  transition:
  opacity 0.5s ease,
  visibility 0.5s ease;

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 8px solid ${theme.color.grey};
  border-top-color: ${theme.color.orange};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${Spin} 1s ease-in-out infinite;
`;