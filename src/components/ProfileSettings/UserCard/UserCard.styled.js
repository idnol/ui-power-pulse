import styled from 'styled-components';
import {theme} from '../../../vars'

export const DailyWrapper = styled.div`
    width: 100%;
    margin-top: 32px;
    display: flex;
    gap: 14px;
    justify-content: center;
    @media screen and (max-width: ${theme.breakpoint.sm}) {
      max-width: 100%;
    }
    @media screen and (min-width: ${theme.breakpoint.md}) {
      gap: 16px;
    }
`;
export const UserCardWrapper = styled.div`
    @media screen and (min-width:${theme.breakpoint.xl}){
      padding-left:64px;
      border-left:1px solid rgba(239, 237, 232, 0.2);
    }
`