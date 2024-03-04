import { Form, SearchBtn, FecommendedField, FieldTitle, StyledOption, FiltersContainer, SelectWrapper, CategoryField, InputGroup, IconSearch, CleanBtn, IconClean } from "./ProductsFilter.styled";
import sprite from 'assets/sprite-2.svg';

export const ProductsFilter = ({categories}) => {
    return (
        <FiltersContainer>
          <Form>
            <InputGroup>
               <label>
               <FieldTitle name="title" placeholder="Search"/>
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
             <label>
               <CategoryField as="select" name="category">
               <StyledOption value="" defaultValue hidden>Categories</StyledOption>
              { categories.map((item, index) => {
                 return <StyledOption key={index} value={item}>{item}</StyledOption>
              })}  
               </CategoryField>
             </label>
    
             <label>
               <FecommendedField as="select" name="recommended">
                 <StyledOption value="all">All</StyledOption>
                 <StyledOption value="recommended">Recommended</StyledOption>
                 <StyledOption value="not recommended">Not recommended</StyledOption>
               </FecommendedField>
             </label>
           </SelectWrapper>
  
          </Form>
          </FiltersContainer>
    )
  }
  