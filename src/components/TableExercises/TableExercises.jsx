import { useDispatch, useSelector } from 'react-redux';
import { selectExercises } from '../../redux/diary/diarySelectors';
import {
  BodyPartItem,
  BurnedCaloriesItem,
  DeleteBtn,
  DeleteItem,
  EquipmentItem,
  Header,
  HeaderBodyPart,
  HeaderBurnedCalories,
  HeaderEquipment,
  HeaderName,
  HeaderTarget,
  HeaderTime,
  NameItem,
  RowItem,
  ScrollContainer,
  SvgBasket,
  Table,
  TargetItem,
  Thead,
  TimeItem,
} from './TableExercises.styled';
import { getDiary, removeExercise } from '../../redux/diary/api';
import { TextNoFound } from '../DayExercises/DayExercises.styled';
import sprite from 'assets/sprite-2.svg'

export const TableExercises = () => {
  const exercisesItems = useSelector(selectExercises);
  const dispatch = useDispatch();
  
  return (
    <>
      {exercisesItems?.length === 0 && (<TextNoFound>Not found exercises</TextNoFound>)}
      {exercisesItems?.length > 0 && (
        <>
      <Header>
        <HeaderBodyPart>Body Part</HeaderBodyPart>
        <HeaderEquipment>Equipment</HeaderEquipment>
        <HeaderName>Name</HeaderName>
        <HeaderTarget>Target</HeaderTarget>
        <HeaderBurnedCalories>Burned Calories</HeaderBurnedCalories>
        <HeaderTime>Time (sec)</HeaderTime>
        <p> </p>
      </Header>
      <ScrollContainer>
        <Table>
          <Thead>
            <tr>
              <th>Body Part</th>
              <th>Equipment</th>
              <th>Name</th>
              <th>Target</th>
              <th>Burned Calories</th>
              <th>Time</th>
              <th>Delete</th>
            </tr>
          </Thead>

          <tbody>
            {exercisesItems?.map((exercise) => (
              <RowItem key={exercise._id}>
                <BodyPartItem>{exercise.exercise.bodyPart}</BodyPartItem>
                <EquipmentItem>{exercise.exercise.equipment}</EquipmentItem>
                <NameItem>{exercise.exercise.name}</NameItem>
                <TargetItem>{exercise.exercise.target}</TargetItem>
                <BurnedCaloriesItem>{exercise.calories}</BurnedCaloriesItem>
                <TimeItem>{exercise.time}</TimeItem>
                <DeleteItem>
                  <DeleteBtn onClick={
                    () => {
                      dispatch(removeExercise({ id: exercise._id, calories: exercise.calories, time: exercise.time }))
                        .then(() => dispatch(getDiary()));
                    }
                  }>
                    <SvgBasket>
                      <use href={`${sprite}#trash`} />
                    </SvgBasket>
                  </DeleteBtn>
                </DeleteItem>
              </RowItem>
            ))}
          </tbody>
        </Table>
          </ScrollContainer> 
          </>
      )}
    </>
  );
};
