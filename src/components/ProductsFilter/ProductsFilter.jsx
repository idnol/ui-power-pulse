import { Formik,  } from "formik";
import * as Yup from 'yup';
import { Form,FormGroup, SearchBtn, Field, ErrorMessage, FieldTitle } from "./ProductsFilter.styled";

const productSchema = Yup.object().shape({
    title: Yup.string(),
    category: Yup.string(),
    recommended: Yup.string()
      .oneOf(['all', 'recommended', 'not recommended']),
  });

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
        <div>
        <Formik
          initialValues={{
            title: "",
            category: "",
            recommended: "all",
          }}
          validationSchema={productSchema}
          onSubmit={(values) => {
            console.log(values);
            // onAdd(values);
            // actions.resetForm();
          }}
        >
          <Form>
            <FormGroup>
              
              <FieldTitle name="title" placeholder="Search"/>
              <ErrorMessage name="title" component="span" />
            </FormGroup>
  
            <label>
              <Field as="select" name="category">
              <option value="" disabled selected hidden>Categories</option>
             { categories.map(item => {
                return <option key={item.index} value={item}>{item}</option>
             })}
                
              </Field>
              <ErrorMessage name="category" component="span" />
            </label>
    
  
            <label>
              <Field as="select" name="recommended">
                <option value="all">All</option>
                <option value="recommended">Recommended</option>
                <option value="not recommended">Not recommended</option>
              </Field>
              <ErrorMessage name="recommended" component="span" />
            </label>
  
            <SearchBtn type="submit">
            <svg style={{
            width: '18',
            height: '18',
            stroke:"#EFEDE8",
          }} >
           <use href="/img/sprait.svg#search" />
          </svg>
            </SearchBtn>
          </Form>
        </Formik>
      </div>
    )
  }
  