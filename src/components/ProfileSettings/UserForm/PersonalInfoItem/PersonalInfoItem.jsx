import ToastError from '../helpers/ToastError';

import {
    FormInput,
    FormLabel,
  } from '../UserForm.styled';


export const  PersonalInfoItem = ({label,name}) => {
  return (
    <div >
    <FormLabel>{label}</FormLabel>
    <FormInput type="number" name={name} />
    <ToastError name={name} />
  </div>
  )
}
