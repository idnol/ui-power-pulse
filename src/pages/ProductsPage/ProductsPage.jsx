import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/api";
import { ProductsFilter } from "../../components/ProductsFilter/ProductsFilter";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { ProductsSection } from "../../components/ProductsList/ProductsList.styled";
import { FilterWrapper } from "../../components/ProductsFilter/ProductsFilter.styled";
import { fetchCategories } from "../../redux/products/api";
import { selectFilter, selectProducts } from "../../redux/products/selectors";

export default function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const filters = useSelector(selectFilter);
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Dispatching fetchProducts");
   dispatch(fetchProducts(filters));
  }, [dispatch, filters]);


  useEffect(()=> {
    async function getCategories() {
      try {
        const categories = await fetchCategories();
        setCategories(categories);
      } catch (error) {
       console.log(error);
      } finally {
        // setIsLoading(false);
      }
    }

    getCategories();
  },[])

  return <ProductsSection>
    <div className='container'>
      <FilterWrapper>
       <h2>Products</h2>
       < ProductsFilter categories={categories}/>
      </FilterWrapper>
     {products.length>0 &&<ProductsList />}
    </div>
  </ProductsSection>
}