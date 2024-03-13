import { forwardRef, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles } from './TestDatePicker.styled';
import sprite from '../../../../../public/img/sprait.svg';
import { setBirthdate } from '../../../../redux/profile/profileSlice';
import 'react-datepicker/dist/react-datepicker.css';
import { selectBirthday } from '../../../../redux/profile/selectors';
import { format, subMonths, addMonths } from 'date-fns';
import { StyledBtnArrow, StyledMonthsName, StyledMonthsWrapper, StyledSvgArrowCalendar, StyledSvgCalendar } from './TestDatePicker.styled';

const TestDatepicker = forwardRef((props, ref) => {
  const { formik } = props;

  const dispatch = useDispatch();
  const birthdate = useSelector(selectBirthday) || new Date();
  const [currentMonth, setCurrentMonth] = useState('');

  const datePickerRef = useRef(null);

  useEffect(() => {
    dispatch(setBirthdate(birthdate));
    setCurrentMonth(format(birthdate, 'MMMM yyyy'));
  }, [birthdate, dispatch]);

  const handlePreviousMonth = () => {
    const newDate = subMonths(birthdate, 1);
    dispatch(setBirthdate(newDate.toISOString()));
    formik.setFieldValue('birthday', newDate);
    formik.setFieldTouched('birthday', true);
  };

  const handleNextMonth = () => {
    const newDate = addMonths(birthdate, 1);
    dispatch(setBirthdate(newDate.toISOString()));
    formik.setFieldValue('birthday', newDate);
    formik.setFieldTouched('birthday', true);
  };

  const handleDateChange = (newDate) => {
    dispatch(setBirthdate(newDate.toISOString()));
    formik.setFieldValue('birthday', newDate);
    formik.setFieldTouched('birthday', true);
  };

  const CustomInputProf = forwardRef(({ value, onClick, onKeyDown }, ref) => {
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
        formattedValue = value.slice(0, 2) + '-' + value.slice(2);
      }
      else if (value.length >= 5) {
        formattedValue = value.slice(0, 2) + '-' + value.slice(2, 4) + '-' + value.slice(4, 8);
      }

      setInputValue(formattedValue);

      if (e.target.value.length === 10) {
        const [day, month, year] = formattedValue.split('-');
        const newDate = new Date(`${year}-${month}-${day}`);

        if (!isNaN(newDate.getTime())) {
          dispatch(setBirthdate(newDate.toISOString()));
          formik.setFieldValue('birthday', newDate);
          formik.setFieldTouched('birthday', true);
          handleDateChange(newDate);
        }
      }
    };

    const handleBlur = () => {
      if (!isValidDate(inputValue) || inputValue.trim() === '') {
        setInputValue(prevValue);
      }

      if (!isValidDate(inputValue) || inputValue.trim() === '') {
        setInputValue(format(birthdate, 'dd-MM-yyyy'));
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
          dispatch(setBirthdate(newDate.toISOString()));
          setInputValue(format(newDate, 'dd-MM-yyyy'));
          return;
        }
    
        setInputValue(format(birthdate, 'dd-MM-yyyy'));
      }
    };
    
    return (
      <div className='profInputWrapper'>
        <input className='profInput'
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
      </div>
    );
  });
  
  CustomInputProf.displayName = 'CustomInputProf';

  return (
    <>
      <DatePicker
        ref={(el) => {
          datePickerRef.current = el;
          if (ref) ref.current = el; }}
        {...props}
        selected={birthdate}
        onChange={handleDateChange}
        dateFormat={'dd-MM-yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 2)}
        customInput={           <CustomInputProf
            value={format(birthdate, 'dd-MM-yyyy')}
            onChange={()=> dispatch(setBirthdate)}
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

TestDatepicker.displayName = 'TestDatepicker';

export default TestDatepicker;