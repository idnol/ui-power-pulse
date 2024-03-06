<<<<<<< Updated upstream
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/api";
import { ProductsFilter } from "../../components/ProductsFilter/ProductsFilter";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { ProductsSection } from "../../components/ProductsList/ProductsList.styled";
import { FilterWrapper, ProductsTitle } from "../../components/ProductsFilter/ProductsFilter.styled";
import { selectError, selectIsLoading, selectProducts } from "../../redux/products/selectors";
import { Loader } from "../../components/parts/Loader/Loader";
import { ProductsError } from "../../components/ProductsError/ProductsError";

export default function ProductsPage() {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleFilterChange = (filters) => {
    dispatch(fetchProducts(filters));
  };

  return <>
  <ProductsSection>
    <div className='container'>
      <FilterWrapper>
       <ProductsTitle>Products</ProductsTitle>
       < ProductsFilter onFilterChange={handleFilterChange}/>
      </FilterWrapper>
      {isLoading && <Loader/>}
     {products.length>0  &&<ProductsList />}
     {error && <ProductsError/>}
    </div>
  </ProductsSection>
  </>
}
=======
import { useState } from 'react';
import {AddProductForm} from '../../components/AddProductForm/ModalProducts/AddProductForm'
import { AddProductSuccess } from '../../components/AddProductSuccess/AddProductSuccess';

export default function ProductsPage() {
  const [isModalOpen, setIsModal] = useState(false);
   const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false)
  // const [isModalWaistOpen, setIsModalWaistOpen] = useState(false)

  return (
    <>
      <h1>product</h1>
      <button
        style={{
          position: 'relative',
        }}
        type="button"
        onClick={() => setIsModal(true)}
      >
        Open
      </button>
      <button
        style={{
          position: 'relative',
        }}
        type="button"
        onClick={() => setIsModalSuccessOpen(true)}
      >
        Open Success
      </button>

      <button
        style={{
          position: 'relative',
        }}
        type="button"
        onClick={() => setIsModalWaistOpen(true)}
      >
        Open Waist
      </button>

      <AddProductForm isOpen={isModalOpen} onClose={() => setIsModal(false)}/>
      <AddProductSuccess isOpen={isModalSuccessOpen} onClose={() => setIsModalSuccessOpen(false)}/>
    </>
  );
}
>>>>>>> Stashed changes
