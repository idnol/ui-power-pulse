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
    max-width: 439px;
    margin: 0 auto;
    @media screen and (min-width:${theme.breakpoint.xl}){
      padding-left:64px;
      border-left:1px solid rgba(239, 237, 232, 0.2);
    }

`
export const LogOutItemWrapper = styled.div`
    display: flex;
    justify-content:flex-end;
    padding-right: 32px;
    margin-top:32px;
`
