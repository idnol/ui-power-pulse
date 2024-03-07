import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const SliderButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: ${props => (props.active ? 'orange' : 'transparent')};
  color: ${props => (props.active ? 'white' : 'black')};
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${props => (props.active ? 'orange' : 'lightgray')};
  }
`;