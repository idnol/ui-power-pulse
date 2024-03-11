import {
  CaloriesItem,
  CategoryItem,
  DeleteBtn,
  DeleteItem,
  RecommendItem,
  RowItem,
  ScrollContainer,
  SvgBasket,
  SvgCircle,
  Table,
  TitleItem,
  WeightItem,
  HeaderTitle,
  HeaderCategory,
  HeaderCalories,
  HeaderWeight,
  HeaderRecommend,
  Thead,
  Header,
} from './TableProducts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../redux/diary/diarySelectors.js';
import { removeProduct } from '../../redux/diary/api.js';

export const TableProducts = ({ products, onDeleteProduct }) => {
  const productsItems = useSelector(selectProducts);
  const dispatch = useDispatch();
  const bloodGroup = useSelector(state=> state.auth.user.bodyData?.blood) ?? "1";

  return (
    <>
      <Header>
        <HeaderTitle>Title</HeaderTitle>
        <HeaderCategory>Category</HeaderCategory>
        <HeaderCalories>Calories</HeaderCalories>
        <HeaderWeight>Weight</HeaderWeight>
        <HeaderRecommend>Recommend</HeaderRecommend>
        <p> </p>
      </Header>
      <ScrollContainer>
        <Table>
          <Thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Calories</th>
              <th>Weight</th>
              <th>Recommend</th>
              <th>Delete</th>
            </tr>
          </Thead>
          <tbody>
            {productsItems.map((product) => (
              <RowItem key={product._id}>
                <TitleItem>{product.product.title}</TitleItem>
                <CategoryItem>{product.product.category}</CategoryItem>
                <CaloriesItem>{product.calories}</CaloriesItem>
                <WeightItem>{product.weight}</WeightItem>
                {product.product.groupBloodNotAllowed[bloodGroup] ? (
                  <RecommendItem>
                    <SvgCircle>
                      <use href="/img/sprait.svg#circle" fill="#419B09" />
                    </SvgCircle>
                    Yes
                  </RecommendItem>
                ) : (
                  <RecommendItem>
                    <SvgCircle>
                      <use href="/img/sprait.svg#circle" fill="#e9101d" />
                    </SvgCircle>
                    No
                  </RecommendItem>
                )}
                <DeleteItem>
                  <DeleteBtn onClick={() => dispatch(removeProduct({ id: product._id, calories: product.calories }))}>
                  {/*<DeleteBtn onClick={() => dispatch(removeProduct({ product._id, products.calories }))}>*/}
                    <SvgBasket>
                      <use href="/img/sprait.svg#trash" />
                    </SvgBasket>
                  </DeleteBtn>
                </DeleteItem>
              </RowItem>
            ))}
          </tbody>
        </Table>
      </ScrollContainer>
    </>
  );
};
