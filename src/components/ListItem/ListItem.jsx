import { useState } from 'react';
import { StatItem } from '../StatsItem/StatsItem';
import {
  Title,
  NameContainer,
  Icon,
  Name,
  StatsList,
  Button,
  ButtonText,
  ButtonIcon,
} from './ListItem.styled';

import sprite from 'assets/sprite-2.svg';

import { BasicModalWindow } from '../BasicModalWindow/BasicModalWindow';
import { AddExerciseForm } from '../AddExerciseForm/AddExerciseForm';

export const ListItem = ({ item }) => {
  const [isModalOpen, setIsModal] = useState(false);

  return (
    <>
      <Title>workout</Title>
      <NameContainer>
        <Icon>
          <use href={`${sprite}#run-man-circle`}></use>
        </Icon>
        <Name>{item.name}</Name>
      </NameContainer>
      <StatsList>
        <StatItem text={`Burned calories:`} val={item.burnedCalories} />
        <StatItem text={`Body part:`} val={item.bodyPart} />
        <StatItem text={`Target:`} val={item.target} />
      </StatsList>
      <Button type="button" onClick={() => setIsModal(true)}>
        <ButtonText>Start</ButtonText>
        <ButtonIcon>
          <use href={`${sprite}#arrow`}></use>
        </ButtonIcon>
      </Button>
      {isModalOpen && (
        <BasicModalWindow
          isOpen={isModalOpen}
          onClose={() => setIsModal(false)}
        >
          <AddExerciseForm />
        </BasicModalWindow>
      )}
    </>
  );
};
