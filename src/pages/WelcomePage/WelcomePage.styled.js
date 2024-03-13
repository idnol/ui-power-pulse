import styled from 'styled-components';
import { theme } from '../../vars';
import image from "../../../public/img/side-view-1x-mob.jpg";
import image2x from "../../../public/img/side-view-2x-mob.jpg";
import imagedesc from "../../../public/img/side-view-1x-desk.jpg";
import imagedesc2x from "../../../public/img/side-view-2x-desk.jpg";


export const WelcomeSection = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
 
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
        background-image: url(${image2x});
      }
  @media (min-width: ${theme.breakpoint.xl}) {
    height: 100vh;
    width: 100%;
    background-image: url(${imagedesc});
    background-repeat: no-repeat;
    background-position: right top;
    background-size: contain;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
       background-image: url(${imagedesc2x}); 
       }
  }
`;
export const Wrapper = styled.div`
    padding-top: 127px;
    height: 100vh;
    position: relative;
    @media (min-width: ${theme.breakpoint.md}) {
      padding-top: 189px;
    }
    @media (min-width: ${theme.breakpoint.xl}) {
      padding-top: 200px;
      display: flex;
      align-items: end;
      height: 100%;
    }
`;