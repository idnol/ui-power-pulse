import { useDispatch } from "react-redux";
import { Form,   FiltersContainer, SelectWrapper } from "./ProductsFilter.styled";
import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../../redux/products/api";
import { useSearchParams } from "react-router-dom";
import { QueryFilter } from "./QueryFilter/QueryFilter";
import { CategoryFilter } from "./CategoryFilter/CategoryFilter";
import { RecommendedFilter } from "./RecommendedFilter/RecommendedFilter";

export const ProductsFilter = ({onFilterChange, bloodGroup}) => {
 const dispatch = useDispatch();
 const [searchParams, setParams] = useSearchParams();
 const params = useMemo(
  () => Object.fromEntries([...searchParams]),
  [searchParams]
 );
 const { query = "", category = "", recommended = "all" } = params;

 const [isOpenCategory, setIsOpenCategory] = useState(false);
 const [isOpenRecommend, setIsOpenRecommend] = useState(false);

 useEffect(() => {
   dispatch(fetchProducts(params))
 }, [dispatch, params]);

//  const handleDropdownCategory = () => {
//   setIsOpenCategory(!isOpenCategory);
//  };
 const handleDropdownCategory = () => {
  setIsOpenCategory(!isOpenCategory);
};

 const handleDropdownRecommend = () => {
   setIsOpenRecommend(!isOpenRecommend);
 };

 const handleTitleChange = (event) => {
  searchParams.set('query', event.target.value);
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
   onFilterChange(params);
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
         onSubmit={handleSubmit}/>
            
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
  