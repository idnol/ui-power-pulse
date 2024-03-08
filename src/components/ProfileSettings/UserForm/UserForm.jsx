import { Formik } from 'formik';

import {bloodOptions,sexOptions,levelOptions,bodyInfo} from './form-default-data.js'
import { userSchema } from './user-validation-yup.js';
import { ToastContainer, toast } from 'react-toastify';
import ToastError from './helpers/ToastError.js';
import 'react-toastify/dist/ReactToastify.css';

import {
  StyledFormik,
  Button,
  FormInput,
  FormLabel,
  RadioContainer,
  UserInfo,
  UserPersonalInfo,
  UserHealthlInfo,
  ActivityLabel,
} from './UserForm.styled.js';

import { RadioInput } from './RadioInput/RadioInput.jsx';
import { PersonalInfoItem } from './PersonalInfoItem/PersonalInfoItem.jsx';
import { DatePickerItem } from './DatePicker/DatePicker.jsx';
import { useDispatch } from 'react-redux';
import { getCurrent } from '../../../redux/auth/api.js';
import { store } from '../../../redux/store.js';

export const UserForm = () => {

  const dispatch = useDispatch();
  const getUserInfo = async () => {
    const user = await dispatch(getCurrent())
    return user;
  }

  const user = getUserInfo();
  console.log(user);

 let defaultValues = {
    name: user.name,
    email: user.email,
    height: '',
    currentWeight: '',
    desiredWeight: '',
    birthday: '',
    blood: '',
    sex: '',
    levelActivity: '',
  };

  const handleSubmit = (values) => {
    try {
      toast.success('Success');
    } catch (error) {
      toast.error('Oops,error');
    }
  };

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <StyledFormik>
          <UserInfo>
            <div>
              <FormLabel>Name</FormLabel>
              <FormInput type="text" name="name" />
              <ToastError name="name" />
            </div>
            <div>
              <FormLabel>Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={defaultValues.email}
                disabled
              />
              <ToastError name="email" />
            </div>
          </UserInfo>

          <UserPersonalInfo>
            {bodyInfo.map(option => (
              <PersonalInfoItem
                key={option.id}
                id={option.id}
                name={option.name}
                label={option.label}
              />
            ))}
            <div>
              <FormLabel>Day of Birth</FormLabel>
              <div style={{ position: 'relative' }} > <DatePickerItem/></div>
            </div>
          </UserPersonalInfo>

          <UserHealthlInfo>
            <div>
              <FormLabel>Blood</FormLabel>
              <RadioContainer>
                {bloodOptions.map(option => (
                  <RadioInput
                    key={option.id}
                    id={option.id}
                    name="blood"
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </RadioContainer>
              <ToastError name="blood"/>
            </div>

            <RadioContainer>
              {sexOptions.map(option => (
                <RadioInput
                  key={option.id}
                  id={option.id}
                  name="sex"
                  value={option.value}
                  label={option.label}
                />
              ))}
              <ToastError name="sex"/>
            </RadioContainer>
          </UserHealthlInfo>

          <ActivityLabel>
            {levelOptions.map(option => (
              <RadioInput
                key={option.id}
                id={option.id}
                name="activity"
                value={option.value}
                label={option.label}
              />
            ))}
            <ToastError name="levelActivity"/>
          </ActivityLabel>
          <Button type="submit" disabled={!formikProps.dirty} >Save</Button>
          <ToastContainer />
        </StyledFormik>
      )}
    </Formik>
  );
};
