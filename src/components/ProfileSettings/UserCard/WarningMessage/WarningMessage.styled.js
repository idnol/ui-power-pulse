import styled from 'styled-components';
import {theme} from '../../../../vars'


export const WarningText = styled.p`
    width:85%;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: rgba(239, 237, 232, 0.3);
    @media screen and (min-width: ${theme.breakpoint.xl}) {
        font-size: 16px;
    }
`;

export const WarningWrapper = styled.div`
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    max-width:335px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    max-width:335px;
    @media screen and (min-width: ${theme.breakpoint.md}) {
        max-width:439px;
    }
`