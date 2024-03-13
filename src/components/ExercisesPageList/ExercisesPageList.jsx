import { useDispatch, useSelector } from 'react-redux';
import { exercisesGetAll } from '../../redux/exercises/api';
import { ListItem } from '../ListItem/ListItem';
import {
  ExercisesListContainer,
  ExercisesList,
  ExercisesListItem,
} from './ExercisesPageList.styled';
import { useEffect } from 'react';

// const getVisibleExercises = (exercises, filter) => {
//   return exercises.filter((item) => {
//     const bodyPart = item.bodyPart.toLowerCase();
//     const target = item.target.toLowerCase();
//     const equipment = item.equipment.toLowerCase();
//     const matchBodyPart = bodyPart.includes(filter.toLowerCase());
//     const matchTarget = target.includes(filter.toLowerCase());
//     const matchEquipment = equipment.includes(filter.toLowerCase());
//     return matchBodyPart || matchTarget || matchEquipment;
//   });
// };

export const Exercises = ({ bodyPartFilter, category, onRenderBackground }) => {
  const dispatch = useDispatch();
  let modifiedStr = '';
  switch (category) {
    case 'Body parts':
      modifiedStr = category
        .toLowerCase()
        .replace(/\s(\w)/g, function (match, group1) {
          return group1.toUpperCase();
        });
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
  }, [dispatch, filter]);

  useEffect(() => {
    onRenderBackground();
  });

  // const exercises = useSelector((state) => state.exercises.items);
  // const visibleExercises = getVisibleExercises(exercises, bodyPartFilter);

  return (
    <div></div>
    // <ExercisesListContainer>
    //   <ExercisesList>
    //     {visibleExercises.map((item, index) => (
    //       <ExercisesListItem key={index}>
    //         <ListItem item={item} />
    //       </ExercisesListItem>
    //     ))}
    //   </ExercisesList>
    // </ExercisesListContainer>
  );
};
