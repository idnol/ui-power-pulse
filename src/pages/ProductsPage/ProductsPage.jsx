// import { useEffect } from "react";
// import { fetchProducts } from "../../redux/products/api";
// import { useDispatch } from "react-redux";
import { ProductsFilter } from "../../components/ProductsFilter/ProductsFilter";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { ProductsSection } from "../../components/ProductsList/ProductsList.styled";
import { FilterWrapper } from "../../components/ProductsFilter/ProductsFilter.styled";

export default function ProductsPage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);
  
  return <ProductsSection>
  <FilterWrapper>
  <h2>Products</h2>
  < ProductsFilter/>
  </FilterWrapper>
  <ProductsList/>
  </ProductsSection>
}