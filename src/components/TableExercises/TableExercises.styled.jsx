import styled from 'styled-components';
import { theme } from '../../vars.js';

export const ScrollContainer = styled.div`
  min-height: 234px;
  max-height: 990px;
  overflow-y: auto;

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

    &::-webkit-scrollbar {
      width: 6px;
      border-radius: 12px;
    }

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

export const HeaderBodyPart = styled.p`
  width: 90px;

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 115px;
  }
`;

export const HeaderEquipment = styled.p`
  width: 132px;

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 157px;
  }
`;

export const HeaderName = styled.p`
  width: 128px;

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 131px;
  }
`;

export const HeaderTarget = styled.p`
  width: 84px;

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 106px;
  }
`;

export const HeaderBurnedCalories = styled.p`
  width: 78px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 91px;
  }
`;

export const HeaderTime = styled.p`
  width: 72px;

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 82px;
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

  &:first-child {
    margin-top: 22px;
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

    &:first-child {
      margin-top: 0;
    }
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 762px;
    width: 826px;
  }
`;

export const BodyPartItem = styled.td`
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
    content: 'Body Part';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${theme.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 90px;
    height: 40px;
    margin-bottom: 0;
    padding: 8px 14px;
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
    width: 115px;
  }
`;

export const EquipmentItem = styled.td`
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
    content: 'Equipment';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${theme.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 132px;
    height: 40px;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 157px;
  }
`;

export const NameItem = styled.td`
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
    content: 'Name';
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
    width: 128px;
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
    width: 131px;
  }
`;

export const TargetItem = styled.td`
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
    content: 'Target';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${theme.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    margin-right: 8px;
    max-width: 60px;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 84px;
    height: 40px;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    margin-right: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 106px;
  }
`;

export const BurnedCaloriesItem = styled.td`
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
    content: 'Burned Calories';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${theme.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0;
  }

  @media (max-width: 375px) {
    margin-right: 8px;
    max-width: 60px;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 78px;
    height: 40px;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    margin-right: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::before {
      display: none;
    }
  }

  @media (min-width: ${theme.breakpoint.xl}) {
    width: 91px;
  }
`;

export const TimeItem = styled.td`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  width: 76px;
  height: 38px;
  padding: 10px 14px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  &::before {
    content: 'Time';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${theme.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    max-width: 60px;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 72px;
    height: 40px;
    padding: 8px 14px 8px 14px;
    font-size: 16px;
    line-height: 1.5;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 82px;
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

  @media (max-width: 375px) {
    margin-left: 4px;
  }
`;
