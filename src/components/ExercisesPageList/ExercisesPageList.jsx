import { useDispatch, useSelector } from 'react-redux';
import { exercisesGetAll } from '../../redux/exercises/api';
import { ListItem } from '../ListItem/ListItem';
import {
  ExercisesListContainer,
  ExercisesList,
  ExercisesListItem,
} from './ExercisesPageList.styled';
import { useEffect } from 'react';

export const Exercises = ({ bodyPartFilter, category, onRenderBackground }) => {
  const dispatch = useDispatch();
  let modifiedStr = '';
  switch (category) {
    case 'Body parts':
      modifiedStr = 'bodyPart';
      break;
    case 'Muscles':
      modifiedStr = 'target';
      break;

    default:
      modifiedStr = category.toLowerCase();
      break;
  }

  const filter = {
    name: bodyPartFilter.split(' ').join('-'),
    type: modifiedStr,
  };

  useEffect(() => {
    dispatch(exercisesGetAll(filter));
  }, [dispatch]);

  useEffect(() => {
    onRenderBackground();
  });

  const exercises = useSelector((state) => state.exercises.items);

  return (
    <ExercisesListContainer>
      <ExercisesList>
        {exercises.map((item, index) => (
          <ExercisesListItem key={index}>
            <ListItem item={item} />
          </ExercisesListItem>
        ))}
      </ExercisesList>
    </ExercisesListContainer>
  );
};
