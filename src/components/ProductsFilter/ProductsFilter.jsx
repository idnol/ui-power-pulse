import { Formik,  } from "formik";
import { Form, SearchBtn, Field, ErrorMessage, FieldTitle, StyledOption, FiltersContainer, SelectWrapper, CategoryField, InputGroup, IconSearch, CleanBtn, IconClean } from "./ProductsFilter.styled";

export const ProductsFilter = () => {
    const categories =[
        "alcoholic drinks",
        "berries",
        "cereals",
        "dairy",
        "dried fruits",
        "eggs",
        "fish",
        "flour",
        "fruits",
        "meat",
        "mushrooms",
        "nuts",
        "oils and fats",
        "poppy",
        "sausage",
        "seeds",
        "sesame",
        "soft drinks",
        "vegetables and herbs"
    ];

    return (
        <FiltersContainer>
        <Formik
          initialValues={{
            title: "",
            category: "",
            recommended: "all",
          }}
          onSubmit={(values) => {
            console.log(values);
            // onAdd(values);
            // actions.resetForm();
          }}
        >
          <Form>
            <InputGroup>
               <label>
              <FieldTitle name="title" placeholder="Search"/>
              <CleanBtn type="submit" className="cleanBtn">
             <IconClean>
              <use href="/img/sprait.svg#x" />
             </IconClean>
            </CleanBtn>
              </label>

              

            <SearchBtn type="submit">
             <IconSearch>
              <use href="/img/sprait.svg#search" />
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
               <ErrorMessage name="category" component="span" />
             </label>
    
             <label>
               <Field as="select" name="recommended">
                 <StyledOption value="all">All</StyledOption>
                 <StyledOption value="recommended">Recommended</StyledOption>
                 <StyledOption value="not recommended">Not recommended</StyledOption>
               </Field>
               <ErrorMessage name="recommended" component="span" />
             </label>
           </SelectWrapper>
  
          </Form>
        </Formik>
      </FiltersContainer>
    )
  }
  