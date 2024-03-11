import styled from 'styled-components';
import { theme } from '../../vars';

export const WelcomeSection = styled.section`
  height: 100vh;
  width: 100%;
  margin-top: 26px;
  background-image: url(../../../public/img/side-view-1x-mob.jpg);
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      background-image: url(../../../public/img/side-view-2x-mob.jpg); 
      }
  @media (min-width: ${theme.breakpoint.md}) {
   
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    height: 100vh;
    width: 100%;
    margin-top: 0;
    background-image: url(../../../public/img/side-view-1x-desk.jpg);
    background-repeat: no-repeat;
    background-position: right top;
    background-size: contain;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
       background-image: url(../../../public/img/side-view-2x-desk.jpg); 
       }
  }
`;
export const Wrapper = styled.div`
    display: flex;
    align-items: end;
    padding-top: 127px;
    @media (min-width: ${theme.breakpoint.md}) {
      padding-top: 189px;
    }
    @media (min-width: ${theme.breakpoint.xl}) {
      padding-top: 200px;
    }
`;