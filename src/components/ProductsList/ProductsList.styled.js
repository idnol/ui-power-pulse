import styled from "styled-components";
import {theme} from "../../vars";

export const ProductsContainer = styled.div`
  max-width: 335px;
  margin: 0 auto;
  @media (min-width: ${theme.breakpoint.md}) {
    max-width: 704px;
    margin: 0;
    overflow-y: scroll;
    height: 660px;
    @-moz-document url-prefix() {
      scrollbar {
      width: thin;
      color: ${theme.color.orange};
      background-color: ${theme.color.greySixth};
      }
    }
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${theme.color.greySixth};
      border-radius: 12px;
    } 
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.color.orange};
      border-radius: 12px;
      height: 153px;
    }
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 850px;
    margin: 0;
    max-height: 487px;
    overflow-y: scroll;
    @-moz-document url-prefix() {
      scrollbar {
      width: thin;
      color: ${theme.color.orange};
      background-color: ${theme.color.greySixth};
      }
    }
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${theme.color.greySixth};
      border-radius: 12px;
    } 
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.color.orange};
      border-radius: 12px;
      height: 153px;
    }
 }
`;

export const ListProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: ${theme.breakpoint.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    row-gap: 32px;
  }
`;
