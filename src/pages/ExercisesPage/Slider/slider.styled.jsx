import styled from 'styled-components';
import { theme } from '../../../vars';

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translateX(-50%);
  @media (min-width: ${theme.breakpoint.md}) {
    bottom: -32px;
  }
`;

export const SliderButton = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${(props) =>
    props.active ? theme.color.black : theme.color.greySixth};
  border: ${(props) => (props.active ? theme.border.orange : 'none')};
  position: relative;
  cursor: pointer;
  outline: none;
  vertical-align: middle;

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background-color: ${theme.color.orange};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`;
