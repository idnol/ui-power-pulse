import { useState, useEffect } from 'react';
import {
  ExercisesUl,
  ExercisesLi,
  StyledSpanCategories,
  ExercisesTitle,
  ExercisesContainer,
  Button,
  ButtonIcon,
  ButtonContainer,
  ButtonText,
  SupportContainerExercise,
} from './ExercisesCategories.styled';
import { useDispatch, useSelector } from 'react-redux';
import { clearExercisesFilter } from '../../../redux/exercises/filterSlice';

import sprite from 'assets/sprite-2.svg';

export default function ExercisesCategories({ onClick, onRenderBackground }) {
  const dispatch = useDispatch();

  useEffect(() => {
    onRenderBackground();
  });

  const [activeCategory, setActiveCategory] = useState('Body parts');

  const bodyPartFilter = useSelector((state) => state.filter.exercisesFilter);

  useEffect(() => {
    onClick(activeCategory);
  }, [onClick, activeCategory]);

  const handleClick = (category) => {
    onClick(category);
    setActiveCategory(category);
  };

  const handleBackButtonClick = () => {
    dispatch(clearExercisesFilter());
  };

  return (
    <ExercisesContainer>
      <ButtonContainer>
      {bodyPartFilter !== '' && (
        <Button onClick={handleBackButtonClick}>
          <ButtonIcon>
            <use href={`${sprite}#arrow-left-ex`} style={{ fill: 'rgba(239, 237, 232, 0.4)'}} />
          </ButtonIcon>
          <ButtonText>back</ButtonText>
        </Button>
        )}
      </ButtonContainer>
      <SupportContainerExercise>
      <ExercisesTitle>
        {bodyPartFilter === '' ? 'Exercises' : bodyPartFilter}
      </ExercisesTitle>
      <ExercisesUl>
        <ExercisesLi>
          <StyledSpanCategories
            className={activeCategory === 'Body parts' ? 'active' : ''}
            data-target="Body parts"
            onClick={() => {
              handleClick('Body parts');
              handleBackButtonClick();
            }}
          >
            Body parts
          </StyledSpanCategories>
        </ExercisesLi>
        <ExercisesLi>
          <StyledSpanCategories
            className={activeCategory === 'Muscles' ? 'active' : ''}
            data-target="Muscles"
            onClick={() => {
              handleClick('Muscles');
              handleBackButtonClick();
            }}
          >
            Muscles
          </StyledSpanCategories>
        </ExercisesLi>
        <ExercisesLi>
          <StyledSpanCategories
            className={activeCategory === 'Equipment' ? 'active' : ''}
            data-target="Equipment"
            onClick={() => {
              handleClick('Equipment');
              handleBackButtonClick();
            }}
          >
            Equipment
          </StyledSpanCategories>
        </ExercisesLi>
      </ExercisesUl>
    </SupportContainerExercise>
    </ExercisesContainer>
  );
}
