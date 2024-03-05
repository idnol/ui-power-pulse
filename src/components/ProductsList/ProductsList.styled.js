import styled from "styled-components";
import {theme} from "../../vars";

export const ProductsContainer = styled.div`
 max-width: 335px;
 margin: 0 auto;
@media (min-width: ${theme.breakpoint.md}) {
          max-width: 686px;
          margin: 0;
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

export const ProductsSection = styled.section`
@media (min-width: ${theme.breakpoint.xl}) {
         height: 100vh;
         width: 100%;
         background-image: url(../../../public/img/side-view-products-1x-desk.jpg);
         background-repeat: no-repeat;
         background-position: right;
         background-size: contain;
         @media (min-device-pixel-ratio: 2),
          (min-resolution: 192dpi),
          (min-resolution: 2dppx) {
           background-image: url(../../../public/img/side-view-products-2x-desk.jpg); 
           }
        }
`;