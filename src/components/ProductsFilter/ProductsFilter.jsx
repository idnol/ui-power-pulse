import { Form,   FiltersContainer, SelectWrapper } from "./ProductsFilter.styled";
import {  useState } from "react";
import { useSearchParams } from "react-router-dom";
import { QueryFilter } from "./QueryFilter/QueryFilter";
import { CategoryFilter } from "./CategoryFilter/CategoryFilter";
import { RecommendedFilter } from "./RecommendedFilter/RecommendedFilter";

export const ProductsFilter = ({query, category, recommended, onFilterChange, bloodGroup}) => {
 const [searchParams, setParams] = useSearchParams();
 const [isOpenCategory, setIsOpenCategory] = useState(false);
 const [isOpenRecommend, setIsOpenRecommend] = useState(false);

 const handleDropdownCategory = () => {
  setIsOpenCategory(!isOpenCategory);
};

 const handleDropdownRecommend = () => {
   setIsOpenRecommend(!isOpenRecommend);
 };

 const handleTitleChange = (event) => {
  event.preventDefault();
  searchParams.set('query',  event.target.value);
  setParams(searchParams);
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
   onFilterChange(searchParams);
 };

 const handleCleanForm = () => {
  searchParams.set('query', "");
  setParams(searchParams);
 };

  return (
   <>
     <FiltersContainer>
       <Form onSubmit={handleSubmit}>
         <QueryFilter 
         query={query} 
         onTitleChange={handleTitleChange} 
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
  