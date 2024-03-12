import styled from 'styled-components';
import { theme } from '../../vars.js';

export const ScrollContainer = styled.div`
  min-height: 234px;
  max-height: 760px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
   width: 6px;
   border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
   margin-block: 1.45em;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color.greySixth};
    border-radius: 12px;
    height: 203px;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    max-width: 704px;
    min-height: 138px;
    max-height: 138px;
    overflow-x: hidden;

     &::-webkit-scrollbar {
       width: 6px;
       border-radius: 12px;
     }
    //
    &::-webkit-scrollbar-track {
      margin-block: 0.3em;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.color.greySixth};
      border-radius: 12px;
      height: 90px;
    }
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 826px;
    min-height: 138px;
    max-height: 138px;
    overflow-x: hidden;
  }
`;

export const Header = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoint.md}) {
    display: flex;
    gap: 8px;
    width: 704px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: ${theme.color.orangeSecond};
    margin-bottom: 8px;
  }

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 762px;
    padding-left: 16px;
  }
`;

export const HeaderTitle = styled.p`
  width: 204px;

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 212px;
  }
`;

export const HeaderCategory = styled.p`
  width: 128px;

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 166px;
  }
`;

export const HeaderCalories = styled.p`
  width: 90px;

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 105px;
  }
`;

export const HeaderWeight = styled.p`
  width: 90px;

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 105px;
  }
`;

export const HeaderRecommend = styled.p`
  width: 80px;

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 105px;
  }
`;

export const Table = styled.table`
  max-width: 335px;

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`;

export const Thead = styled.thead`
  display: none;
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
  max-width: 297px;
  padding-right: 4px; 

  &:first-child {
    margin-top: 22px;
  }

  @media (max-width: 375px) {
    width: 100%;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
    max-width: 656px;
    width: 704px;
    height: 40px;
    gap: 8px;
    flex-wrap: nowrap;
    align-items: baseline;
    margin-top: 6px;
    padding-right: 0px;

    &:first-child {
      margin-top: 0;
    }
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 762px;
    width: 826px;
  }
`;

export const TitleItem = styled.td`
  position: relative;
  border: ${theme.border.grey3};
  border-radius: 12px;
  width: 100%;
  height: 38px;
  margin-bottom: 42px;
  padding: 10px 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-align: left;

  &::before {
    content: 'Title';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${theme.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 0;
    padding: 8px 14px;
    width: 204px;
    height: 40px;
    font-size: 16px;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 212px;
  }
`;

export const CategoryItem = styled.td`
  position: relative;
  border: ${theme.border.grey3};
  border-radius: 12px;
  width: 100%;
  height: 38px;
  margin-bottom: 42px;
  padding: 10px 14px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  &::before {
    content: 'Category';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${theme.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 128px;
    height: 40px;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 166px;
  }
`;

export const CaloriesItem = styled.td`
  position: relative;
  border: ${theme.border.grey3};
  border-radius: 12px;
  width: 81px;
  height: 38px;
  margin-right: 16px;
  padding: 10px 14px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  &::before {
    content: 'Calories';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${theme.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    width: 27%;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 90px;
    height: 40px;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    margin-right: 0;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 105px;
  }
`;

export const WeightItem = styled.td`
  position: relative;
  border: ${theme.border.grey3};
  border-radius: 12px;
  width: 80px;
  height: 38px;
  margin-right: 16px;
  padding: 10px 14px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  &::before {
    content: 'Weight';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${theme.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    width: 27%;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 90px;
    height: 40px;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    margin-right: 0;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 105px;
  }
`;

export const SvgCircle = styled.svg`
  width: 14px;
  height: 14px;
  margin-right: 8px;

  @media (min-width: ${theme.breakpoint.md}) {
    display: flex;
    width: 14px;
    height: 14px;
  }
`;

export const RecommendItem = styled.td`
  position: relative;
  display: flex;
  align-items: center;
  border: ${theme.border.grey3};
  border-radius: 12px;
  width: 76px;
  height: 38px;
  padding: 10px 14px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  &::before {
    content: 'Recommend';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${theme.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    width: 26%;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 80px;
    height: 40px;
    padding: 8px 14px 8px 14px;
    font-size: 16px;
    line-height: 1.5;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 105px;
  }
`;

export const DeleteItem = styled.td`
  width: 20px;

  @media (min-width: ${theme.breakpoint.md}) {
    width: 30px;
  }
`;

export const DeleteBtn = styled.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SvgBasket = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${theme.color.orangeSecond};
  transition-duration: 300ms;
  margin-left: 4px;

  &:hover {
    stroke: ${theme.color.white};
    transition-duration: 300ms;
  }
`;
