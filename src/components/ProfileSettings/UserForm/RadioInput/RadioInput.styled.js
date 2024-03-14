import styled from 'styled-components';
import { theme } from '../../../../vars'
import { Field } from 'formik';


export const LabelFlex = styled.label`
display: flex;
align-items:center;
gap:5px;

font-weight: 400;
font-size: 14px;
line-height: 129%;
color: var(--white);
height: 36px;
`

export const FormRadio = styled(Field)`
background: transparent;
position: relative;
appearance: none;
min-width: 20px;
  min-height: 20px;
  border: 2px solid #636366; 
  border-radius: 50%;
  outline: none;

  &:checked {
    box-shadow: 0 0 0 4px black;
    border:1.5px solid ${theme.color.orange};
    
    &::before {
      content: '';
      width: 10px;
      height: 10px;
      background-color: ${theme.color.orange};
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    } 
  }

`