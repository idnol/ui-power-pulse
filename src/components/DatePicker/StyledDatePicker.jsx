import sprite from 'assets/sprite-2.svg';
import { forwardRef, useState, useEffect, useRef } from 'react';
import { format, subMonths, addMonths, subDays, addDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, TitleWrapper, StyledSvgArrow, StyledSvgCalendar, StyledMonthsWrapper } from './StyledDatePicker.styled';
import { StyledBtnArrow, StyledMonthsName, StyledSvgArrowCalendar, StyledInputDate } from './StyledDatePicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {useDispatch, useSelector} from "react-redux";
import {changeDate} from "../../redux/diary/diarySlice.js";
import { selectorDate } from "../../redux/diary/diarySelectors.js";
import { getDiary } from '../../redux/diary/api.js';

const StyledDatepicker = forwardRef((props, ref) => {

  const dispatch = useDispatch();
  const selectDate = useSelector(selectorDate)
  const [currentMonth, setCurrentMonth] = useState('');

  const datePickerRef = useRef(null);

  useEffect(() => {
    dispatch(getDiary(selectDate));
    setCurrentMonth(format(selectDate, 'MMMM yyyy'));
  }, [dispatch, selectDate]);


  const handlePreviousMonth = () => {
    const newDate = subMonths(selectDate, 1);
    dispatch(changeDate(newDate.toISOString()));
    dispatch(getDiary(newDate));
  };

    const handlePreviousDay = () => {
      const newDate = subDays(selectDate, 1);
      dispatch(changeDate(newDate.toISOString()));
      dispatch(getDiary(newDate));
  };

  const handleNextMonth = () => {
    const newDate = addMonths(selectDate, 1);
    dispatch(changeDate(newDate.toISOString()));
    dispatch(getDiary(newDate));
  };

    const handleNextDay = () => {
    const newDate = addDays(selectDate, 1);
      dispatch(changeDate(newDate.toISOString()))
      dispatch(getDiary(newDate));
  };

  const handleDateChange = (newDate) => {
    dispatch(changeDate(newDate.toISOString()));
    dispatch(getDiary(newDate));
  };

  const CustomInput = forwardRef(({ value, onClick, onKeyDown }, ref) => {
    const [inputValue, setInputValue] = useState('');
    const [prevValue, setPrevValue] = useState('');

    useEffect(() => {
      setInputValue(value);
      setPrevValue(value);
    }, [value]);

    const handleChange = (e) => {
      const value = e.target.value.replace(/\D/g, '');

      let formattedValue = value;
        if (value.length > 2 && value.length < 5) {
          formattedValue = value.slice(0, 2) + '/' + value.slice(2);
        } else if (value.length >= 5) {
          formattedValue = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8);
        }

      setInputValue(formattedValue);

        if (e.target.value.length === 10) {
          const [day, month, year] = formattedValue.split('/');
          const newDate = new Date(`${year}-${month}-${day}`);

          if (!isNaN(newDate.getTime())) {
            dispatch(changeDate(newDate.toISOString()))
            dispatch(getDiary(newDate))
            handleDateChange(newDate);
          }
        }
    };

    const handleBlur = () => {
      if (!isValidDate(inputValue) || inputValue.trim() === '') {
        setInputValue(prevValue);
      }

      if (!isValidDate(inputValue) || inputValue.trim() === '') {
        setInputValue(format(selectDate, 'dd/MM/yyyy'));
      }
    };

    const isValidDate = (dateString) => {
      const datePattern = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
      return datePattern.test(dateString);};

    const handleEnterPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const formattedDate = inputValue.replace(/\//g, '');
        const day = formattedDate.substring(0, 2);
        const month = formattedDate.substring(2, 4);
        const year = formattedDate.substring(4, 8);

        let newDate;

        if (year.length < 4) {
          const currentYear = new Date().getFullYear();
          newDate = new Date(`${currentYear}-${month}-${day}`);
        }
        else {
          newDate = new Date(`${year}-${month}-${day}`);
        }

        if (!isNaN(newDate.getTime())) {
          dispatch(changeDate(newDate.toISOString()))
          dispatch(getDiary(newDate))
          setInputValue(format(newDate, 'dd/MM/yyyy'));
          return; }
    
        setInputValue(format(selectDate, 'dd/MM/yyyy'));
      }
    };
    
    return (
      <TitleWrapper>
        <StyledInputDate
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            handleEnterPress(e);
            onKeyDown(e);
          }}
          ref={ref} />

        <StyledSvgCalendar
          onClick={onClick} >
          <use href={`${sprite}#calendar`} />
        </StyledSvgCalendar>

        <StyledSvgArrow
          onClick={handlePreviousDay}>
          <use href={`${sprite}#arrow-left`} />
        </StyledSvgArrow>

        <StyledSvgArrow
          onClick={handleNextDay}  >
          <use href={`${sprite}#arrow-right`} />
        </StyledSvgArrow>
      </TitleWrapper>
    );
  });
  
  CustomInput.displayName = 'CustomInput';

  return (
    <>

      <DatePicker
        ref={(el) => {
          datePickerRef.current = el;
          if (ref) ref.current = el; }}
        {...props}
        selected={selectDate}
        onChange={handleDateChange}
        dateFormat={'dd/MM/yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 2)}
        customInput={           <CustomInput
            value={format(selectDate, 'dd/MM/yyyy')}
            onChange={()=> dispatch(changeDate)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); } }} />}
        renderCustomHeader={({ decreaseMonth, increaseMonth }) => (
          <StyledMonthsWrapper>
            <StyledBtnArrow
              type="button"
              className="react-datepicker__navigation--previous"
              aria-label="Previous Month"
              onClick={decreaseMonth}>
                <StyledSvgArrowCalendar
                  onClick={handlePreviousMonth} >
                <use href={`${sprite}#arrow-left`} />
                </StyledSvgArrowCalendar>
            </StyledBtnArrow>

            <StyledMonthsName className="react-datepicker__current-month">
              {currentMonth}
            </StyledMonthsName>

            <StyledBtnArrow
              type="button"
              className="react-datepicker__navigation--next"
              aria-label="Next Month"
              onClick={increaseMonth} >
                <StyledSvgArrowCalendar
                  onClick={handleNextMonth} >
                <use href={`${sprite}#arrow-right`} />
                </StyledSvgArrowCalendar>
            </StyledBtnArrow>
          </StyledMonthsWrapper> )}  />

      <CalendarGlobalStyles />
    </>
  );
});

StyledDatepicker.displayName = 'StyledDatepicker';

export default StyledDatepicker;