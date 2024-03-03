import styled from 'styled-components';
import { theme } from '../../../vars';
// import { keyframes } from 'styled-components'

export const Preloader = styled.div`
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
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 8px solid ${theme.color.grey};
  border-top-color: ${theme.color.orange};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s ease-in-out infinite;
`;
