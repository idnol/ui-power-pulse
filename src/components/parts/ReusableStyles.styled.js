import styled from "styled-components";
import { theme } from "../../vars";

export const StyledHeader = styled.h2`
    line-height: 1.17;
    @media (min-width: ${theme.breakpoint.md}) {
        font-size: 32px;
        line-height: 1.38;
    }
`;

export const StyledText = styled.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${theme.color.grey};
    @media (min-width: ${theme.breakpoint.md}) {
        font-size: 16px;
        line-height: 1.5;
    }
`;