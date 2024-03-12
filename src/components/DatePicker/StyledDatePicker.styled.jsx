import { theme } from '../../vars.js';
import { createGlobalStyle, styled } from 'styled-components';

export const CalendarGlobalStyles = createGlobalStyle`
  .diaryHeadWrapper  .react-datepicker__wrapper {
    width: 183px !important; 
    height: 20px;
    /* width: ${props => props.profile ? "147px" : "183px"}; */
  }

  .diaryHeadWrapper  .react-datepicker__input-container{
    /* width: 183px; */
    margin-left: auto;
    position: relative;
  }
  
  
  @media screen and (min-width: ${theme.breakpoint.md}) {
    .diaryHeadWrapper  .react-datepicker__wrapper {
      width: 239px;
      height: 32px;
  }
    .diaryHeadWrapper  .react-datepicker__input-container{
      width: 239px;
      height: 32px;
  }}

  .diaryHeadWrapper  .react-datepicker {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 8px;
    width: 215px;
    min-height: 236px;
    background-color: ${theme.color.orangeSecond};
    padding: 14px;
  }

  .diaryHeadWrapper  .react-datepicker__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 187px;
    background-color: ${theme.color.orangeSecond};
    border-bottom: none;
  }

  .diaryHeadWrapper  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 187px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
    border-bottom: none;
    padding-top: 14px;
  }

  .diaryHeadWrapper  .react-datepicker__current-month {
    height: 19px;
    white-space: nowrap;
    color: white;
  }

  .diaryHeadWrapper  .react-datepicker__day-name {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    text-align: center;
    color: rgba(239, 237, 232, 0.5);
  }

  .diaryHeadWrapper  .react-datepicker__navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${theme.color.white};
  }

  .diaryHeadWrapper  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.color.white};
    margin-top: 6px;
  }

  .diaryHeadWrapper  .react-datepicker__day {
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

  .diaryHeadWrapper  .react-datepicker__day--selected,
  .diaryHeadWrapper  .react-datepicker__day--selected:hover,
  .diaryHeadWrapper  .react-datepicker__day:hover,
  .diaryHeadWrapper  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: ${theme.color.black};
  }


  .diaryHeadWrapper  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }

  .diaryHeadWrapper  .react-datepicker__triangle {
    visibility: hidden;
  }

  .diaryHeadWrapper  .react-datepicker__month {
    width: 187px;
    min-height: 161px;
  }

  .diaryHeadWrapper  .react-datepicker__aria-live {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .diaryHeadWrapper  .react-datepicker__month-container{
    display: flex;
    flex-direction: column;
  }

  .diaryHeadWrapper  .react-datepicker__day--outside-month{
    color: rgba(239, 237, 232, 0.2);
    opacity: 1;
  }

 .diaryHeadWrapper  .react-datepicker-wrapper .react-datepicker__input-container {
  display: inline-flex; 
  position: relative; 
}

.diaryHeadWrapper  .react-datepicker__tab-loop {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9998; 
}

.diaryHeadWrapper  .react-datepicker-popper {
  z-index: 9999; 
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

export const StyledInputDate = styled.input`
  width: 97px;
  height: 20px;
  background-color: ${theme.color.black};
  color: ${theme.color.white};
  border: none;

  @media screen and (min-width: ${theme.breakpoint.md}) {
    width: 129px;
    height: 32px;
  } `;

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

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 183px;
  height: 20px;
  border: none;
  padding: 0;
  background-color: ${theme.color.black};
  color: ${theme.color.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 0.02em;
  text-align: center;

  @media screen and (min-width: ${theme.breakpoint.md}) {
    font-size: 24px;
    line-height: 1.33;
    width: 239px;
    height: 32px;
  } `;

export const StyledSvgArrow = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${theme.color.white};
  stroke: ${theme.color.white};
  cursor: pointer;

    &:hover, &:focus {
    stroke: ${theme.color.orangeSecond};
    fill: ${theme.color.orangeSecond} ;
  }
  `;

export const StyledSvgCalendar = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${theme.color.orangeSecond};
  margin-left: 8px;
  margin-right: auto;
  stroke-width: 1.8;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoint.md}) {
    width: 24px;
    height: 24px;
  } `;

export const StyledSvgCalendarProfile = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${theme.color.white};
 
  /* margin-left: 8px; */
  margin-left: auto;
  stroke-width: 1.5;
  /* stroke="#EFEDE8" */
   /* stroke-width="1.5" */
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoint.md}) {
    /* width: 24px;
    height: 24px; */
  } `;

export const StyledInputDateProfile = styled.input`
  width: 85px;
  height: 24px;
  background-color: ${theme.color.black};
  color: ${theme.color.white};
  border: none;
  font-weight: 400;
font-size: 16px;
line-height: 1.5;

  @media screen and (min-width: ${theme.breakpoint.md}) {
    /* width: 129px;
    height: 32px; */
  } `;

  export const TitleWrapperProfile = styled.div`
  display: flex;
  align-items: center;
  /* width: 159px; */
  /* height: 24px; */
  border: none;
  padding: 0;
  background-color: ${theme.color.black};
  color: ${theme.color.white};
  font-family: 'Roboto', sans-serif;
  /* font-weight: 700; */
  /* font-size: 18px; */
  /* line-height: 1.11;
  letter-spacing: 0.02em; */
  /* font-family: var(--font-family); */
font-weight: 400;
font-size: 16px;
line-height: 1.5;
/* color: var(--white); */
  text-align: center;

  @media screen and (min-width: ${theme.breakpoint.md}) {
    /* font-size: 24px;
    line-height: 1.33;
    width: 239px; */
    /* height: 32px; */
  } `;