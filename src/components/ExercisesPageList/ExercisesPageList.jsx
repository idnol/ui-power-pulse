import { useDispatch, useSelector } from 'react-redux';
import { exercisesGetAll } from '../../redux/exercises/api';
import { ListItem } from '../ListItem/ListItem';
import {
  ExercisesListContainer,
  ExercisesList,
  ExercisesListItem,
} from './ExercisesPageList.styled';
import { useEffect } from 'react';

export const Exercises = () => {
  const exercises = useSelector((state) => state.exercises.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exercisesGetAll());
  }, [dispatch]);

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
