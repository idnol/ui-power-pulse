import { BasicModalWindow } from '../../BasicModalWindow/BasicModalWindow.jsx';
import sprite from 'assets/sprite-2.svg';

import { AddProductSuccess } from '../../AddProductSuccess/AddProductSuccess';

import {
  ModalCloseBtn,
  ModalSvg,
  Icon,
  Wrapper,
  LabelBox,
  BoxCalories,
  InputCalories,
  Grams,
  CountsPro,
  CaloriesText,
  Value,
  BtnBox,
  FormBtnAdd,
  FormBtnCancel,
  NameBox,
  Name,
} from './AddProductForm.styled';
import { useState } from 'react';

export const AddProductForm = ({ isOpen, onClose, title, calories, id }) => {
  const [isInputValue, setIsInputValue] = useState('');
  const [isCaloriesValue, setIsCaloriesValue] = useState('0');
  const [isCalories, setIsCalories] = useState(calories);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);

  const handleValue = (evt) => {
    const value = evt.currentTarget.value;
    setIsInputValue(value);
    const val = isCalories;

    const calories = Math.round((value * val) / 100);
    setIsCaloriesValue(calories);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    setIsOpenSuccess(true);

    const data = {
      exercise: id,
      grams: +isInputValue,
    };

    console.log(data);

    setIsInputValue('');
  };

  return (
    <BasicModalWindow isOpen={isOpen} onClose={onClose}>
      <ModalCloseBtn onClick={onClose}>
        <ModalSvg>
          <Icon href={`${sprite}#x-modal`} />
        </ModalSvg>
      </ModalCloseBtn>
      {!isOpenSuccess && (
        <Wrapper>
          <form onSubmit={onSubmit}>
            <LabelBox>
              <NameBox>
                <Name>{title}</Name>
              </NameBox>

              <BoxCalories>
                <InputCalories
                  name="number"
                  required
                  value={isInputValue}
                  onChange={handleValue}
                />
                <Grams>grams</Grams>
              </BoxCalories>
            </LabelBox>
            <CountsPro>
              <CaloriesText>Calories:</CaloriesText>
              <Value>{isCaloriesValue}</Value>
            </CountsPro>

            <BtnBox>
              <FormBtnAdd type="submit">Add to diary</FormBtnAdd>
              <FormBtnCancel type="button" onClick={onClose}>
                Cancel
              </FormBtnCancel>
            </BtnBox>
          </form>
        </Wrapper>
      )}
      {isOpenSuccess && (
        <AddProductSuccess
          calories={isCaloriesValue}
          isOpen={isOpenSuccess}
          onClose={() => setIsOpenSuccess(false)}
        />
      )}
    </BasicModalWindow>
  );
};
