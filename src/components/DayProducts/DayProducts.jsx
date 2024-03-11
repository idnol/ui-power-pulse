import { useState } from 'react';
import {
  StyledAddNavLink,
  SvgArrow,
  Title,
  WrapperAdd,
  BoxDayDiary,
  TextNoFound,
} from './DayProducts.styled.jsx';
import { TableProducts } from '../TableProducts/TableProducts.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../redux/diary/diarySelectors.js';
import { removeProduct } from '../../redux/diary/api.js';

const listOfProducts = [
  {
    id: '1',
    title: 'Rice semolina Garnets glute',
    category: 'Cereals',
    calories: '340',
    weight: '100',
    recommended: true,
  },
  {
    id: '2',
    title: 'Venison stew Special',
    category: 'Meat',
    calories: '81',
    weight: '100',
    recommended: false,
  }
];

export const DayProducts = () => {
  const [products, setProducts] = useState(listOfProducts);
  const productsItems = useSelector(selectProducts);
  const dispatch = useDispatch();
  const handleDeleteProduct = (id, calories) => {
    dispatch(removeProduct({ id, calories }));
    // setProducts((prevProducts) =>
    //   prevProducts.filter((product) => product.id !== id)
    // );
  };

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

        {!products.length ? (
          <TextNoFound>Not found products</TextNoFound>
        ) : (
          <TableProducts
            products={products}
            onDeleteProduct={handleDeleteProduct}
          />
        )}
      </BoxDayDiary>
    </>
  );
};
