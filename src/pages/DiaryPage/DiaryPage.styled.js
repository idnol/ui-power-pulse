import styled from 'styled-components';
import {theme} from "../../vars.js";

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
    align-items: start;
`;
