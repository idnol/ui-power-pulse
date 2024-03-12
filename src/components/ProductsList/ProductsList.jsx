import { ProductItem } from "../ProductItem/ProductItem"
import {ListProducts, ProductsContainer} from "./ProductsList.styled"

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
