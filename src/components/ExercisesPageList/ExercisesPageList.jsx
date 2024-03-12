import { useDispatch, useSelector } from 'react-redux';
import { exercisesGetAll } from '../../redux/exercises/api';
import { ListItem } from '../ListItem/ListItem';
import {
  ExercisesListContainer,
  ExercisesList,
  ExercisesListItem,
} from './ExercisesPageList.styled';
import { useEffect } from 'react';

const getVisibleExercises = (exercises, filter) => {
  return exercises.filter((item) => {
    const bodyPart = item.bodyPart.toLowerCase();
    const target = item.target.toLowerCase();
    const equipment = item.equipment.toLowerCase();
    const matchBodyPart = bodyPart.includes(filter.toLowerCase());
    const matchTarget = target.includes(filter.toLowerCase());
    const matchEquipment = equipment.includes(filter.toLowerCase());
    return matchBodyPart || matchTarget || matchEquipment;
  });
};

export const Exercises = ({ bodyPartFilter, onRenderBackground }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exercisesGetAll());
  }, [dispatch]);

  useEffect(() => {
    onRenderBackground();
  });

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
