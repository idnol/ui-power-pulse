import { useEffect } from "react";
import { ProductsFilter } from "../../components/ProductsFilter/ProductsFilter";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { fetchProducts } from "../../redux/products/api";
import { useDispatch } from "react-redux";

export default function ProductsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  return <>
  <h1>product</h1>
  <ProductsFilter/>
  <ProductsList/>
  </>
}