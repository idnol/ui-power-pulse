<<<<<<< Updated upstream
=======

import { useState } from 'react';
import { AddProductSuccess } from '../../AddProductSuccess/AddProductSuccess';

>>>>>>> Stashed changes

import { useState } from 'react';
import {
  BtnBox,
  CaloriesText,
  FormBtnAdd,
  FormBtnCancel,
  LabelBox,
  InputCalories,
  InputName,
  CountsPro,
  Value,
  BoxCalories,
  Grams,
} from './ProductForm.styled';

<<<<<<< Updated upstream


export const ProductForm = ({ onClose }) => {
=======


export const ProductForm = ({ onClose, onSuccess }) => {

>>>>>>> Stashed changes
  const [isInputValue, setIsInputValue] = useState('')
  const [isCaloriesValue, setIsCaloriesValue] = useState('0')
  const [isInputName, setIsInputName] = useState('Banana juice')
  
  const handleValue = (evt) => {
    const value = evt.currentTarget.value;
    setIsInputValue(value);
    const calories = Math.round((value * 50) / 100);
    setIsCaloriesValue(calories)
  }
<<<<<<< Updated upstream
  return (
    
      <form>
        <LabelBox>
          <InputName name="name" value={isInputName} readOnly />
          
=======








  

  return (
    <>
>>>>>>> Stashed changes

        <form>
        <LabelBox>
          <InputName name="name" value={isInputName} readOnly />
       
          <BoxCalories>
            <InputCalories name="number" value={isInputValue} onChange={handleValue}/>
            <Grams>grams</Grams>
          </BoxCalories>
         
        </LabelBox>
        <CountsPro>
          <CaloriesText>Calories:</CaloriesText>
          <Value>{isCaloriesValue}</Value>
        </CountsPro>

        <BtnBox>
          <FormBtnAdd type="submit" onClick={onSuccess}>Add to diary</FormBtnAdd>
          <FormBtnCancel type="button" onClick={onClose}>
            Cancel
          </FormBtnCancel>
        </BtnBox>
      </form>
<<<<<<< Updated upstream
    
=======
      
      
    </>
  
>>>>>>> Stashed changes
  );
};
