import styled from 'styled-components';
import {theme} from '../../../vars'
import { Form, Field,} from 'formik';

export const StyledFormik = styled(Form)`
    margin-top: 18px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: ${theme.breakpoint.xl}){
        margin-top: 0;
  }
`;
export const UserInfo = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction:column;
    gap:14px;

@media screen and (min-width: ${theme.breakpoint.md}) {
  flex-direction:row;
    margin-top: 40px;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
    }
    input {
        width: 335px;
    }
    @media screen and (min-width: ${theme.breakpoint.xl}){
        margin: 0;
    }
`
export const UserPersonalInfo = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    @media screen and (min-width: ${theme.breakpoint.md}){
        flex-wrap: nowrap;
    }
    input {
        width: 160px;
    @media screen and (min-width: ${theme.breakpoint.md}) and (max-width: ${theme.breakpoint.xl}) {
        width: 165px;
  }
  }
`
export const UserHealthlInfo = styled.div`
    display:flex;
    align-items:end;
    flex-wrap:wrap;
    gap:25px;
`

export const FormInput = styled(Field)`
    outline: none;
    border: 1px solid rgba(239, 237, 232, 0.3);
    background: transparent;
    border-radius: 12px;
    padding: 14px;
    height: 46px;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: ${theme.color.white};


    @media screen and (min-width: ${theme.breakpoint.md}) and (max-width: ${theme.breakpoint.xl}) {
        width: 341px;
    }

    &:disabled{
        color: ${theme.color.greySecond};

    }
    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
`;

export const FormLabel =styled.label`
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: ${theme.color.greyThird};
    margin-bottom: 5px;
    @media screen and (min-width: ${theme.breakpoint.xl}){
        font-size: 14px;
    }
`
export const  FormRadio = styled(Field)`
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

export const LabelFlex = styled.label`
    display: flex;
    align-items:center;
    gap:8px;

    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: var(--white);
    height: 36px;
    @media screen and (min-width: ${theme.breakpoint.xl}){
        font-size: 16px;
    }
`
export const RadioContainer = styled.div`
    display: flex;
    gap:8px;
`
export const ActivityLabel =styled.label`
    display: flex;
    flex-direction:column;
    gap:10px;
`
export const Button = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${theme.color.orange};
    border-radius: 12px;
    padding: 12px 40px;
    width: 115px;
    height: 42px;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    color: ${theme.color.white};
    &:disabled{
        color: ${theme.color.greySecond};
    }
`

