import { IconDown, OptionsContainer, SelectHeader, StyledOption } from "../ProductsFilter.styled"
import { CategoryField } from "./CategoryFilter.styled"
import { useEffect,  useRef,  useState } from "react";
import { fetchCategories } from "../../../redux/products/api";
import sprite from 'assets/sprite-2.svg';
import {toast} from 'react-hot-toast';

export const CategoryFilter = ({ label, onSelect, onToggle, isOpen}) => {
 const [categories, setCategories] = useState([]);
 const categoryRef = useRef(null);

 useEffect(()=> {
  async function getCategories() {
    try {
      const categories = await fetchCategories();
      setCategories(categories);
    } catch (error) {
      return toast.error(`Something went wrong! Please try again!`)
    } 
  }
  getCategories();
 },[]);

  const handleClickOutside = (event) => {
   if (
    categoryRef.current &&
    !categoryRef.current.contains(event.target)
  ) {
    onToggle();
   }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return ( <>
   <CategoryField>
     <SelectHeader onClick={onToggle}>
       {label}
     </SelectHeader>
     <IconDown>
       <use href={`${sprite}#arrow-down`} />
     </IconDown>

    {isOpen && <OptionsContainer ref={categoryRef}>
       <StyledOption onClick={() => onSelect("")}>
          {"All"}
        </StyledOption>
       {categories.map((option, index) => (
         <StyledOption key={index} onClick={() => onSelect(option)}>
          {option}
         </StyledOption>
        ))}
     </OptionsContainer>}
   </CategoryField>
 </>
  )
}
