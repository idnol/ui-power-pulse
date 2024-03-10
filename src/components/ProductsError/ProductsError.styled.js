import styled from "styled-components";
import {theme} from "../../vars";

export const ErrorWrapper = styled.div`
  max-width: 335px;
  margin: 0 auto;
  margin-top: 64px;
  @media (min-width: ${theme.breakpoint.md}) {
    max-width: 580px;
    margin: 0;
    margin-top: 132px;   
  }
`;

export const ProductError = styled.p`
  font-size: 14px;
  line-height: 1.29;
  color: ${theme.color.grey};
  margin-bottom: 16px;
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;    
  }
`;

export const AccentText = styled.span`
  font-size: 14px;
  line-height: 1.29;
  color: ${theme.color.orange};
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;    
 }
`;