import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, SvgIcon, WrapperIn } from './DatePicker.styled';
import sprite from '../../../../../public/img/sprait.svg';
import { setBirthdate } from '../../../../redux/profile/profileSlice';
import getDate from '../helpers/getData';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerItem = ({formik}) => {
  const dispatch = useDispatch();
  const birthdate = useSelector((state) => state.profile.items.bodyData.birthday);
  const formattedDate = getDate(birthdate);
  const CustomInput = React.forwardRef(({ onClick }, ref) => {
    return (
      <WrapperIn onClick={onClick} ref={ref}>
        {formattedDate} 
      </WrapperIn>
    );
  });
  CustomInput.displayName = 'CustomInput';
  const handleChange = (date) => {
    const formattedDate = getDate(date);
    dispatch(setBirthdate(formattedDate));
    formik.setFieldValue('birthday', formattedDate);

  formik.setFieldTouched('birthday', true);
  };
  return (
    <>
      <SvgIcon width="18" height="18">
        <use href={`${sprite}#icon-calendar`}></use>
      </SvgIcon>

      <DatePicker
      selected={birthdate}
      onChange={handleChange}
      customInput={<CustomInput />}
      dateFormat={'dd-MM-yyyy'}
      calendarStartDay={1}
      formatWeekDay={(day) => day.substr(0, 1)}
    />

      <CalendarGlobalStyles />
    </>
  );
};
