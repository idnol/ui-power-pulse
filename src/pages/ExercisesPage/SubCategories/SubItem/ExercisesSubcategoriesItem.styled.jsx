import styled from 'styled-components';
import { theme } from '../../../../vars';


export const ContainerSubcategories = styled.div`
`;

export const ContainerSubcategoriesUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;

    @media (min-width: ${theme.breakpoint.md}) {
        margin-right: -16px;
        margin-bottom: 32px;
    }

    @media (min-width: ${theme.breakpoint.xl}) {
        margin-right: -16px; 
    }
`;

export const ContainerSubcategoriesLi = styled.li`
    width: 100%;
    position: relative;
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;
    
    @media (min-width: ${theme.breakpoint.md}) {
        width: calc(33.3333% - 16px);
        margin-right: 16px;

        &:nth-child(3n) {
            margin-right: 0;
        }
    }


    @media (min-width: ${theme.breakpoint.xl}) {
        width: calc(20% - 16px); 
        &:nth-child(3n) {
            margin-right: 16px;
        }
        &:nth-child(5n) {
            margin-right: 0;
        }
    }
`;

export const WrapperExes = styled.div`
    position: relative;
    padding-bottom: 62%;
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
        border: ${theme.border.grey2};
        z-index: 1; 
     } 
     
    @media (min-width: ${theme.breakpoint.md}) {
        padding-bottom: 92%;
    }
    @media (min-width: ${theme.breakpoint.xl}) {
        padding-bottom: 87%;
    }
`;


export const ContainerSubcategoriesImage = styled.img`
    width: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    height: 100%;
    object-fit: cover;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
`;

export const ContainerTextSubcategories = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
`;

export const SubcategoriesH3 = styled.h3`
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
    text-transform: lowercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:first-letter {
        text-transform: uppercase;
    }

    ${props =>
        props.isLong &&
        `
            white-space: normal;
            word-wrap: break-word;

        `}
`;


export const SubcategoriesH4 = styled.h4`
    line-height: 1.5;
    font-size: 12px;
    margin: 2px 0 0;
    color: ${theme.color.greyFifth};
`;


