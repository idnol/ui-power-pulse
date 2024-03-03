import styled from "styled-components";
import {
    ErrorMessage as FormikError,
    Field as FormikField,
    Form as FormikForm,
  } from 'formik';
import {theme} from "../../vars";

export const FilterWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: ${theme.breakpoint.md}) {
    padding-top: 72px;
    padding-bottom: 32px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const FiltersContainer = styled.div`
 max-width: 335px;
 margin: 0 auto;
 margin-top: 40px;
 @media (min-width: ${theme.breakpoint.md}) {
            max-width: 664px;
            margin: 0;
            margin-top: 32px;
        }
        @media (min-width: ${theme.breakpoint.xl}) {
            margin-bottom: 0;
            margin-top: 0;
        }
`;

export const Form = styled(FormikForm)`
 display: flex;
 flex-direction: column;
 gap: 16px;
 @media (min-width: ${theme.breakpoint.md}) {
           flex-direction: row;
        }
`;

export const InputGroup = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 width: 335px;
 background: transparent;
 position: relative;
 @media (min-width: ${theme.breakpoint.md}) {
            width: 236px;
        }
 
`;

export const FieldTitle = styled(FormikField)`
 position: relative;
 display: inline-block;
 font-size: 14px;
 outline: none;
 border: none;
 width: 335px;
 border: ${theme.border.grey3};
 border-radius: 12px;
 overflow: hidden;
 padding: 14px; 
 background: transparent;
 color:  ${theme.color.white};
 &::placeholder {
  color: ${theme.color.white};
}
&:focus  {
  border: ${theme.border.orange};
}
&:not(:placeholder-shown) + .cleanBtn {
  display: block;
}
@media (min-width: ${theme.breakpoint.md}) {
            width: 236px;
            font-size: 16px;
        }
`;

export const CleanBtn = styled.button`
 position: absolute;
 top: 14px;
 right: 42px;
 width: 18px;
 height: 18px;
 cursor: pointer;
 outline: none;
 background-color: transparent;
 border: none;
 padding: 0;
 display: none;
`;

export const IconClean = styled.svg`
 width: 18px;
 height: 18px;
 stroke: ${theme.color.orange};
`;

export const SearchBtn = styled.button`
 position: absolute;
 right: 14px;
 display: inline-block;
 width: 18px;
 height: 18px;
 cursor: pointer;
 outline: none;
 background-color: transparent;
 border: none;
 padding: 0;
`;

export const IconSearch = styled.svg`
 width: 18px;
 height: 18px;
 stroke: ${theme.color.white};
`;

export const CategoryField = styled(FormikField)`
 border: ${theme.border.grey3};
 border-radius: 12px;
 padding: 14px;
 width: 146px;
 background: transparent;
 color:  ${theme.color.white};
 font-weight: 400;
 font-size: 14px;
 line-height: 1.29;
 scrollbar-width: none;
 &::-webkit-scrollbar {
  width: 6px;
  background: transparent; 
}
&::-webkit-scrollbar-thumb {
  border-radius: 12px;
}
@media (min-width: ${theme.breakpoint.md}) {
            width: 192px;
            font-size: 16px;
            line-height: 1.5;
        }
`;

export const Field = styled(FormikField)`
 border: ${theme.border.grey3};
 border-radius: 12px;
 padding: 14px;
 width: 173px;
 background: transparent;
 color:  ${theme.color.white};
 font-weight: 400;
 font-size: 14px;
 line-height: 1.29;
 @media (min-width: ${theme.breakpoint.md}) {
            width: 204px;
            font-size: 16px;
            line-height: 1.5;
        }
`;

export const StyledOption = styled.option`
 background-color: ${theme.color.darkGreySecond};
 /* font-size: 14px;
 line-height: 1.29;
 border-radius: 12px;
 padding: 14px 32px 14px 14px;
 width: 146px;
 height: 228px; */
`

export const ErrorMessage = styled(FormikError)`
 color: red;
 font-size: 14px;
`;

export const SelectWrapper = styled.div`
 display: flex;
 gap: 16px;
`;