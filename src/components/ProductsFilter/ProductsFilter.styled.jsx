import styled from "styled-components";
import {theme} from "../../vars";

export const FilterWrapper = styled.div`
  max-width: 335px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: ${theme.breakpoint.md}) {
    max-width: 668px;
    margin: 0;
    padding-top: 72px;
    padding-bottom: 32px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    max-width: 1248px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FiltersContainer = styled.div`
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

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${theme.breakpoint.md}) {
    flex-direction: row;
  }
`;

export const SelectHeader = styled.div` 
  font-size: 14px;
  line-height: 1.29;
  padding: 14px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  &::first-letter {
    text-transform: capitalize;
  }
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const IconDown = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${theme.color.white};
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 1;
`;

export const OptionsContainer = styled.ul`
  list-style: none;
  padding: 14px 32px 14px 14px;
  margin: 0;
  position: absolute;
  top: 103%; 
  left: 0; 
  width: 100%;
  max-height: 228px;
  overflow-y: scroll;
  border: none;
  border-radius: 12px;
  background-color: ${theme.color.darkGreySecond};
  z-index: 100;
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
  color:  ${theme.color.white};
  font-size: 14px;
  line-height: 1.29;
  border-radius: 12px;
  margin-bottom: 8px;
  cursor: pointer;
  &::first-letter {
    text-transform: capitalize;
  }
   &:hover {
    background-color: ${theme.color.grey};
  }
   @media (min-width: ${theme.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 16px;
`;