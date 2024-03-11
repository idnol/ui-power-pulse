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
// import { selectDateBirthday } from '../../redux/profile/selectors.js';
// import { CalendarInput, SvgIcon, Wrapper } from '../ProfileSettings/UserForm/DatePicker/DatePicker.styled.js';
// import { date } from 'yup';
// import { CalendarInput, SvgIcon } from '../ProfileSettings/UserForm/DatePicker/DatePicker.styled.js';
// import getDate from "../parts/handleData.js"

const StyledDatepicker = forwardRef((props, ref) => {
  // console.log(`props`, props);
  const dispatch = useDispatch();
  const selectDate = useSelector(selectorDate)
  // const birthdayDate = useSelector(selectDateBirthday) 
  // const formattedBirthday = format(birthdayDate, 'dd/MM/yyyy');


  // console.log(`birthdayDate`, birthdayDate);  
    // const [inputValueProfile, setInputValueProfile] = useState('');
  // const [selectedDate, setSelectedDate] = useState(Date.now());
  const [currentMonth, setCurrentMonth] = useState('');
  const [isActiveLeftArrow, setIsActiveLeftArrow] = useState('');
  const [isActiveRightArrow, setIsActiveRightArrow] = useState('active');

  const datePickerRef = useRef(null);

  // let userDate = formattedBirthday;
  // console.log(`userDate`, userDate);

  useEffect(() => { setCurrentMonth(format(selectDate, 'MMMM yyyy')); }, [selectDate]);



  const handlePreviousMonth = () => {
    setIsActiveLeftArrow('active');
    setIsActiveRightArrow('');
    const newDate = subMonths(selectDate, 1);
    dispatch(changeDate(newDate.toISOString()))
  };

    const handlePreviousDay = () => {
    setIsActiveLeftArrow('active');
    setIsActiveRightArrow('');
    const newDate = subDays(selectDate, 1);
    dispatch(changeDate(newDate.toISOString()))
  };

  const handleNextMonth = () => {
    setIsActiveLeftArrow('');
    setIsActiveRightArrow('active');
    const newDate = addMonths(selectDate, 1);
    dispatch(changeDate(newDate.toISOString()))
  };

    const handleNextDay = () => {
    setIsActiveLeftArrow('');
    setIsActiveRightArrow('active');
    const newDate = addDays(selectDate, 1);
    dispatch(changeDate(newDate.toISOString()))
  };

  const handleDateChange = (newDate) => {
    console.log(`handleDateChange`, newDate);
    dispatch(changeDate(newDate.toISOString()))
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
            handleDateChange(newDate);
          }
        }
    };

    const handleBlur = () => {
      if (!isValidDate(inputValue) || inputValue.trim() === '') {
        setInputValue(prevValue); }

      if (!isValidDate(inputValue) || inputValue.trim() === '') {
        setInputValue(format(selectDate, 'dd/MM/yyyy')); } };

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
          dispatch(changeDate(newDate.toISOString()))
          setInputValue(format(newDate, 'dd/MM/yyyy'));
          return; }
    
        setInputValue(format(selectDate, 'dd/MM/yyyy')); } };

    
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
          className={isActiveLeftArrow}
          onClick={handlePreviousDay}>
          <use href={`${sprite}#arrow-left`} />
        </StyledSvgArrow>

        <StyledSvgArrow
          className={isActiveRightArrow}
          onClick={handleNextDay}  >
          <use href={`${sprite}#arrow-right`} />
        </StyledSvgArrow>
      </TitleWrapper>
    );});

    // const CustomInputProfile= forwardRef(({ value, onClick, onKeyDown }, ref) => {
    // const [inputValueProfile, setInputValueProfile] = useState(value);
    // const [prevValueProfile, setPrevValueProfile] = useState('');

    // useEffect(() => {
    //   setInputValueProfile(value);
    //   setPrevValueProfile(value);
    // }, [value]);

    // const handleChange = (e) => {
    //   const value = e.target.value.replace(/\D/g, '');

    //   let formattedValue = value;
    //     if (value.length > 2 && value.length < 5) {
    //       formattedValue = value.slice(0, 2) + '/' + value.slice(2);
    //     } else if (value.length >= 5) {
    //       formattedValue = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8);
    //     }

    //   setInputValueProfile(formattedValue);

    //     if (e.target.value.length === 10) {
    //       const [day, month, year] = formattedValue.split('/');
    //       const newDate = new Date(`${year}-${month}-${day}`);

    //       if (!isNaN(newDate.getTime())) {
    //         dispatch(changeDate(newDate.toISOString()))
    //         handleDateChange(newDate);
    //       }
    //     }
    // };

    // const handleBlur = () => {
    //   if (!isValidDate(inputValueProfile) || inputValueProfile.trim() === '') {
    //     setInputValueProfile(prevValueProfile); }

    //   if (!isValidDate(inputValueProfile) || inputValueProfile.trim() === '') {
    //     setInputValueProfile(format(selectDate, 'dd/MM/yyyy')); } };

    // const isValidDate = (dateString) => {
    //   const datePattern = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    //   return datePattern.test(dateString);};

    // const handleEnterPress = (e) => {
    //   if (e.key === 'Enter') {
    //     e.preventDefault();
    //     const formattedDate = inputValueProfile.replace(/\//g, '');
    //     const day = formattedDate.substring(0, 2);
    //     const month = formattedDate.substring(2, 4);
    //     const year = formattedDate.substring(4, 8);

    //     let newDate;
    //     if (year.length < 4) {
    //       const currentYear = new Date().getFullYear();
    //       newDate = new Date(`${currentYear}-${month}-${day}`); }
    //     else { newDate = new Date(`${year}-${month}-${day}`); }

    //     if (!isNaN(newDate.getTime())) {
    //       dispatch(changeDate(newDate.toISOString()))
    //       setInputValueProfile(format(newDate, 'dd/MM/yyyy'));
    //       return; }
    
    //     setInputValueProfile(format(selectDate, 'dd/MM/yyyy')); } };

    
    // return (
    //   <Wrapper>        
    //     <CalendarInput
    //       type="text"
    //       value={formattedBirthday}
    //       onChange={handleChange}
    //       onBlur={handleBlur}
    //       onKeyDown={(e) => {
    //         handleEnterPress(e);
    //         onKeyDown(e);
    //       }}
    //       ref={ref} />

    //     <SvgIcon
    //       onClick={onClick} >
    //       <use href={`${sprite}#calendar`} />
    //     </SvgIcon>
    //   </Wrapper>
    //   );
    // });
    
    // ********
