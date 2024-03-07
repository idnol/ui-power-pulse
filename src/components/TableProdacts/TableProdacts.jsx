import React, { useState } from 'react';
import {
  CaloriesItem,
  CategoryItem,
  DeleteBtn,
  DeleteItem,
  // HeaderRow,
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
} from './TableProdacts.styled';

export const TableProdacts = ({ prodacts, onDeleteProdact }) => {
  // const numb = nanoid();
  // key = { num };

  return (
    <>
      <Header>
        {/* <HeaderRow> */}
        <HeaderTitle>Title</HeaderTitle>
        <HeaderCategory>Category</HeaderCategory>
        <HeaderCalories>Calories</HeaderCalories>
        <HeaderWeight>Weight</HeaderWeight>
        <HeaderRecommend>Recommend</HeaderRecommend>
        <p> </p>
        {/* </HeaderRow> */}
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
            {prodacts.map((prodact) => (
              <RowItem key={prodact.id}>
                <TitleItem>{prodact.title}</TitleItem>
                <CategoryItem>{prodact.category}</CategoryItem>
                <CaloriesItem>{prodact.calories}</CaloriesItem>
                <WeightItem>{prodact.weight}</WeightItem>
                {prodact.recommended ? (
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
                  <DeleteBtn onClick={() => onDeleteProdact(prodact.id)}>
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
