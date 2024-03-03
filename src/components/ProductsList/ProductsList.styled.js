import styled from "styled-components";
import {theme} from "../../vars";

export const ProductsContainer = styled.div`
max-width: 335px;
margin: 0 auto;
@media (min-width: ${theme.breakpoint.md}) {
          max-width: 686px;
          margin: 0;
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
        }
`;