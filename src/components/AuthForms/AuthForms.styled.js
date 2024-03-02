import { ErrorMessage, Field } from "formik";
import styled from "styled-components";
import { StyledHeader, StyledText } from "../parts/ReusableStyles.styled";
import { theme } from "../../vars";
import { Link } from "react-router-dom";


export const StyledDiv = styled.div`
    margin-top: 127px;
    max-width: 335px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: ${theme.breakpoint.md}) {
        max-width: 496px;
        margin-left: 0px;
    }
`;

export const StyledTitle = styled(StyledHeader)`
    margin-bottom: 14px;
    @media (min-width: ${theme.breakpoint.md}) {
        margin-bottom: 16px;
    }
`;

export const StyledGreetings = styled(StyledText)`
    margin-bottom: 28px;
    @media (min-width: ${theme.breakpoint.md}) {
        margin-bottom: 32px;
    }
`;

export const StyledInput = styled(Field)`
    display: block;
    width: 100%;
    height: 46px;
    margin-top: 18px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
    border-radius: 12px;
    border: ${theme.border.grey3};
    background-color: transparent;
    color: ${theme.color.white};
    &:hover{
        border: ${theme.border.orange};
    };
    @media (min-width: ${theme.breakpoint.md}) {
        width: 307px;
        height: 52px;
        margin-top: 20px;
        font-size: 16px;
        line-height: 1.5;
    }
    @media (min-width: ${theme.breakpoint.xl}) {
        width: 310px;
    }
`;

export const Error = styled(ErrorMessage)`
    color: ${theme.color.red};
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.12px;
    margin: 4px;
`;

export const StyledButton = styled.button`
    height: 42px;
    margin-top: 40px;
    padding: 12px 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.12;
    border-radius: 12px;
    border: none;
    background-color: ${theme.color.orange};
    color: ${theme.color.white};
    &:hover{
        background-color: ${theme.color.orangeSecond};
    };
    @media (min-width: ${theme.breakpoint.md}) {
        height: 56px;
        margin-top: 64px;
        padding: 16px 60px;
        font-size: 20px;
        line-height: 1.2;
    }
`;

export const StyledSecondaryText = styled.p`
    color: ${theme.color.grey};
    margin-top: 12px;
    font-size: 12px;
    line-height: 1.5;
    color: ${theme.color.greySecond};
    @media (min-width: ${theme.breakpoint.md}) {
        padding-left: 8px;
    }
`;

export const StyledLink = styled(Link)`
    color: ${theme.color.white};
    text-decoration: underline;
`;
