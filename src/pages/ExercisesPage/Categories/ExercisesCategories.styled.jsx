import styled from 'styled-components';
import { theme } from '../../../vars';

export const ExercisesContainer = styled.div`
    padding-top: 61px;
    @media (min-width: ${theme.breakpoint.md}) {
        display: flex;
        align-items: baseline;
        padding-top: 84px;
    }
`;

export const ExercisesTitle = styled.h2`
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 1.16;
    width: 104px;

    @media (min-width: ${theme.breakpoint.md}) {
        display: flex;
        justify-content: baseline;
        width: 138px;
        line-height: 1.375;
        font-size: 32px;
        margin-bottom: 64px;
        margin-top: 72px;
    }
`;

export const ExercisesUl = styled.ul`
    display: flex;
    width: 244px;
    height: 26px;
    gap: 28px;
    margin-bottom: 20px;

    @media (min-width: ${theme.breakpoint.md}) {
        gap: 32px;
        margin-left: auto;
        width: 279px;
        height: 32px;
        margin-bottom: 0px;
    }
`;

export const ExercisesLi = styled.li`
    line-height: 1.285;
    font-size: 14px;

    @media (min-width: ${theme.breakpoint.md}) {
        line-height: 1.5;
        height: 24px;
        font-size: 16px;
    }
`;

export const StyledSpanCategories = styled.span`
    text-decoration: none;
    position: relative;
    color: ${theme.color.greyFifth};
    &:after {
        content: '';
        position: absolute;
        bottom: -9px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 4px;
        background-color: ${theme.color.orangeSecond}; 
        border-radius: 2px;
        opacity: 0; 
        transition: opacity 0.3s;
    }
    &:hover,
    &.active {
        color: ${theme.color.white};
        &:after {
            opacity: 1;
        }
    }
`;
