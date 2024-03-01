import { ProductItem } from "../ProductItem/ProductItem"
import products from "../../products.json";
import { useSelector } from "react-redux";

export const ProductsList = () => {
  // const bloodGroup = useSelector(state=> state.user.blood)
  const bloodGroup = "1"
  return (
   <ul>
      {products.map(product => (
        <li key={product._id.$oid}>
          <ProductItem product={product} bloodGroup={bloodGroup} />
        </li>
      ))}
    </ul>
  )
}
