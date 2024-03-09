import { IconDown, OptionsContainer, SelectHeader, StyledOption } from "../ProductsFilter.styled"
import { CategoryField } from "./CategoryFilter.styled"
import { useEffect,  useRef,  useState } from "react";
import { fetchCategories } from "../../../redux/products/api";
import sprite from 'assets/sprite-2.svg';
import { toast } from "react-toastify";


export const CategoryFilter = ({ label, onSelect, onToggle, isOpen, onCloseCategory}) => {
 const [categories, setCategories] = useState([]);
 const [error, setError] = useState(null);
 const categoryRef = useRef(null);

 useEffect(()=> {
  async function getCategories() {
    try {
      setError(null);
      const categories = await fetchCategories();
      setCategories(categories);
    } catch (error) {
      setError(true);
    } 
  }
  getCategories();
 },[]);

  const handleClickOutside = (event) => {
   if (
    categoryRef.current &&
    !categoryRef.current.contains(event.target)
  ) {
    onCloseCategory();
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

     <OptionsContainer ref={categoryRef} $isopen={isOpen}>
       {categories.map((option, index) => (
         <StyledOption key={index} onClick={() => onSelect(option)}>
          {option}
         </StyledOption>
        ))}
     </OptionsContainer>
   </CategoryField>

   {error && toast.error(
    'Something went wrong! Please try again.'
   )}
 </>
  )
}
