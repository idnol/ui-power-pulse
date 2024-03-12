import DatePicker from "react-datepicker";
import { useEffect, useState } from 'react';
import { StyledBtnArrow } from '../DatePicker/StyledDatePicker.styled.jsx';
import sprite from 'assets/sprite-2.svg';
import { useDispatch } from 'react-redux';

export const NewDatePicker = ({init}) => {
  const [startDate, setStartDate] = useState(init ?? new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch();
  }, [startDate]);

  console.log(startDate);

  const handlePrev = () => {
    const myDate = new Date(startDate);
    myDate.setDate(myDate.getDate() - 1);
    setStartDate(myDate);
  }

  const handleNext = () => {
    const myDate = new Date(startDate);
    myDate.setDate(myDate.getDate() + 1);
    setStartDate(myDate);
  }

  return (
    <div>
      <div>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      {!init &&
      <div>
        <button type="button" onClick={handlePrev}>
          <use href={`${sprite}#arrow-left`} />
        </button>
        <button type="button" onClick={handleNext}>
          <use href={`${sprite}#arrow-right`} />
        </button>
      </div>}
    </div>
  )
}