// const CustomInputProfile = forwardRef(({ value, onClick, onKeyDown, onChange }, ref) => {
//   const [inputValueProfile, setInputValueProfile] = useState(value);
//   const [prevValueProfile, setPrevValueProfile] = useState('');

//   useEffect(() => {
//     setInputValueProfile(value);
//     setPrevValueProfile(value);
//   }, [value]);

//   //   useEffect(() => {
//   //   setInputValueProfile(formattedBirthday);
//   // }, []);

//   const handleChange = (e) => {
//     // setInputValueProfile(e.target.value);
//     setInputValueProfile(e.target.value.replace(/\D/g, ''));
//     const value = e.target.value.replace(/\D/g, '');

//     let formattedValue = value;
//     if (value.length > 2 && value.length < 5) {
//       formattedValue = value.slice(0, 2) + '/' + value.slice(2);
//     } else if (value.length >= 5) {
//       formattedValue = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8);
//     }

//     setInputValueProfile(formattedValue);

//     if (e.target.value.length === 10) {
//       const [day, month, year] = formattedValue.split('/');
//       const newDate = new Date(`${year}-${month}-${day}`);

//       if (!isNaN(newDate.getTime())) {
//         onChange(newDate.toISOString());
//       }
//     }
//   };

//   const handleBlur = () => {
//     if (!isValidDate(inputValueProfile) || inputValueProfile.trim() === '') {
//       setInputValueProfile(prevValueProfile);
//     }
//   };

//   const isValidDate = (dateString) => {
//     const datePattern = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
//     return datePattern.test(dateString);
//   };

//   const handleEnterPress = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       const formattedDate = inputValueProfile.replace(/\//g, '');
//       const day = formattedDate.substring(0, 2);
//       const month = formattedDate.substring(2, 4);
//       const year = formattedDate.substring(4, 8);

//       let newDate;
//       if (year.length < 4) {
//         const currentYear = new Date().getFullYear();
//         newDate = new Date(`${currentYear}-${month}-${day}`);
//       } else {
//         newDate = new Date(`${year}-${month}-${day}`);
//       }

//       if (!isNaN(newDate.getTime())) {
//         onChange(newDate.toISOString());
//         setInputValueProfile(format(newDate, 'dd/MM/yyyy'));
//       }
//     }
//   };

//   return (
//     <Wrapper>
//       <CalendarInput
//         type="text"
//         value={inputValueProfile}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         onKeyDown={(e) => {
//           handleEnterPress(e);
//           onKeyDown(e);
//         }}
//         ref={ref}
//       />

//       <SvgIcon onClick={onClick}>
//         <use href={`${sprite}#calendar`} />
//       </SvgIcon>
//     </Wrapper>
//   );
// });

// *******



  
  CustomInput.displayName = 'CustomInput';
  // CustomInputProfile.displayName = 'CustomInputProfile';

  return (
    <>
      {/* <Datepicker
 onChangeRaw={e => customHandler(moment(e.target.value))}
onChange={date => handleDateAndSelectedPropUpdated(date)}
/> */}
      <DatePicker
        ref={(el) => {
          datePickerRef.current = el;
          if (ref) ref.current = el; }}
        {...props}
        selected={selectDate}
        // onChangeRaw={e => customHandler(moment(e.target.value))}
        // onChange={date => handleDateAndSelectedPropUpdated(date)}
        onChange={handleDateChange}
        dateFormat={'dd/MM/yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 2)}
        customInput={           <CustomInput
            value={format(selectDate, 'dd/MM/yyyy')}
            onChange={()=> dispatch(changeDate)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); } }} />}
        // customInput={ props.profile ? <CustomInputProfile value={format(formattedBirthday, 'dd/MM/yyyy')}
        // onChange={(newValue) => console.log(`newValue`, newValue)}
        //   // onInput={console.log(`228`)}
        //   // onChange={console.log(`123`)}
        //     onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); } }}/> :
        //   <CustomInput
        //     value={format(selectDate, 'dd/MM/yyyy')}
        //     onChange={()=> dispatch(changeDate)}
        //     onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); } }} />}
        
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
