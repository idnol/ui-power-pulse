import {
  StyledAddNavLink,
  SvgArrow,
  Title,
  WrapperAdd,
  BoxDayDiary,
} from './DayProducts.styled.jsx';
import { TableProducts } from '../TableProducts/TableProducts.jsx';
import sprite from 'assets/sprite-2.svg'

export const DayProducts = () => {

  return (
    <>
      <BoxDayDiary>
        <WrapperAdd>
          <Title>Products</Title>
          <StyledAddNavLink to="/products">
            Add product
            <SvgArrow>
              <use href={`${sprite}#icon-Icon`} />
            </SvgArrow>
          </StyledAddNavLink>
        </WrapperAdd>
      <TableProducts />
      </BoxDayDiary>
    </>
  );
};
