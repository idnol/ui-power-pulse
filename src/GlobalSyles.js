import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { theme } from './vars.js';


export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${theme.color.black};
        color: ${theme.color.white};
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
    }

    .container {
        width: 100%;
        padding: 0 20px;
        margin: 0 auto;
        @media (min-width: ${theme.breakpoint.md}) {
            width: ${theme.breakpoint.md};
            padding: 0 32px;
        }
        @media (min-width: ${theme.breakpoint.xl}) {
            width: ${theme.breakpoint.xl};
            padding: 0 96px;
        }
    }

    a {
        text-decoration: none;
    }
    
`;
