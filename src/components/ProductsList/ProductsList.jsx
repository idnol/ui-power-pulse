import { ProductItem } from "../ProductItem/ProductItem"
import products from "../../products.json";
import {ListProducts, ProductsContainer} from "./ProductsList.styled"
// import { useSelector } from "react-redux";

export const ProductsList = () => {
  // const bloodGroup = useSelector(state=> state.user.blood)
  const bloodGroup = "1"
  return (
    <ProductsContainer>
   <ListProducts>
      {products.map(product => (
        <li key={product._id.$oid}>
          <ProductItem product={product} bloodGroup={bloodGroup} />
        </li>
      ))}
    </ListProducts>
    </ProductsContainer>
  )
}
