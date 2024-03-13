import styled from 'styled-components';
import { theme } from '../../vars';
import image from "../../../public/img/side-view-exercises-1x-desk.jpg";
import image2x from "../../../public/img/side-view-exercises-2x-desk.jpg";

const getBackground = props => {
  return props.$isbackground ? `url(${image})` : "none";
 };
 const getBackground2x = props => {
  return props.$isbackground ? `url(${image2x})` : "none";
 };

 export const HeaderInner = styled.div`
  @media (min-width: ${theme.breakpoint.xl}) {
    background-color: ${theme.color.black};
    width: 100%;
    height: 84px;
  }
`;

export const Row = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  width: 100%; 
  @media (min-width: ${theme.breakpoint.xl}) {
    padding-top: 72px;
  }
`;
export const ExercisesSection = styled.section`
  padding-top: 101px;
  @media (min-width: ${theme.breakpoint.md}) {
    padding-top: 116px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    height: 100vh;
    width: 100%;
    padding-top: 0;
   background-image: ${getBackground};
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: ${getBackground2x};
       }
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
   max-width: 335px;
   margin: 0 auto;
    @media (min-width: ${theme.breakpoint.md}) {
    max-width: 686px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 1248px;
  }
`;
