import styled from 'styled-components';

export const ExercisesContainer = styled.div`
    @media (min-width: 768px){
        display: flex;
        align-items: baseline;
    }
`;

export const ExercisesTitle = styled.h2`
    font-size: 24px;
    line-height: 1.16;
    width: 104px;

    @media (min-width: 768px) {
        display: flex;
        justify-content: baseline;
        width: 138px;
        line-height: 1,375;
        font-size: 32px;
        margin-bottom: 64px;
    }
`;

export const ExercisesUl = styled.ul`
    display: flex;
    width: 244px;
    height: 26px;
    gap: 28px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        gap: 32px;
        margin-left: auto;
        width: 279px;
        height: 32px;
        margin-bottom: 0px;
    }
`;

export const ExercisesLi = styled.li`
    line-height: 1,285;
    font-size: 14px;

    @media (min-width: 768px) {
        line-height: 1.5;
        height: 24px;
        font-size: 16px;
    }
`;

export const StyledSpanCategories = styled.span`
    text-decoration: none;
    position: relative;
    color: rgba(239, 237, 232, 0.4);
    &.active {
        color: #EFEDE8;
        &:after {
            content: '';
            position: absolute;
            bottom: -9px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 4px;
            background-color: #EF8964; 
            border-radius: 2px;
        }
    }
`;
