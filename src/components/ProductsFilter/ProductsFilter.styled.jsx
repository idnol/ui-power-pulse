import styled from "styled-components";
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

export const Form = styled.form`
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

export const FieldTitle = styled.input`
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

export const CategoryField = styled.div`
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
 position: relative;
 display: inline-block;
 /* &::-webkit-scrollbar {
  width: 6px;
  background: transparent; 
}
&::-webkit-scrollbar-thumb {
  border-radius: 12px;
} */

@media (min-width: ${theme.breakpoint.md}) {
            width: 192px;
            font-size: 16px;
            line-height: 1.5;
        }
`;

export const RecommendedField = styled.div`
 border: ${theme.border.grey3};
 border-radius: 12px;
 padding: 14px;
 width: 173px;
 background: transparent;
 color:  ${theme.color.white};
 font-weight: 400;
 font-size: 14px;
 line-height: 1.29;
 position: relative;
 display: inline-block;
 @media (min-width: ${theme.breakpoint.md}) {
            width: 204px;
            font-size: 16px;
            line-height: 1.5;
        }
`;

export const SelectHeader = styled.div` 
  font-size: 14px;
  line-height: 1.29;
  cursor: pointer;
`;

export const OptionsContainer = styled.ul`
  list-style: none;
  padding: 14px 42px 14px 14px;
  margin: 0;
  position: absolute;
  top: 101%; 
  left: 0; 
  width: 100%;
  max-height: 228px;
  overflow-y: scroll;
  border: none;
  border-radius: 12px;
  background-color: ${theme.color.darkGreySecond};
  z-index: 100;
  display: ${({ $isopen }) => ($isopen ? 'block' : 'none')};
  &::-webkit-scrollbar {
            width: 6px;
           }
          &::-webkit-scrollbar-track {
            background-color: transparent;
            border-radius: 12px;
           } 
           &::-webkit-scrollbar-thumb {
            background-color: ${theme.color.greySixth};
            border-radius: 12px;
            height: 147px;
           }
`;



export const StyledOption = styled.li`
 background-color: ${theme.color.darkGreySecond};
 /* font-size: 16px;
 line-height: 150%; */
 color:  ${theme.color.white};
 font-size: 14px;
 line-height: 1.29;
 margin-bottom: 8px;
 cursor: pointer;
 &:first-of-type {
  text-transform: capitalize;
}
  &:hover {
    background-color: ${theme.color.grey};
  }
`;

export const SelectWrapper = styled.div`
 display: flex;
 gap: 16px;
`;