import styled from 'styled-components';
import { theme } from '../../vars.js';

export const AppLayoutStyled = styled.div`
    position: relative;
    @media (min-width: ${theme.breakpoint.xl}) {
        height: 100vh;
    }
`;

export const HeaderStyled = styled.header`
    height: 61px;
    position: absolute;
    z-index: 999;
    border-bottom: ${theme.border.grey2};
    width: 100%;
    top: 0;
    left: 0;
    @media (min-width: ${theme.breakpoint.md}) {
        height: 84px;
    }
`
