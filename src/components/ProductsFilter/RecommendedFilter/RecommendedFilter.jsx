import { useEffect, useRef } from "react";
import { IconDown, OptionsContainer, SelectHeader, StyledOption } from "../ProductsFilter.styled"
import { RecommendedField } from "./RecommendedFilter.styled"
import sprite from 'assets/sprite-2.svg';

export const RecommendedFilter = ({label, isOpen, onToggle, onSelect, onCloseRecommended}) => {
 const recommendOptions =["All", "recommended", "not recommended"];
 const recommendRef = useRef(null);

 const handleClickOutside = (event) => {
   if (
     recommendRef.current &&
     !recommendRef.current.contains(event.target)
    ) {
     onCloseRecommended();
    }
 };

 useEffect(() => {
   document.addEventListener('mousedown', handleClickOutside);
   return () => {
    document.removeEventListener('mousedown', handleClickOutside);
   };
 });

  return (
    <RecommendedField>
      <SelectHeader onClick={onToggle}>
        {label}
     </SelectHeader>
     <IconDown>
       <use href={`${sprite}#arrow-down`} />
     </IconDown>

     <OptionsContainer ref={recommendRef} $isopen={isOpen}>
        {recommendOptions.map((recOption, index) => (
          <StyledOption key={index} onClick={() => onSelect(recOption)}>
            {recOption}
          </StyledOption>
        ))}
     </OptionsContainer>
   </RecommendedField>
  )
}
