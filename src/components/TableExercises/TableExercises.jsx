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

export const TableExercises = ({ exercises, onDeleteExercise }) => {
  return (
    <>
      <Header>
        <HeaderBodyPart>Body Part</HeaderBodyPart>
        <HeaderEquipment>Equipment</HeaderEquipment>
        <HeaderName>Name</HeaderName>
        <HeaderTarget>Target</HeaderTarget>
        <HeaderBurnedCalories>Burned Calories</HeaderBurnedCalories>
        <HeaderTime>Time</HeaderTime>
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
            {exercises.map((exercise) => (
              <RowItem key={exercise.id}>
                <BodyPartItem>{exercise.bodyPart}</BodyPartItem>
                <EquipmentItem>{exercise.equipment}</EquipmentItem>
                <NameItem>{exercise.name}</NameItem>
                <TargetItem>{exercise.target}</TargetItem>
                <BurnedCaloriesItem>
                  {exercise.burnedCalories}
                </BurnedCaloriesItem>
                <TimeItem>{exercise.time}</TimeItem>
                <DeleteItem>
                  <DeleteBtn onClick={() => onDeleteExercise(exercise.id)}>
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
