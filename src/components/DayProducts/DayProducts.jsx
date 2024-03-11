import {
  StyledAddNavLink,
  SvgArrow,
  Title,
  WrapperAdd,
  BoxDayDiary,
  TextNoFound,
} from './DayProducts.styled.jsx';
import { TableProducts } from '../TableProducts/TableProducts.jsx';
import {  useSelector } from 'react-redux';
import { selectIsLoading, selectProducts } from '../../redux/diary/diarySelectors.js';
import { Loader } from '../parts/Loader/Loader.jsx';

export const DayProducts = () => {
  const productsItems = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <BoxDayDiary>
        <WrapperAdd>
          <Title>Products</Title>
          <StyledAddNavLink to="/products">
            Add product
            <SvgArrow>
              <use href="/img/sprait.svg#icon-Icon" />
            </SvgArrow>
          </StyledAddNavLink>
        </WrapperAdd>
        {isLoading ?  <Loader /> : (!productsItems.length ? (<TextNoFound>Not found products</TextNoFound>) : (<TableProducts />))}
      </BoxDayDiary>
    </>
  );
};
