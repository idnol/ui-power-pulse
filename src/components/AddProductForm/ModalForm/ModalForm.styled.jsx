import styled from 'styled-components';

import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

import { theme } from '../../../vars';

export const Form = styled(FormikForm)`
  //max-height: 287px;
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${theme.breakpoint.md}) {
    flex-direction: row;
  }
`;

export const InputName = styled.input`
  width: 287px;
  padding: 8px 14px;
  border: ${theme.border.grey3};
  border-radius: 12px;
  background-color: transparent;
  color: ${theme.color.white};
  opacity: 0.3;
  &:hover {
    border: ${theme.border.orange};
  }
  @media (min-width: ${theme.breakpoint.md}) {
    width: 244px;
  }
`;

export const InputCalories = styled.input`
  width: 287px;
  padding: 8px 14px;
  border: ${theme.border.grey3};
  border-radius: 12px;
  background-color: transparent;
  color: ${theme.color.white};
  &:hover {
    border: ${theme.border.orange};
  }
  @media (min-width: ${theme.breakpoint.md}) {
    width: 155px;
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
  color: #efede8;
  opacity: 0.4;
  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 64px;
  }
`;

export const Span = styled.span`
  opacity: 1;
  color: #efede8;
`;

export const ErrorMessage = styled(FormikError)``;