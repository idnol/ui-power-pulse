import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/api';
import { ProductsFilter } from '../../components/ProductsFilter/ProductsFilter';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import {FilterWrapper} from '../../components/ProductsFilter/ProductsFilter.styled';
import {
  selectError,
  selectIsLoading,
  selectProducts,
} from '../../redux/products/selectors';
import { Loader } from '../../components/parts/Loader/Loader';
import { ProductsError } from '../../components/ProductsError/ProductsError';
import { ProductsTitle, Wrapper, ProductsSection, HeaderInner } from './ProductsPage.styled.js';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ProductsPage() {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const bloodGroup = useSelector(state=> state.auth.user.bodyData?.blood) ?? "1";
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const params = useMemo(
   () => Object.fromEntries([...searchParams]),
   [searchParams]
  );
  const { query = "", category = "", recommended = "all" } = params;
  
   useEffect(() => {
   dispatch(fetchProducts(params))
 }, [dispatch, params]);

  const handleFilterChange = (newParams) => {
    dispatch(fetchProducts(newParams));
  };

  return (
    <>
      <ProductsSection>
        <HeaderInner/>
        <div className="container">
            <Wrapper>
             <FilterWrapper>
               <ProductsTitle>Products</ProductsTitle>

               <ProductsFilter 
               query={query}
               category={category}
               recommended={recommended}
               onFilterChange={handleFilterChange}
               bloodGroup={bloodGroup} />
             </FilterWrapper>

             {isLoading && <Loader />}

             {products.length > 0 && <ProductsList items={products} bloodGroup={bloodGroup} />}
             
             {error || products.length === 0 && <ProductsError />}
            </Wrapper>
        </div>
      </ProductsSection>

    </>
  );
}
