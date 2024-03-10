import styled from "styled-components";
import {theme} from "../../vars";

const getRecomendedColor = props => {
 return props.$isAllowed? theme.color.green : theme.color.red;
};

export const ProductCard = styled.div`
  border: ${theme.border.grey3};
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  height: 141px;
  background-color: ${theme.color. greyTr};
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 405px;
  }
`;

export const DietBox = styled.div`
  border-radius: 4px;
  padding: 5px 7px;
  width: 41px;
  height: 24px;
  background: ${theme.color. greyTr};
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
`;

export const RecomendSwitch = styled.span`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${getRecomendedColor};
`;

export const RecomendedText = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${theme.color.white};
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0;
`

export const AddBtn = styled.button`
  font-size: 14px;
  line-height: 1.29;
  color: ${theme.color.orange};
  background-color: transparent;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0;
  cursor: pointer;
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const IconSvg = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${theme.color.orange};
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 27px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 16px;
`;