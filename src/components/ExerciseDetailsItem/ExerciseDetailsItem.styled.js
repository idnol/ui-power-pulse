import styled from "styled-components";
import { theme } from "../../vars";
import { StyledText } from "../parts/ReusableStyles.styled";


export const StyledItem = styled.li`
    padding: 12px 18px;
    width: 147px;
    height: 62px;
    border-radius: 12px;
    border: ${theme.border.grey2};
    background: ${theme.color.greySeven};
    @media (min-width: ${theme.breakpoint.md}) {
        width: 168px;
        height: 70px;
    }
`;

export const SmallText = styled.p`
    font-size: 12px;
    line-height: 1.33;
    color: ${theme.color.grey};
    margin-bottom: 4px;
    @media (min-width: ${theme.breakpoint.md}) {
        line-height: 1.5;
    }
`

export const DetailsText = styled(StyledText)`
    font-weight: 700;
    color: ${theme.color.white}
`