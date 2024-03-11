import { Form,   FiltersContainer, SelectWrapper } from "./ProductsFilter.styled";
import {  useState } from "react";
import { useSearchParams } from "react-router-dom";
import { QueryFilter } from "./QueryFilter/QueryFilter";
import { CategoryFilter } from "./CategoryFilter/CategoryFilter";
import { RecommendedFilter } from "./RecommendedFilter/RecommendedFilter";

export const ProductsFilter = ({category, recommended, bloodGroup}) => {
 const [searchParams, setParams] = useSearchParams();
 const [isOpenCategory, setIsOpenCategory] = useState(false);
 const [isOpenRecommend, setIsOpenRecommend] = useState(false);
 const [inputValue, setInputValue] = useState('');
  
 const handleInputChange = (e) => {
   setInputValue(e.target.value);
 };

 const handleDropdownCategory = () => {
  setIsOpenCategory(!isOpenCategory);
};

 const handleDropdownRecommend = () => {
   setIsOpenRecommend(!isOpenRecommend);
 };

 const handleSelectCategory = (option) => {
  searchParams.set('category', option);
  setParams(searchParams);
  setIsOpenCategory(false);
 };

 const handleSelectRecommended = (option) => {
  searchParams.set('recommended', option);
  searchParams.set('blood', bloodGroup);
  setParams(searchParams);
  setIsOpenRecommend(false);
 };

 const handleSubmit = (event) => {
   event.preventDefault();
   searchParams.set('query', event.target[0].value);
   setParams(searchParams);
 };

 const handleCleanForm = () => {
   searchParams.set('query', "");
   setParams(searchParams);
   setInputValue('');
 };

  return (
   <>
     <FiltersContainer>
       <Form>
         <QueryFilter 
         inputValue={inputValue}
         onChange={handleInputChange}
         onSubmit={handleSubmit} 
         onCleanForm={handleCleanForm} 
         />
        
         <SelectWrapper>
           <CategoryFilter 
             label={category || 'Category'} 
             isOpen={isOpenCategory}
             onToggle={handleDropdownCategory} 
             onSelect={handleSelectCategory}
             />
          
           <RecommendedFilter
             label={recommended || 'All'} 
             isOpen={isOpenRecommend}
             onToggle={handleDropdownRecommend}
             onSelect={handleSelectRecommended}
            />
         </SelectWrapper>
        </Form>
     </FiltersContainer>
 </>
 )
}
  