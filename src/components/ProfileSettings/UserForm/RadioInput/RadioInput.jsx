import { LabelFlex,FormRadio } from "../UserForm.styled";



export const RadioInput = ({ id,value,name,label,onChange, checked }) => (
    <LabelFlex> 
      <FormRadio  
        id={id} 
        type="radio" 
        name={name} 
        value={value} 
        checked={checked} 
        onChange={onChange} 
      />
      {label}
    </LabelFlex>
  );