import { ProductItem } from "../ProductItem/ProductItem"
import {ListProducts, ProductsContainer} from "./ProductsList.styled"
// import { useSelector } from "react-redux";
// import { selectProducts } from "../../redux/products/selectors";

const items = [{
  "_id": "5d51694902b2373622ff5773",
  "weight": 100,
  "calories": 340,
  "category": "dairy",
  "title": "Danbo cheese",
  "groupBloodNotAllowed": {
    "1": true,
    "2": true,
    "3": false,
    "4": false
  }
},{
  "_id": "5d51694902b2373622ff5b7f",
  "weight": 100,
  "calories": 112,
  "category": "fish",
  "title": "marlin",
  "groupBloodNotAllowed": {
    "1": false,
    "2": false,
    "3": false,
    "4": false
  }
},{
  "_id": "5d51694902b2373622ff5e13",
  "weight": 100,
  "calories": 17,
  "category": "vegetables and herbs",
  "title": "Salads Belaya Dacha Delicate root",
  "groupBloodNotAllowed": {
    "1": false,
    "2": false,
    "3": false,
    "4": false
  }
},
{
  "_id": "5d51694902b2373622ff57730",
  "weight": 100,
  "calories": 340,
  "category": "dairy",
  "title": "Danbo cheese",
  "groupBloodNotAllowed": {
    "1": true,
    "2": true,
    "3": false,
    "4": false
  }
},{
  "_id": "5d51694902b2373622ff5b8f",
  "weight": 100,
  "calories": 112,
  "category": "fish",
  "title": "marlin",
  "groupBloodNotAllowed": {
    "1": false,
    "2": false,
    "3": false,
    "4": false
  }
},{
  "_id": "5d51694902b2373622ff5e18",
  "weight": 100,
  "calories": 17,
  "category": "vegetables and herbs",
  "title": "Salads Belaya Dacha Delicate root",
  "groupBloodNotAllowed": {
    "1": false,
    "2": false,
    "3": false,
    "4": false
  }
},
{
  "_id": "5d51694902b2373622ff5778",
  "weight": 100,
  "calories": 340,
  "category": "dairy",
  "title": "Danbo cheese",
  "groupBloodNotAllowed": {
    "1": true,
    "2": true,
    "3": false,
    "4": false
  }
},{
  "_id": "5d51694902b2373622ff5b6f",
  "weight": 100,
  "calories": 112,
  "category": "fish",
  "title": "marlin",
  "groupBloodNotAllowed": {
    "1": false,
    "2": false,
    "3": false,
    "4": false
  }
},{
  "_id": "5d51694902b2373622ff5e15",
  "weight": 100,
  "calories": 17,
  "category": "vegetables and herbs",
  "title": "Salads Belaya Dacha Delicate root",
  "groupBloodNotAllowed": {
    "1": false,
    "2": false,
    "3": false,
    "4": false
  }
}
]
export const ProductsList = () => {
  // const items = useSelector(selectProducts);
  // const bloodGroup = useSelector(state=> state.user.blood)
  const bloodGroup = "1"
  return (
    <ProductsContainer>
   {items && <ListProducts>
      {items.map(product => (
        <li key={product._id}>
          <ProductItem product={product} bloodGroup={bloodGroup} />
        </li>
      ))}
    </ListProducts>}
    </ProductsContainer>
  )
}
