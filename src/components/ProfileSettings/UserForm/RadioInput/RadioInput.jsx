import { LabelFlex,FormRadio } from "../UserForm.styled";



export const RadioInput = ({ id,value,name,label}) => (
    <LabelFlex> <FormRadio  id={id} type="radio" name={name} value={value} />{label}</LabelFlex>
  );