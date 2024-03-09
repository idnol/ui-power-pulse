import styled from "styled-components";
import {theme} from "../../../vars";

export const CategoryField = styled.div`
 border: ${theme.border.grey3};
 border-radius: 12px;
 width: 146px;
 background: transparent;
 color:  ${theme.color.white};
 font-weight: 400;
 font-size: 14px;
 line-height: 1.29;
 cursor: pointer;
 scrollbar-width: none;
 position: relative;
 display: inline-block; 
 z-index: 2;
 @media (min-width: ${theme.breakpoint.md}) {
  width: 192px;
  font-size: 16px;
  line-height: 1.5;
  }
`;