import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/api';
import { ProductsFilter } from '../../components/ProductsFilter/ProductsFilter';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { ProductsSection } from '../../components/ProductsList/ProductsList.styled';
import {
  FilterWrapper,
  ProductsTitle,
} from '../../components/ProductsFilter/ProductsFilter.styled';
import {
  selectError,
  selectIsLoading,
  selectProducts,
} from '../../redux/products/selectors';
import { Loader } from '../../components/parts/Loader/Loader';
import { ProductsError } from '../../components/ProductsError/ProductsError';
import { Wrapper } from './ProductsPage.styled.js';

export default function ProductsPage() {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const bloodGroup = useSelector(state=> state.auth.user.bodyData.blood);
  const dispatch = useDispatch();

  const handleFilterChange = (params) => {
    dispatch(fetchProducts(params));
  };

  return (
    <>

      <ProductsSection>
        <div className="container">
          <div className="row">
            <Wrapper>
            <FilterWrapper>
              <ProductsTitle>Products</ProductsTitle>
              <ProductsFilter onFilterChange={handleFilterChange} bloodGroup={bloodGroup} />
            </FilterWrapper>
            {isLoading && <Loader />}
            {products.length > 0 && <ProductsList bloodGroup={bloodGroup} />}
            {error || products.length === 0 && <ProductsError />}
            </Wrapper>
          </div>
        </div>
      </ProductsSection>

    </>
  );
}
