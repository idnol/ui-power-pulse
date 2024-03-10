import styled from 'styled-components';
import { theme } from '../../vars';

export const ProductsSection = styled.section`
  padding-top: 61px;
  @media (min-width: ${theme.breakpoint.md}) {
    padding-top: 84px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    height: 100vh;
    width: 100%;
    padding-top: 0;
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

export const HeaderInner = styled.div`
  @media (min-width: ${theme.breakpoint.xl}) {
    border-bottom: ${theme.border.grey2};
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

export const ProductsTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${theme.color.white};
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 32px;
    line-height: 1.37;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`;