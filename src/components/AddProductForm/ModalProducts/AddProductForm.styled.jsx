import styled from 'styled-components';
import { theme } from '../../../vars';

export const Wrapper = styled.div`
  padding: 48px 24px;
  max-width: 335px;

  @media (min-width: ${theme.breakpoint.md}) {
    padding: 48px 32px;
    max-width: 479px;
  }
`;
export const ModalCloseBtn = styled.button`
  position: absolute;
  stroke: ${theme.color.white};
  fill: transparent;
  &:hover {
    stroke: ${theme.color.orangeSecond};
  }

  width: 22px;
  height: 22px;
  top: 14px;
  right: 14px;

  @media (min-width: ${theme.breakpoint.md}) {
    width: 26px;
    height: 26px;
    top: 16px;
    right: 16px;
  }

  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const Icon = styled.use``;

export const ModalSvg = styled.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${theme.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${theme.breakpoint.md}) {
    flex-direction: row;
  }
`;

export const NameBox = styled.div`
  width: 287px;
  padding: 8px 14px;
  border: ${theme.border.orange};
  border-radius: 12px;
  @media (min-width: ${theme.breakpoint.md}) {
    width: 244px;
  }
`;

export const Name = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  text-overflow: ellipsis;
  color: ${theme.color.greyFifth};
`;

export const BoxCalories = styled.div`
  position: relative;
`;

export const Grams = styled.p`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  font-size: 12px;
  color: ${theme.color.greyFifth};
`;

export const InputCalories = styled.input`
  width: 287px;
  padding: 8px 14px;
  border: ${theme.border.grey3};
  border-radius: 12px;
  background-color: transparent;
  outline: transparent;
  color: ${theme.color.white};
  &:hover,
  &:focus {
    border: ${theme.border.orange};
    outline: ${theme.border.orange};
  }

  @media (min-width: ${theme.breakpoint.md}) {
    width: 155px;
  }
`;

export const CountsPro = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const Value = styled.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${theme.color.white};
  font-size: 12px;
  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 32px;
  }
`;

export const BtnBox = styled.div`
  max-width: 286px;
  display: flex;
  gap: 14px;
  max-height: 42px;
  @media (min-width: ${theme.breakpoint.md}) {
    max-width: 309px;
  }
`;

export const FormBtnAdd = styled.button`
  min-width: 151px;
  padding: 12px 32px;
  border-radius: 12px;
  border: none;
  background-color: ${theme.color.orange};
  color: ${theme.color.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${theme.color.orangeSecond};
  }
  @media (min-width: ${theme.breakpoint.md}) {
    min-width: 151px;
    padding: 14px 32px;
  }
`;

export const FormBtnCancel = styled.button`
  min-width: 121px;
  padding: 12px 36px;
  border-radius: 12px;
  background-color: transparent;
  border: ${theme.border.grey3};
  color: ${theme.color.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: ${theme.border.orange};
  }
  @media (min-width: ${theme.breakpoint.md}) {
    min-width: 142px;
    padding: 12px 40px;
  }
`;

export const CaloriesText = styled.p`
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${theme.color.white};
  opacity: 0.4;
  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 64px;
  }
`;
