import sprite from 'assets/sprite-2.svg';
import { forwardRef, useState, useEffect, useRef } from 'react';
import { format, subMonths, addMonths } from 'date-fns';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, TitleWrapper, StyledSvgArrow, StyledSvgCalendar, StyledMonthsWrapper } from './StyledDatePicker.styled';
import { StyledBtnArrow, StyledMonthsName, StyledSvgArrowCalendar, StyledInputDate } from './StyledDatePicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const StyledDatepicker = forwardRef((props, ref) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [currentMonth, setCurrentMonth] = useState('');
  const [isActiveLeftArrow, setIsActiveLeftArrow] = useState('');
  const [isActiveRightArrow, setIsActiveRightArrow] = useState('active');

  const datePickerRef = useRef(null);

  useEffect(() => { setCurrentMonth(format(selectedDate, 'MMMM yyyy')); }, [selectedDate]);

  const handlePreviousMonth = () => {
    setIsActiveLeftArrow('active');
    setIsActiveRightArrow('');
    const newDate = subMonths(selectedDate, 1);
    setSelectedDate(newDate);};

  const handleNextMonth = () => {
    setIsActiveLeftArrow('');
    setIsActiveRightArrow('active');
    const newDate = addMonths(selectedDate, 1);
    setSelectedDate(newDate);};

  const handleDateChange = (newDate) => { setSelectedDate(newDate); };

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
        if (value.length > 2 && value.length < 5) { formattedValue = value.slice(0, 2) + '/' + value.slice(2); }
        else if (value.length >= 5) { formattedValue = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8); }
      
      setInputValue(formattedValue);

        if (e.target.value.length === 10) {
          const [day, month, year] = formattedValue.split('/');
          const newDate = new Date(`${year}-${month}-${day}`);

          if (!isNaN(newDate.getTime())) {
            setSelectedDate(newDate);
            handleDateChange(newDate); }
    }};

    const handleBlur = () => {
      if (!isValidDate(inputValue) || inputValue.trim() === '') {
        setInputValue(prevValue); }
      
      if (!isValidDate(inputValue) || inputValue.trim() === '') {
        setInputValue(format(selectedDate, 'dd/MM/yyyy')); } };
    
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
          newDate = new Date(`${currentYear}-${month}-${day}`); }
        else { newDate = new Date(`${year}-${month}-${day}`); }

        if (!isNaN(newDate.getTime())) {
          setSelectedDate(newDate);
          setInputValue(format(newDate, 'dd/MM/yyyy'));
          return; }
    
        setInputValue(format(selectedDate, 'dd/MM/yyyy')); } };

    return (
      <TitleWrapper>        
        <StyledInputDate
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            handleEnterPress(e);
            onKeyDown(e);}}
          ref={ref} />

        <StyledSvgCalendar
          onClick={onClick} >
          <use href={`${sprite}#calendar`} />
        </StyledSvgCalendar>

        <StyledSvgArrow
          className={isActiveLeftArrow}
          onClick={handlePreviousMonth}>
          <use href={`${sprite}#arrow-left`} />
        </StyledSvgArrow>

        <StyledSvgArrow
          className={isActiveRightArrow}
          onClick={handleNextMonth}  >
          <use href={`${sprite}#arrow-right`} />
        </StyledSvgArrow>
      </TitleWrapper>
    );});

  CustomInput.displayName = 'CustomInput';

  return (
    <>
      <DatePicker
        ref={(el) => {
          datePickerRef.current = el;
          if (ref) ref.current = el; }}
        {...props}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat={'dd/MM/yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 2)}

        customInput={
          <CustomInput
            value={format(selectedDate, 'dd/MM/yyyy')}
            onChange={setSelectedDate}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); } }} />}
        
        renderCustomHeader={({ decreaseMonth, increaseMonth }) => (
          <StyledMonthsWrapper>
            <StyledBtnArrow
              type="button"
              className="react-datepicker__navigation--previous"
              aria-label="Previous Month"
              onClick={decreaseMonth}>              
                <StyledSvgArrowCalendar
                  className={isActiveLeftArrow}
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
                  className={isActiveRightArrow}
                  onClick={handleNextMonth} >
                <use href={`${sprite}#arrow-right`} />
                </StyledSvgArrowCalendar>
            </StyledBtnArrow>
          </StyledMonthsWrapper> )}  />

      <CalendarGlobalStyles />
    </> ); });

StyledDatepicker.displayName = 'StyledDatepicker';

export default StyledDatepicker;
