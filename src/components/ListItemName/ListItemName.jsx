import {
  NameContainer,
  Icon,
  Name,
} from './ListItemName.styled';

export const ListItemName = ({titleName}) => {
  return (
    <>
      <NameContainer>
        <Icon>
          <use href="../../../public/img/sprait.svg#run-man-circle"></use>
        </Icon>
        <Name>{titleName}</Name>
      </NameContainer>
    </>
  );
};
