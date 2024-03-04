import styled from 'styled-components';
import { theme } from '../../vars';

export const Title = styled.p`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  margin-bottom: 33px;

  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 25px;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 16px;

  margin-bottom: 8px;
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Name = styled.p`
  color: ${theme.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */

  max-width: 240px;

  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const StatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  position: absolute;
  top: 18px;
  right: 16px;

  display: flex;
  align-items: center;
  gap: 8px;

  background: none;
  border: none;

  cursor: pointer;
`;

export const ButtonIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${theme.color.orange};
`;

export const ButtonText = styled.p`
  color: ${theme.color.orange};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 16px;
    line-height: 24px;
  }
`;
