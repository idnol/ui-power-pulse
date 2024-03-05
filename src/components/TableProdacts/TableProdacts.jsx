import React, { useState } from 'react';
import {
  CaloriesItem,
  CategoryItem,
  DeleteBtn,
  DeleteItem,
  // HeadTablel,
  RecommendItem,
  RowItem,
  ScrollContainer,
  SvgBasket,
  SvgCircle,
  TableItems,
  TitleItem,
  WeightItem,
} from './TableProdacts.styled';

export const TableProdacts = ({ prodacts, onDeleteProdact }) => {
  // const numb = nanoid();
  // key = { num };

  return (
    <>
      <TableItems>
        {/* <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Calories</th>
            <th>Weight</th>
            <th>Recommend</th>
            <th></th>
          </tr>
        </thead> */}
        <tbody>
          {/* <ScrollContainer> */}
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
          {/* </ScrollContainer> */}
        </tbody>
      </TableItems>
    </>
  );
};
