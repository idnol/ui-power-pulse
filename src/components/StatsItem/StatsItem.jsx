import { StatsItem, StatsSpan } from './StatsItem.styled';

export const StatItem = ({ text, val }) => {
  return (
    <StatsItem>
      {text}
      <StatsSpan>{val}</StatsSpan>
    </StatsItem>
  );
};
