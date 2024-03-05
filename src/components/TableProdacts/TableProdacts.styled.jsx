import styled from 'styled-components';
import { theme } from '../../vars.js';

export const TableItems = styled.table`
  width: 100%;
  padding-right: 8px;
`;

export const TableBody = styled.tbody`
  width: 100%;
  display: flex;
`;

export const RowItem = styled.tr`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${theme.color.white};
  margin-top: 66px;

  &:first-child {
    margin-top: 0px;
  }
`;

export const ScrollContainer = styled.div`
  border-radius: 12px;
  width: 100%;
  height: 800px; /* Встановіть бажану висоту контейнера */
  overflow-y: auto; /* Додаємо вертикальну прокрутку при необхідності */
  overflow-x: hidden;

  /* Стилізація полоси прокрутки */
  ::-webkit-scrollbar {
    width: 6px;
    height: 90px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #007bff; /* Колір бігунка (полоси прокрутки) */
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Колір доріжки (фону полоси прокрутки) */
  }
`;

export const TitleItem = styled.td`
  position: relative;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;

  width: 100%;
  /* width: 297px; */
  height: 38px;
  margin-bottom: 42px;
  padding: 10px 14px;
  text-align: left;
  &::before {
    content: 'Title';
    position: absolute;
    top: -25px;
    left: 0;
    width: 10px;
    height: 10px;
    color: ${theme.color.orangeSecond};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const CategoryItem = styled.td`
  position: relative;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  width: 297px;
  height: 38px;
  margin-bottom: 42px;
  padding: 10px 14px;
  text-align: left;
  &::before {
    content: 'Category';
    position: absolute;
    top: -25px;
    left: 0;
    width: 10px;
    height: 10px;
    color: ${theme.color.orangeSecond};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const CaloriesItem = styled.td`
  position: relative;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  width: 81px;
  height: 38px;
  margin-right: 16px;
  padding: 10px 14px;
  text-align: left;
  &::before {
    content: 'Calories';
    position: absolute;
    top: -25px;
    left: 0;
    width: 10px;
    height: 10px;
    color: ${theme.color.orangeSecond};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const WeightItem = styled.td`
  position: relative;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  width: 80px;
  height: 38px;
  margin-right: 16px;
  padding: 10px 14px;
  text-align: left;
  &::before {
    content: 'Weight';
    position: absolute;
    top: -25px;
    left: 0;
    width: 10px;
    height: 10px;
    color: ${theme.color.orangeSecond};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const SvgCircle = styled.svg`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;

export const RecommendItem = styled.td`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  width: 76px;
  height: 38px;
  margin-right: 8px;
  padding: 10px 14px;
  text-align: left;
  &::before {
    content: 'Recommend';
    position: absolute;
    top: -25px;
    left: 0;
    width: 10px;
    height: 10px;
    color: ${theme.color.orangeSecond};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const DeleteItem = styled.td`
  width: 20px;
`;

export const DeleteBtn = styled.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SvgBasket = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${theme.color.orangeSecond};
  transition-duration: 300ms;

  &:hover {
    stroke: ${theme.color.white};
    transition-duration: 300ms;
  }
`;
