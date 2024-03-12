// import { useSelector } from 'react-redux';
import { TableExercises } from '../TableExercises/TableExercises';
import {
  BoxDayDiary,
  StyledAddNavLink,
  SvgArrow,
  // TextNoFound,
  Title,
  WrapperAdd,
} from './DayExercises.styled';
// import { selectExercises } from '../../redux/diary/diarySelectors';

export const DayExercises = () => {
  // const exercises = useSelector(selectExercises)

  return (
    <>
      <BoxDayDiary>
        <WrapperAdd>
          <Title>Execrcises</Title>
          <StyledAddNavLink to="/exercises">
          Add exercise
            <SvgArrow>
              <use href="/img/sprait.svg#icon-Icon" />
            </SvgArrow>
          </StyledAddNavLink>
        </WrapperAdd>

        <TableExercises />
        {/* {!exercises.length ? ( <TextNoFound>Not found products</TextNoFound> ) : ( <TableExercises />)} */}
      </BoxDayDiary>
    </>
  );
};
