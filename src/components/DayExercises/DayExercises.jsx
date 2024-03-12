import { TableExercises } from '../TableExercises/TableExercises';
import {
  BoxDayDiary,
  StyledAddNavLink,
  SvgArrow,
  Title,
  WrapperAdd,
} from './DayExercises.styled';
import sprite from 'assets/sprite-2.svg'


export const DayExercises = () => {
  return (
    <>
      <BoxDayDiary>
        <WrapperAdd>
          <Title>Execrcises</Title>
          <StyledAddNavLink to="/exercises">
          Add exercise
            <SvgArrow>
              <use href={`${sprite}#icon-Icon`} />
            </SvgArrow>
          </StyledAddNavLink>
        </WrapperAdd>
        <TableExercises />
      </BoxDayDiary>
    </>
  );
};
