import { ProductItem } from "../ProductItem/ProductItem"
import {ListProducts, ProductsContainer} from "./ProductsList.styled"
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/selectors";

export const ProductsList = ({items, bloodGroup}) => {
  return (
    <ProductsContainer>
    <ListProducts>
      {items.map(product => (
        <li key={product._id}>
          <ProductItem item={product} bloodGroup={bloodGroup}/>
        </li>
      ))}
    </ListProducts>
    </ProductsContainer>
  )
}
