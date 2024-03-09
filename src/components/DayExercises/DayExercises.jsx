import { TableExercises } from '../TableExercises/TableExercises';
import { useState } from 'react';
import {
  BoxDayDiary,
  StyledAddNavLink,
  SvgArrow,
  TextNoFound,
  Title,
  WrapperAdd,
} from './DayExercises.styled';

const listOfExercises = [
  {
    id: '1',
    bodyPart: 'Upper arms',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '2',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '3',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '4',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '5',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '6',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '7',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '8',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '9',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '10',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '11',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '12',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '13',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '14',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '15',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '16',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '17',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '18',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '19',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '20',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '21',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '22',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '23',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '24',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '25',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
  {
    id: '26',
    bodyPart: 'Waist',
    equipment: 'Body weight',
    name: '45° side bend',
    target: 'Abs',
    burnedCalories: 323,
    time: 60,
  },
];

export const DayExercises = () => {
  const [exercises, setExercises] = useState(listOfExercises);

  const handleDeleteExercise = (id) => {
    setExercises((prevExercises) =>
      prevExercises.filter((exercise) => exercise.id !== id)
    );
  };

  return (
    <>
      <BoxDayDiary>
        <WrapperAdd>
          <Title>Execrcises</Title>
          <StyledAddNavLink>
            Add product
            <SvgArrow>
              <use href="/img/sprait.svg#icon-Icon" />
            </SvgArrow>
          </StyledAddNavLink>
        </WrapperAdd>

        {!exercises.length ? (
          <TextNoFound>Not found products</TextNoFound>
        ) : (
          <TableExercises
            exercises={exercises}
            onDeleteExercise={handleDeleteExercise}
          />
        )}
      </BoxDayDiary>
    </>
  );
};
