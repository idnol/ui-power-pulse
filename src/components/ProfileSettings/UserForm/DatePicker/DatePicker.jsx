import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, CalendarInput,SvgIcon } from './DatePicker.styled';
import sprite from '../../../../../public/img/sprait.svg'

export const DatePickerItem = ({number}) => {
    return (
   <>
    <SvgIcon width="18" height="18">
          <use href={`${sprite}#icon-calendar`}></use>
        </SvgIcon>
        <DatePicker
        showYearDropdown
        scrollableYearDropdown
        maxDate={new Date()}
        value={number}
        customInput={<CalendarInput />}
        dateFormat={'dd.MM.yyyy'}
        calendarStartDay={1}
        formatWeekDay={day => day.substring(0, 1)}
        showMonthDropdown
      />
          <CalendarGlobalStyles />
          </>
      );
}