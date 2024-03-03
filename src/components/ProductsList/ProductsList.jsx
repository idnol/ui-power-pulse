import { ProductItem } from "../ProductItem/ProductItem"
import items from "../../products.json";
import {ListProducts, ProductsContainer} from "./ProductsList.styled"
// import { useSelector } from "react-redux";
// import { selectProducts } from "../../redux/products/selectors";

export const ProductsList = () => {
  // const items = useSelector(selectProducts);
  // const bloodGroup = useSelector(state=> state.user.blood)
  const bloodGroup = "1"
  return (
    <ProductsContainer>
   {items && <ListProducts>
      {items.map(product => (
        <li key={product._id.$oid}>
          <ProductItem product={product} bloodGroup={bloodGroup} />
        </li>
      ))}
    </ListProducts>}
    </ProductsContainer>
  )
}
