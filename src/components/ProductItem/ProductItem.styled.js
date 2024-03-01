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

export const RecomendedText = styled.p`
font-size: 12px;
line-height: 1.5;
color: ${theme.color.white};
display: flex;
gap: 8px;
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
`;

export const BtnContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 35px;
`;

export const BtnWrapper = styled.div`
display: flex;
gap: 16px;
`;

export const TitleWrapper = styled.div`
display: flex;
gap: 16px;
margin-bottom: 8px;
`;

export const ProductTitle = styled.h3`
font-weight: 400;
font-size: 20px;
line-height: 1.2;
color: ${theme.color.white};
margin: 0;
text-align: center;
max-width: 258px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

export const ProductInfoWrapper = styled.div`
display: flex;
gap: 16px;
justify-content: center;
`;

export const ProductInfoText = styled.p`
display: flex;
gap: 4px;
font-size: 12px;
line-height: 1.5;
color: ${theme.color.greyFifth};
margin: 0;
`;

export const ProductInfoData = styled.span`
display: block;
color: ${theme.color.white};
max-width: 76px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;