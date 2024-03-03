import styled from 'styled-components';
import {theme} from '../../vars'

export const PageWrapper = styled.div`
    @media screen and (min-width:${theme.breakpoint.xl}){
        display:flex;
        flex-direction:row-reverse;
        gap:64px;
    }

`