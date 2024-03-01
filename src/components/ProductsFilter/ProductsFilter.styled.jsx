import styled from "styled-components";
import {
    ErrorMessage as FormikError,
    Field as FormikField,
    Form as FormikForm,
  } from 'formik';
import {theme} from "../../vars";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 335px;
`;

export const FormGroup = styled.label`
  /* display: flex;
  flex-direction: column;
  gap: 6px; */
  background: transparent;
  color:  ${theme.color.white};
`;
export const FieldTitle = styled(FormikField)`
  border: ${theme.border.grey3};
 border-radius: 12px;
 padding: 14px;
 width: 335px;
  background: transparent;
  color:  ${theme.color.white};
`;

export const Field = styled(FormikField)`
  border: ${theme.border.grey3};
 border-radius: 12px;
 padding: 14px;

  background: transparent;
  color:  ${theme.color.white};
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 14px;
`;

export const SearchBtn = styled.button`
background-color: transparent;
border: none;
padding: 0;
`;