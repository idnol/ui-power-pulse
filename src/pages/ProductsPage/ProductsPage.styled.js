import styled from 'styled-components';
import { theme } from '../../vars';
import image from "../../../public/img/side-view-products-1x-desk.jpg";
import image2x from "../../../public/img/side-view-products-2x-desk.jpg";

export const ProductsSection = styled.section`
  padding-top: 61px;
  padding-bottom: 40px;
  @media (min-width: ${theme.breakpoint.md}) {
    padding-top: 84px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    height: 100vh;
    width: 100%;
    padding-top: 0;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
       background-image: url(${image2x});
       }
  }
`;

export const HeaderInner = styled.div`
  @media (min-width: ${theme.breakpoint.xl}) {
    background-color: ${theme.color.black};
    width: 100%;
    height: 84px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;