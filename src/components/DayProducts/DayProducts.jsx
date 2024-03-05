import { useEffect, useState } from 'react';
import {
  BoxDayProducts,
  StyledAddProdactNavLink,
  SvgArrow,
  Title,
  WrapperAdd,
  TextNoProdacts,
  ScrollContainer,
} from './DayProducts.styled';
import { TableProdacts } from '../TableProdacts/TableProdacts';

import { listOfProdacts } from './listOfProdacts.js';

// import { useDispatch, useSelector } from 'react-redux';
// import { selectDairyProdacts } from '../../redux/diary/diarySlice.js';
// import { deleteDiaryProdact } from '../../redux/diary/api.js';

// const keyLS = 'prodacts-items';

// const getInitialProdacts = () => {
//   const savedProdacts = window.localStorage.getItem(keyLS);
//   if (savedProdacts !== null) {
//     return JSON.parse(savedProdacts);
//   }
//   return listOfProdacts;
// };

// const BASE_URL = 'http://localhost:3333/api';

// const getDayProdacts = async () => {
//   const response = await axios.get(`${BASE_URL}/products`);
//   console.log(response);

//   return response.data.results;
// };

// getDayProdacts();

export const DayProducts = () => {
  // const dispatch = useDispatch();
  // const prodacts = useSelector(selectDairyProdacts);
  const [prodacts, setProdacts] = useState(listOfProdacts);
  console.log(prodacts);

  // const handleDeleteProdact = (id) => {
  //   dispatch(
  //     deleteDiaryProdact(prodacts.filter((prodact) => prodact.id !== id))
  //   );
  // };

  const handleDeleteProdact = (id) => {
    setProdacts((prevProdacts) =>
      prevProdacts.filter((prodact) => prodact.id !== id)
    );
  };

  return (
    <>
      <BoxDayProducts>
        <WrapperAdd>
          <Title>Products</Title>
          <StyledAddProdactNavLink to="/products">
            Add product
            <SvgArrow>
              <use href="/img/sprait.svg#icon-Icon" />
            </SvgArrow>
          </StyledAddProdactNavLink>
        </WrapperAdd>

        {!prodacts ? (
          <TextNoProdacts>Not found products</TextNoProdacts>
        ) : (
          <ScrollContainer>
            <TableProdacts
              prodacts={prodacts}
              onDeleteProdact={handleDeleteProdact}
            />
          </ScrollContainer>
        )}
      </BoxDayProducts>
    </>
  );
};
