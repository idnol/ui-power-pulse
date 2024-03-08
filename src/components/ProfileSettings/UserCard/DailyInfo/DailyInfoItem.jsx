import sprite from 'assets/sprite-2.svg';
import { DailyItem, DayliNumber, TextWrapper,DailyWrapper } from './DayliInfoItem.styled';

export const DailyInfoItem = ({ svg, text, number }) => {
  return (
    <DailyItem>
      <DailyWrapper>
        <svg width={20} height={20}>
          <use href={`${sprite}#${svg}`}></use>
        </svg>
        <TextWrapper>{text}</TextWrapper>
      </DailyWrapper>
      <DayliNumber>{number}</DayliNumber>
    </DailyItem>
  );
};
