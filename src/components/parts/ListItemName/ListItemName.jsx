import {
  NameContainer,
  Icon,
  Name,
} from './ListItemName.styled';
import sprite from 'assets/sprite-2.svg';

export const ListItemName = ({ titleName }) => {
  return (
    <>
      <NameContainer>
        <Icon>
          <use href={`${sprite}#run-man-circle`}></use>
        </Icon>
        <Name>{titleName}</Name>
      </NameContainer>
    </>
  );
};