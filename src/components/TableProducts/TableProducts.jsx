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

export const TableProducts = ({ products, onDeleteProduct }) => {
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
            {products.map((product) => (
              <RowItem key={product.id}>
                <TitleItem>{product.title}</TitleItem>
                <CategoryItem>{product.category}</CategoryItem>
                <CaloriesItem>{product.calories}</CaloriesItem>
                <WeightItem>{product.weight}</WeightItem>
                {product.recommended ? (
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
                  <DeleteBtn onClick={() => onDeleteProduct(product.id)}>
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
