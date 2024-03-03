import styled from 'styled-components';
import {theme} from '../../../../vars'


export const DailyItem= styled.div`
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  gap: 28px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);


  @media screen and (min-width: ${theme.breakpoint.md}) {
    padding: 14px;

  }
`;

export const TextWrapper = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 133%;
color: rgba(239, 237, 232, 0.8);


@media screen and (min-width: ${theme.breakpoint.md}) {
  line-height: 150%;
}
`;

export const DayliNumber =styled.p`
font-size: 18px;
font-weight: 700;
line-height: 111%;
color: ${theme.color.white};

@media screen and (min-width: $${theme.breakpoint.md}) {
  font-size: 24px;
  line-height: 133%;
}
`;

export const DailyWrapper = styled.div`
display: flex;
align-items: center;
gap:8px;
`