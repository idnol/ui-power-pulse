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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    button {
        cursor: pointer;
    }

     .accent{
       background: ${theme.color.orange};
       border: ${theme.border.grey2}
    }

    .default{
        background: ${theme.color.greySeven};
    }

    .whiteTextColor{
        color: ${theme.color.white}
    }

    .greyTextColor{
        color: ${theme.color.greyFifth};
    }

    .disable-scroll {
        overflow: hidden;
    }
    
    .row {
        display: flex;
    }

    main {
        padding-top: 136px;
    }

    .greenBorder {
    border: 1px solid ${theme.color.green};
    }

    .redBorder {
        border: 1px solid ${theme.color.red}
    }

    .defaultBorder{
         border: ${theme.border.grey2};
    }

    .datePickerWrapper .react-datepicker{
        background-color: ${theme.color.orangeSecond};
        bottom: 0;
        left: -50px;

    }
    .datePickerWrapper .react-datepicker__day-names{
        background: ${theme.color.orangeSecond};
        border-top:1px solid rgba(239, 237, 232, 0.2);
        border-bottom: none;
        padding: 0;
    }
    .datePickerWrapper .react-datepicker__day-name{
        font-family: 'Roboto', sans-serif;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        letter-spacing: -0.02em;
        color: ${theme.color.greyThird};
            }
    .datePickerWrapper .react-datepicker__month{
        padding-top:0;

    }
    .datePickerWrapper .react-datepicker__current-month{
        font-family: 'Roboto', sans-serif;
        background: ${theme.color.orangeSecond};
        font-weight: 500;
        font-size: 16px;
        letter-spacing: -0.02em;
        color:white;
        margin-bottom:14px;
    }
    .datePickerWrapper .react-datepicker__day{
        width: 24px;
        height: 24px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 129%;
        letter-spacing: -0.02em;
        color:white;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            border-radius:50%;
            background: ${theme.color.black};
            color: white;
        }
    }
    .datePickerWrapper .react-datepicker__day--selected{
        width: 24px;
        height: 24px;
        border-radius:50%;
        background: ${theme.color.black};
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .datePickerWrapper .react-datepicker__navigation{
        top:-18px;
    }
    .datePickerWrapper .react-datepicker__header{
        background: ${theme.color.orangeSecond};

    }
`;
