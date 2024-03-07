import { useDispatch } from "react-redux";
import { Form, SearchBtn, RecommendedField, FieldTitle, StyledOption, FiltersContainer, SelectWrapper, CategoryField, InputGroup, IconSearch, CleanBtn, IconClean, SelectHeader, OptionsContainer } from "./ProductsFilter.styled";
import sprite from 'assets/sprite-2.svg';
import { useEffect, useMemo, useRef, useState } from "react";
import { IconDown } from "./ProductsFilter.styled";
import { fetchCategories, fetchProducts } from "../../redux/products/api";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

export const ProductsFilter = ({onFilterChange}) => {
  // const bloodGroup = useSelector(state=> state.user.blood)
  const bloodGroup = "1"

const [searchParams, setParams] = useSearchParams();
const params = useMemo(
  () => Object.fromEntries([...searchParams]),
  [searchParams]
);
const { query = "", category = "", recommended = "all" } = params;
console.log(params);

  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenRecommend, setIsOpenRecommend] = useState(false);
  const categoryRef = useRef(null);
  const recommendRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const recommendOptions =["All", "recommend", "not recommend"];
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
    dispatch(fetchProducts(params))
    console.log("dispatch in ProductsFilter", params);
  }, [dispatch, params]);

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
            <InputGroup>
               
               <FieldTitle type="text" name="query" placeholder="Search" value={query } onChange={handleTitleChange} />
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
                 {category || 'Category'}
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
                {recommended  || 'All'}
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
  