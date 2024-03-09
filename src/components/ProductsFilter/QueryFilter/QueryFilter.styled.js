import styled from "styled-components";
import {theme} from "../../../vars";

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  width: 335px;
  background: transparent;
  position: relative;
  @media (min-width: ${theme.breakpoint.md}) {
    width: 236px;
  }
`;

export const FieldTitle = styled.input`
  position: relative;
  display: inline-block;
  font-size: 14px;
  outline: none;
  border: none;
  width: 335px;
  border: ${theme.border.grey3};
  border-radius: 12px;
  overflow: hidden;
  padding: 14px; 
  background: transparent;
  color:  ${theme.color.white};
  &::placeholder { 
   color: ${theme.color.white};
  }
 &:focus  { 
   border: ${theme.border.orange};
  }
 &:not(:placeholder-shown) + .cleanBtn { 
   display: block;
  }
 @media (min-width: ${theme.breakpoint.md}) {
   width: 236px;
   font-size: 16px;
  }
`;

export const CleanBtn = styled.button`
  position: absolute;
  right: 40px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0;
  display: none;
`;

export const IconClean = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${theme.color.orange};
`;

export const SearchBtn = styled.button`
  position: absolute;
  right: 14px;
  display: inline-block;
  width: 18px;
  height: 18px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const IconSearch = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${theme.color.white};
`;