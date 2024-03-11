import { useDispatch, useSelector } from 'react-redux';
import { exercisesGetAll } from '../../redux/exercises/api';
import { ListItem } from '../ListItem/ListItem';
import {
  ExercisesListContainer,
  ExercisesList,
  ExercisesListItem,
} from './ExercisesPageList.styled';
import { useEffect } from 'react';

const getVisibleExercises = (exercises, bodyPartFilter) => {
  return exercises.filter((item) => {
    const hasContact = item.bodyPart
      .toLowerCase()
      .includes(bodyPartFilter.toLowerCase());

    return hasContact;
  });
};

export const Exercises = ({ bodyPartFilter }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exercisesGetAll());
  }, [dispatch]);

  const exercises = useSelector((state) => state.exercises.items);
  const visibleExercises = getVisibleExercises(exercises, bodyPartFilter);

  return (
    <ExercisesListContainer>
      <ExercisesList>
        {visibleExercises.map((item, index) => (
          <ExercisesListItem key={index}>
            <ListItem item={item} />
          </ExercisesListItem>
        ))}
      </ExercisesList>
    </ExercisesListContainer>
  );
};
