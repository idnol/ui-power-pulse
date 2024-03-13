import { theme } from '../../../../vars';
import { createGlobalStyle, styled } from 'styled-components';

export const CalendarGlobalStyles = createGlobalStyle`
  .profileHeadWrapper  .react-datepicker__wrapper {
    width: 133px;
    height: 24px;
  }

  .profileHeadWrapper  .react-datepicker__input-container{
    position: relative;
  }
  
  
  @media screen and (min-width: ${theme.breakpoint.md}) {
    .profileHeadWrapper  .react-datepicker__wrapper {
      width: 159px;
  }
    .profileHeadWrapper  .react-datepicker__input-container{
      width: 159px;
  }
}

  .profileHeadWrapper  .react-datepicker {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 8px;
    width: 215px;
    min-height: 236px;
    background-color: ${theme.color.orangeSecond};
    padding: 14px;
}

  .profileHeadWrapper  .react-datepicker__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 187px;
    background-color: ${theme.color.orangeSecond};
    border-bottom: none;
}

  .profileHeadWrapper  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 187px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
    border-bottom: none;
    padding-top: 14px;
}

  .profileHeadWrapper  .react-datepicker__current-month {
    height: 19px;
    white-space: nowrap;
    color: ${theme.color.white};
}

  .profileHeadWrapper  .react-datepicker__day-name {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    text-align: center;
    color: rgba(239, 237, 232, 0.5);
}

  .profileHeadWrapper  .react-datepicker__navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${theme.color.white};
}

  .profileHeadWrapper  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.color.white};
    margin-top: 6px;
}

  .profileHeadWrapper  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    color: ${theme.color.white};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-align: center;
    cursor: pointer;
}

  .profileHeadWrapper  .react-datepicker__day--selected,
  .profileHeadWrapper  .react-datepicker__day--selected:hover,
  .profileHeadWrapper  .react-datepicker__day:hover,
  .profileHeadWrapper  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: ${theme.color.black};
}


  .profileHeadWrapper  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
}

  .profileHeadWrapper  .react-datepicker__triangle {
    visibility: hidden;
}

  .profileHeadWrapper  .react-datepicker__month {
    width: 187px;
    min-height: 161px;
    margin: 0;
}

  .profileHeadWrapper  .react-datepicker__aria-live {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

  .profileHeadWrapper  .react-datepicker__month-container{
    display: flex;
    flex-direction: column;
    width: 187px;
    min-height: 161px;
    margin: 0;
}

  .profileHeadWrapper  .react-datepicker__day--outside-month{
    color: rgba(239, 237, 232, 0.2);
    opacity: 1;
}

  .profileHeadWrapper  .react-datepicker-wrapper .react-datepicker__input-container {
  display: inline-flex; 
  position: relative;
}

.profileHeadWrapper  .react-datepicker__tab-loop {
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 9998;
}

.profileHeadWrapper  .react-datepicker-popper {
  z-index: 9999;
}

.profInputWrapper {
  display: flex;
  align-items: center;
  width: 133px;
  height: 24px;
  border: none;
  padding: 0;
  background-color: ${theme.color.black};
  color: ${theme.color.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;

  @media screen and (min-width: ${theme.breakpoint.md}) {
    width: 159px;   
    }
}

.profInput {
  width: 85px !important;
  height: 24px;
  background-color: ${theme.color.black};
  color: ${theme.color.white};
  border: none;
}

.profileHeadWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 1px solid rgba(239, 237, 232, 0.3);
    background: transparent;
    border-radius: 12px;
    padding: 14px;
    height: 46px;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: #efede8;
}
`;

export const StyledMonthsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 187px;
  height: 19px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${theme.color.white};
  margin-bottom: 14px;
`;

export const StyledBtnArrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 19px;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const StyledSvgArrowCalendar = styled.svg`
  width: 6px;
  height: 10px;
  stroke: ${theme.color.white};
  stroke-width: 1.5;
  fill: ${theme.color.white};
  stroke: ${theme.color.white};
  cursor: pointer;
  `;

export const StyledMonthsName = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${theme.color.white};
`;

export const StyledSvgCalendar = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${theme.color.white};
  margin-left: auto;
  stroke-width: 1.5;
  cursor: pointer;
`;