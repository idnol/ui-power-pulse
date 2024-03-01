import styled from "styled-components";
import {theme} from "../../vars";

const getRecomendedColor = props => {
 return props.$notAllowed? theme.color.red : theme.color.green;
  };

export const ProductCard = styled.div`
 border: ${theme.border.grey3};
 border-radius: 12px;
 padding: 16px;
 width: 335px;
 height: 141px;
 background-color: ${theme.color. greyThird};
`;

export const DietBox = styled.div`
 border-radius: 4px;
 padding: 5px 7px;
 width: 41px;
 height: 24px;
 background: ${theme.color. greyThird};
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

export const ProductText = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 1.5;
color: ${theme.color.white};
display: flex;
gap: 8px;
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
`;

export const BtnContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`