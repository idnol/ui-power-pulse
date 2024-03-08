import styled from 'styled-components';

export const ContainerSubcategories = styled.div`
`;

export const ContainerSubcategoriesUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;

    @media (min-width: 768px) {
        margin-right: -16px;
        margin-bottom: 32px;
    }

    @media (min-width: 1440px) {
        margin-right: -16px; 
    }
`;

export const ContainerSubcategoriesLi = styled.li`
    width: 100%;
    position: relative;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        width: calc(33.3333% - 16px);
        margin-right: 16px;

        &:nth-child(3n) {
            margin-right: 0;
        }
    }

    @media (min-width: 1440px) {
        width: calc(20% - 16px); 
        &:nth-child(3n) {
            margin-right: 16px;
        }
        &:nth-child(5n) {
            margin-right: 0;
        }
    }
`;

export const ContainerSubcategoriesImage = styled.div`
    width: 100%;
    padding-top: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(4, 4, 4, 0.5); 
        border-radius: 12px;
        border: 2px solid rgba(239, 237, 232, 0.2);
        z-index: -1;
    }
`;

export const ContainerTextSubcategories = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const SubcategoriesH3 = styled.h3`
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
    text-transform: lowercase;
    &:first-letter {
        text-transform: uppercase;
    }
    
    @media (min-width: 768px) {
        line-height: 1.33;
        font-size: 24px;
    }
`;

export const SubcategoriesH4 = styled.h4`
    line-height: 1.5;
    font-size: 12px;
    margin: 2px 0 0;
    color: rgba(239, 237, 232, 0.4);
`;