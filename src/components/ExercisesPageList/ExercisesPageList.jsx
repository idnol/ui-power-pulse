import { ListItem } from '../ListItem/ListItem';
import {
  ExercisesListContainer,
  ExercisesList,
  ExercisesListItem,
} from './ExercisesPageList.styled';

export const Exercises = () => {
  const data = [
    {
      workoutname: 'Air bike',
      burnedcalories: 312,
      bodyparts: 'Waist',
      target: 'Abs',
    },
    {
      workoutname: '3/4 sit-up',
      burnedcalories: 220,
      bodyparts: 'Waist',
      target: 'Abs',
    },
    {
      workoutname: '45° side ben',
      burnedcalories: 323,
      bodyparts: 'Waist',
      target: 'Abs',
    },
    {
      workoutname: 'Barbell reverse preacher curl',
      burnedcalories: 312,
      bodyparts: 'Waist',
      target: 'Biceps',
    },
    {
      workoutname: 'Barbell rollerout',
      burnedcalories: 87,
      bodyparts: 'Waist',
      target: 'Abs',
    },
    {
      workoutname: 'Barbell side split squat v. 2',
      burnedcalories: 60,
      bodyparts: 'Waist',
      target: 'Abs',
    },
    {
      workoutname: 'Bottoms-up',
      burnedcalories: 234,
      bodyparts: 'Waist',
      target: 'Abs',
    },
  ];

  return (
    <ExercisesListContainer>
      <ExercisesList>
        {data.map((item, index) => (
          <ExercisesListItem key={index}>
            <ListItem item={item} />
          </ExercisesListItem>
        ))}
      </ExercisesList>
    </ExercisesListContainer>
  );
};
