import { useState } from 'react';
import {
  StyledAddNavLink,
  SvgArrow,
  Title,
  WrapperAdd,
  BoxDayDiary,
  TextNoFound,
} from './DayProducts.styled.jsx';
import { TableProdacts } from '../TableProdacts/TableProdacts.jsx';

const listOfProdacts = [
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
  },
  {
    id: '3',
    title: 'Bread Hercules grain',
    category: 'Flour',
    calories: '289',
    weight: '100',
    recommended: true,
  },
  {
    id: '4',
    title: 'Banana juice',
    category: 'Soft drinks',
    calories: '48',
    weight: '100',
    recommended: false,
  },
  {
    id: '5',
    title: 'Spikachki',
    category: 'Sausage',
    calories: '337',
    weight: '100',
    recommended: false,
  },
  {
    id: '6',
    title: 'Coffee drink',
    category: 'Soft Drinks',
    calories: '337',
    weight: '100',
    recommended: false,
  },
  {
    id: '7',
    title: 'Red onion',
    category: 'Vegetables and herbs',
    calories: '42',
    weight: '100',
    recommended: false,
  },
  {
    id: '8',
    title: 'Homemade noodles',
    category: 'Flour',
    calories: '332',
    weight: '100',
    recommended: true,
  },
  {
    id: '9',
    title: 'Rice semolina Garnets glute',
    category: 'Cereals',
    calories: '340',
    weight: '100',
    recommended: true,
  },
  {
    id: '10',
    title: 'Venison stew Special',
    category: 'Meat',
    calories: '81',
    weight: '100',
    recommended: false,
  },
  {
    id: '11',
    title: 'Bread Hercules grain',
    category: 'Flour',
    calories: '289',
    weight: '100',
    recommended: true,
  },
  {
    id: '12',
    title: 'Banana juice',
    category: 'Soft drinks',
    calories: '48',
    weight: '100',
    recommended: false,
  },
  {
    id: '13',
    title: 'Spikachki',
    category: 'Sausage',
    calories: '337',
    weight: '100',
    recommended: false,
  },
  {
    id: '14',
    title: 'Coffee drink',
    category: 'Soft Drinks',
    calories: '337',
    weight: '100',
    recommended: false,
  },
  {
    id: '15',
    title: 'Red onion',
    category: 'Vegetables and herbs',
    calories: '42',
    weight: '100',
    recommended: false,
  },
  {
    id: '16',
    title: 'Homemade noodles',
    category: 'Flour',
    calories: '332',
    weight: '100',
    recommended: true,
  },
  {
    id: '17',
    title: 'Red onion',
    category: 'Vegetables and herbs',
    calories: '42',
    weight: '100',
    recommended: false,
  },
  {
    id: '18',
    title: 'Homemade noodles',
    category: 'Flour',
    calories: '332',
    weight: '100',
    recommended: true,
  },
  {
    id: '19',
    title: 'Rice semolina Garnets glute',
    category: 'Cereals',
    calories: '340',
    weight: '100',
    recommended: true,
  },
  {
    id: '20',
    title: 'Venison stew Special',
    category: 'Meat',
    calories: '81',
    weight: '100',
    recommended: false,
  },
  {
    id: '21',
    title: 'Bread Hercules grain',
    category: 'Flour',
    calories: '289',
    weight: '100',
    recommended: true,
  },
  {
    id: '22',
    title: 'Banana juice',
    category: 'Soft drinks',
    calories: '48',
    weight: '100',
    recommended: false,
  },
  {
    id: '23',
    title: 'Spikachki',
    category: 'Sausage',
    calories: '337',
    weight: '100',
    recommended: false,
  },
  {
    id: '24',
    title: 'Coffee drink',
    category: 'Soft Drinks',
    calories: '337',
    weight: '100',
    recommended: false,
  },
  {
    id: '25',
    title: 'Red onion',
    category: 'Vegetables and herbs',
    calories: '42',
    weight: '100',
    recommended: false,
  },
  {
    id: '26',
    title: 'Homemade noodles',
    category: 'Flour',
    calories: '332',
    weight: '100',
    recommended: true,
  },
];

export const DayProducts = () => {
  const [prodacts, setProdacts] = useState(listOfProdacts);
  console.log(prodacts);

  const handleDeleteProdact = (id) => {
    setProdacts((prevProdacts) =>
      prevProdacts.filter((prodact) => prodact.id !== id)
    );
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

        {!prodacts.length ? (
          <TextNoFound>Not found products</TextNoFound>
        ) : (
          <TableProdacts
            prodacts={prodacts}
            onDeleteProdact={handleDeleteProdact}
          />
        )}
      </BoxDayDiary>
    </>
  );
};
