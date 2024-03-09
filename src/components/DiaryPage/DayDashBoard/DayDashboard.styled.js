import styled from 'styled-components';
import { theme } from '../../../vars';

export const DashboardContainer = styled.div`
  max-width: 335px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoint.md}) {
    max-width: 593px;
    margin: unset;
  }

  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 390px;
    margin-left: auto;
  }
`;

export const DashboardList = styled.ul`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 13px;
  grid-template-columns: repeat(auto-fill, minmax(157px, 157px));
  justify-content: center;

  max-width: 335px;
  margin: 0 auto 20px auto;

  @media (min-width: ${theme.breakpoint.md}) {
    max-width: 593px;
    justify-content: start;

    grid-row-gap: 16px;
    grid-column-gap: 16px;

    grid-template-columns: repeat(auto-fill, minmax(187px, 187px));

    margin: 0 auto 32px auto;
  }

  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 390px;

    margin: 0 auto 48px auto;
  }
`;

export const DashboardItem = styled.li`
  position: relative;

  padding: 14px;
  border-radius: 12px;

  max-width: 157px;
  width: 100%;
  height: 96px;

  &:nth-child(5) {
    border: 1px solid
      ${(props) =>
        props.count < 0 ? `${theme.color.red}` : `${theme.border.grey2}`};
  }

  &:nth-child(6) {
    order: 6;
    border: 1px solid
      ${(props) =>
        props.count > 0 ? `${theme.color.green}` : `${theme.border.grey2}`};
  }

  @media (min-width: ${theme.breakpoint.md}) {
    padding: 18px;
    max-width: 187px;
    height: 116px;

    &:nth-child(1) {
      order: 1;
    }
    &:nth-child(2) {
      order: 4;
    }
    &:nth-child(3) {
      order: 2;
    }
    &:nth-child(4) {
      order: 5;
    }
    &:nth-child(5) {
      order: 3;
    }
    &:nth-child(6) {
      order: 6;
    }
  }

  @media (min-width: ${theme.breakpoint.xl}) {
    &:nth-child(1) {
      order: 1;
    }
    &:nth-child(2) {
      order: 2;
    }
    &:nth-child(3) {
      order: 3;
    }
    &:nth-child(4) {
      order: 4;
    }
    &:nth-child(5) {
      order: 5;
    }
    &:nth-child(6) {
      order: 6;
    }
  }
`;

export const DashboardItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DashboardIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const DashboardItemTitle = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */

  margin: 0;

  @media (min-width: ${theme.breakpoint.md}) {
    line-height: 18px;
  }
`;

export const DashboardItemNumber = styled.p`
  position: absolute;
  left: 14px;
  bottom: 14px;

  color: ${theme.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */

  margin: 0;

  @media (min-width: ${theme.breakpoint.md}) {
    left: 18px;
    bottom: 18px;

    font-size: 24px;
    line-height: 32px;
  }
`;

export const AttentionBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const AttentionIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const AttentionText = styled.p`
  color: ${theme.color.grey};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  max-width: 303px;

  margin: 0;

  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 16px;
    line-height: 24px;
    max-width: 561px;
  }

  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 358px;
  }
`;
