import styled from 'styled-components';
import {theme} from "../../vars.js";

export const DiarySection = styled.section`
  padding-top: 101px;
  padding-bottom: 44px;
  @media (min-width: ${theme.breakpoint.md}) {
    padding-top: 156px;
  }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    @media (min-width: ${theme.breakpoint.md}) {
        gap: 32px;
    }
`;

export const HeadWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h2`
  margin-top: 61px;
  @media (min-width: ${theme.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
`;

export const DiaryWrapper = styled.div`
    display: flex;
    gap: 40px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    @media (min-width: ${theme.breakpoint.md}) {
      flex-direction: column;
      align-items: flex-start;
      gap: 64px;
  }
    @media (min-width: ${theme.breakpoint.xl}) {
      flex-direction: row;
      gap: 32px;
  }
`;
