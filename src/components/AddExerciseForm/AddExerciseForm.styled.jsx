import styled from "styled-components";
import { theme } from "../../vars";
import { StyledText } from "../parts/ReusableStyles.styled";


export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
    padding: 48px 16px;
    width: 335px;
    height: 788px;
    margin-left: auto;
    margin-right: auto;
    background-color:#2d2d2d; //delete
    @media (min-width: ${theme.breakpoint.md}) {
        padding: 48px 30px;
        width: 694px;
        height: 550px;
    }
`;

export const ContainerImg = styled.div`
    padding: 48px 32px;
    width: 270px;
    height: 226px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14px;
    border-radius: 12px;
    background-color:gray; //delete
`;

export const ContainerTimer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    height: 214px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    @media (min-width: ${theme.breakpoint.md}) {
        margin-bottom: 0;
    }
`;

export const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 302px;
    height: 132px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
    background-color: gray; //delete
    @media (min-width: ${theme.breakpoint.md}) {
        margin-right: 0;
        width: 345px;
        height: 148px;
    }
`;

export const StyledItem = styled.ul`
    padding: 12px 18px;
    width: 147px;
    height: 62px;
    border-radius: 12px;
    background-color: yellow; //delete
    @media (min-width: ${theme.breakpoint.md}) {
        width: 168px;
        height: 70px;
    }
`;

export const StyledBtn = styled.button`
    width: 151px;
    height: 42px;
    padding: 12px 32px;
    border-radius: 12px;
    border: none;
    margin-left: 0;
    color: ${theme.color.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.12;
    background-color: ${theme.color.orange};
    &:hover{
        background-color: ${theme.color.orangeSecond};
    };
    @media (min-width: ${theme.breakpoint.md}) {
        margin-right: 0;
        height: 52px;
        padding: 14px 32px;
        line-height: 1.5;
        margin: auto 0 0 auto;
    }
`;

export const StyledStartBtn = styled.button`
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
    margin-top: 14px;
    padding: 0;
    border: none;
    background-color: transparent;
`;

export const StyledSmallText = styled(StyledText)`
    margin-bottom: 4px;
    font-size: 10px;
    line-height: 1.4;
`

export const StyledCalories = styled.span`
    color: ${theme.color.orange};
    font-size: 14px;
    line-height: 1.29;
`

