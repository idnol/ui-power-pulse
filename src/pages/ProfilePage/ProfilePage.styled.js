import styled from 'styled-components';
import {theme} from '../../vars'

export const ProfileSection = styled.section`
  padding-top: 101px;
  padding-bottom: 44px;
  @media (min-width: ${theme.breakpoint.md}) {
    padding-top: 156px;
  }
`;

export const PageWrapper = styled.div`
    @media screen and (min-width:${theme.breakpoint.xl}){
        display:flex;
        flex-direction:row-reverse;
        gap:64px;
    }

`
export const ProfileWrapper = styled.div`
  max-width: 335px;
  margin: 0 auto;
  @media (min-width: ${theme.breakpoint.md}) {
    max-width: 686px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 1248px;
  }
`;
