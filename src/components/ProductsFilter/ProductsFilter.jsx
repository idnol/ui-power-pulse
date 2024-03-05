import { useDispatch } from "react-redux";
import { Form, SearchBtn, RecommendedField, FieldTitle, StyledOption, FiltersContainer, SelectWrapper, CategoryField, InputGroup, IconSearch, CleanBtn, IconClean, SelectHeader, OptionsContainer } from "./ProductsFilter.styled";
import sprite from 'assets/sprite-2.svg';
import { findProducts } from "../../redux/products/filterSlice";
import { useEffect, useRef, useState } from "react";
import { IconDown } from "./ProductsFilter.styled";
import { fetchCategories } from "../../redux/products/api";
import { toast } from "react-toastify";

export const ProductsFilter = () => {
  const [newFilters, setNewFilters] = useState({
    title: '',
    category: '',
    recommended: 'all',
  });

  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenRecommend, setIsOpenRecommend] = useState(false);
  const categoryRef = useRef(null);
  const recommendRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const recommendOptions =["all", "recommend", "not recommend"]
  const dispatch = useDispatch();
  
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

  useEffect(() => {
    dispatch(findProducts(newFilters))
  }, [newFilters, dispatch]);

  const handleDropdownCategory = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  const handleDropdownRecommend = () => {
    setIsOpenRecommend(!isOpenRecommend);
  };

  const handleTitleChange = (event) => {
    setNewFilters((prevFilters) => ({ ...prevFilters, title: event.target.value }));
  };

  const handleSelectCategory = (option) => {
    setNewFilters((prevFilters) => ({ ...prevFilters, category: option }));
    setIsOpenCategory(false);
  };

  const handleSelectRecommended = (option) => {
    setNewFilters((prevFilters) => ({ ...prevFilters, recommended: option }));
    setIsOpenRecommend(false);
  };

  const handleClickOutside = (event) => {
    if (
      categoryRef.current &&
      !categoryRef.current.contains(event.target)
    ) {
      setIsOpenCategory(false);
    }
    if (
      recommendRef.current &&
      !recommendRef.current.contains(event.target)
    ) {
      setIsOpenRecommend(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(findProducts(newFilters))
  };

  const handleCleanForm = () => {
    setNewFilters((prevFilters) => ({ ...prevFilters, title: ""}));
  };

    return (
      <>
        <FiltersContainer>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
               
               <FieldTitle type="text" name="title" placeholder="Search" value={newFilters.title } onChange={handleTitleChange} />
               <CleanBtn type="button" className="cleanBtn" onClick={handleCleanForm}>
                <IconClean>
                 <use href={`${sprite}#x`} />
                </IconClean>
               </CleanBtn>
              

             <SearchBtn type="submit" onSubmit={handleSubmit}>
             <IconSearch>
              <use href={`${sprite}#search`} />
             </IconSearch>
             </SearchBtn>
           </InputGroup>
            
  
            <SelectWrapper>

             <CategoryField>
               <SelectHeader onClick={handleDropdownCategory}>
               {newFilters.category || 'Category'}
               </SelectHeader>
               <IconDown>
               <use href={`${sprite}#arrow-down`} />
               </IconDown>
        
                <OptionsContainer ref={categoryRef} $isopen={isOpenCategory}>
                {categories.map((option, index) => (
                  <StyledOption key={index} onClick={() => handleSelectCategory(option)}>
                  {option}
                 </StyledOption>
                ))}
               </OptionsContainer>
              </CategoryField>
            
              <RecommendedField>
               <SelectHeader onClick={handleDropdownRecommend}>
                {newFilters.recommended  || 'All'}
               </SelectHeader>
               <IconDown>
               <use href={`${sprite}#arrow-down`} />
               </IconDown>
               <OptionsContainer ref={recommendRef} $isopen={isOpenRecommend}>
                {recommendOptions.map((recOption, index) => (
                 <StyledOption key={index} onClick={() => handleSelectRecommended(recOption)}>
                 {recOption}
                 </StyledOption>
                 ))}
               </OptionsContainer>
              </RecommendedField>
            
            </SelectWrapper>
          </Form>
       </FiltersContainer>
       {error && toast.error(
          'Something went wrong! Please try again.'
        )}
    </>
    )
  }
  