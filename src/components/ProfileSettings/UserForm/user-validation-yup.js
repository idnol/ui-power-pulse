import * as Yup from 'yup';




export const userSchema = Yup.object().shape({
    name: Yup.string().required(),
    height: Yup.number().min(150).required(),
    currentWeight: Yup.number().min(35).required(),
    desiredWeight: Yup.number().min(35).required(),
    blood: Yup.number().oneOf([1, 2, 3, 4]).required(),
    sex: Yup.string().oneOf(['male', 'female']).required(),
    levelActivity: Yup.number().oneOf([1, 2, 3, 4, 5]).required(),
    birthday: Yup.date().required('Birthday is required'), 
  });