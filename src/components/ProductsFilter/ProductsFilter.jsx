import { useDispatch } from "react-redux";
import { Form, SearchBtn, RecommendedField, FieldTitle, StyledOption, FiltersContainer, SelectWrapper, CategoryField, InputGroup, IconSearch, CleanBtn, IconClean, SelectHeader, OptionsContainer } from "./ProductsFilter.styled";
import sprite from 'assets/sprite-2.svg';
import { findProducts } from "../../redux/products/filterSlice";
import { useEffect, useRef, useState } from "react";

export const ProductsFilter = ({categories}) => {
  // const [titleValue, setTitleValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRecommended, setSelectedRecommended] = useState(null);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenReccomend, setIsOpenReccomend] = useState(false);
  const selectRef = useRef(null);
  const recommendOptions =["All", "Recommend", "Not recommend"]
  const dispatch = useDispatch();
  const handleFilter = filters => dispatch(findProducts(filters));

  // const newFilters = {title: titleValue, category: selectedCategory, recommended: selectedRecommended}
  // const handleTitleChange = (event) => {
  //   setTitleValue(event.target.value);
  // };
  const handleDropdownCategory = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  const handleDropdownRecommend = () => {
    setIsOpenReccomend(!isOpenReccomend);
  };

  const handleOptionSelectCategory = (option) => {
    setSelectedCategory({category: option});
    setIsOpenCategory(false);
  };

  const handleOptionSelectRecommended = (option) => {
    setSelectedRecommended({recommended: option});
    setIsOpenReccomend(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpenCategory(false);
      setIsOpenReccomend(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    return (
        <FiltersContainer>
          <Form onSubmit={evt => handleFilter(evt.target.value)}>
            <InputGroup>
               <label>
               <FieldTitle type="text" name="title" placeholder="Search"  />
               <CleanBtn type="submit" className="cleanBtn">
                <IconClean>
                 <use href={`${sprite}#x`} />
                </IconClean>
               </CleanBtn>
              </label>

             <SearchBtn type="submit">
             <IconSearch>
              <use href={`${sprite}#search`} />
             </IconSearch>
             </SearchBtn>
           </InputGroup>
            
  
            <SelectWrapper>

             <CategoryField>
               <SelectHeader onClick={handleDropdownCategory}>
               {selectedCategory || 'Category'}
               </SelectHeader>
                <OptionsContainer $isopen={isOpenCategory}>
                {categories.map((option, index) => (
                  <StyledOption key={index} onClick={() => handleOptionSelectCategory(option)}>
                  {option}
                 </StyledOption>
                ))}
               </OptionsContainer>
              </CategoryField>
            
              <RecommendedField>
               <SelectHeader onClick={handleDropdownRecommend}>
                {selectedRecommended || 'All'}
               </SelectHeader>
               <OptionsContainer $isopen={isOpenReccomend}>
                {recommendOptions.map((recOption, index) => (
                 <StyledOption key={index} onClick={() => handleOptionSelectRecommended(recOption)}>
                 {recOption}
                 </StyledOption>
                 ))}
               </OptionsContainer>
              </RecommendedField>
            
            </SelectWrapper>
  
          </Form>
       </FiltersContainer>
    )
  }
  