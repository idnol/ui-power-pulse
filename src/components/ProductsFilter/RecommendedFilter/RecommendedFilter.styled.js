import styled from "styled-components";
import {theme} from "../../../vars";

export const RecommendedField = styled.div`
  border: ${theme.border.grey3};
  border-radius: 12px;
  width: 173px;
  background: transparent;
  color:  ${theme.color.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  position: relative;
  display: inline-block;
  @media (min-width: ${theme.breakpoint.md}) {
    width: 204px;
    font-size: 16px;
    line-height: 1.5;
  }
`;