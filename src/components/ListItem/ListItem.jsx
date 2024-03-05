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

export const ListItem = ({ item }) => {
  return (
    <>
      <Title>workout</Title>
      <NameContainer>
        <Icon>
          <use href="../../../public/img/sprait.svg#run-man-circle"></use>
        </Icon>
        <Name>{item.workoutname}</Name>
      </NameContainer>
      <StatsList>
        <StatItem text={`Burned calories:`} val={item.burnedcalories} />
        <StatItem text={`Body part:`} val={item.bodyparts} />
        <StatItem text={`Target:`} val={item.target} />
      </StatsList>
      <Button type="button">
        <ButtonText>Start</ButtonText>
        <ButtonIcon>
          <use href="../../../public/img/sprait.svg#arrow"></use>
        </ButtonIcon>
      </Button>
    </>
  );
};
