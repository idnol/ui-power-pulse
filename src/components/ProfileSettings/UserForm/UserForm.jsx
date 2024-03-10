import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {bloodOptions,sexOptions,levelOptions,bodyInfo} from './form-default-data.js'
import { userSchema } from './user-validation-yup.js';
import { ToastContainer} from 'react-toastify';
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
import { updateProfile } from '../../../redux/profile/api.js';
import {selectProfile} from '../../../redux/profile/selectors.js'

export const UserForm = () => {
  const dispatch = useDispatch();
  const profileData = useSelector(selectProfile);

  const initialValues = {
    name: profileData.name || 'Name',
    email:profileData.email,
    height: (profileData.bodyData && profileData.bodyData.height) || 150,
    currentWeight: (profileData.bodyData && profileData.bodyData.currentWeight) || 35,
    desiredWeight: (profileData.bodyData && profileData.bodyData.desiredWeight) || 35,
    birthday: '2006-01-02',
    blood: profileData.bodyData.blood || 1,
    sex: profileData.bodyData.sex || 'male',
    levelActivity: parseInt(profileData.bodyData?.levelActivity, 10) || 1,
  };


  const handleSubmit = async (values) => {

    if (profileData.bodyData) {
      if (JSON.stringify(values) === JSON.stringify(initialValues)) {
        toast.error('Nothing to change');
        return;
      }
      try {
        // const userData = { ...profileData, ...values }
        const { _id, ...restData } = profileData;
        const userData = { _id, ...values,blood: parseInt(values.blood, 10) };
        
        console.log(userData);
        dispatch(updateProfile({_id,...restData.bodyData,...userData}));
        // console.log(userData)
        // dispatch(updateProfile(userData));
      } catch (error) {
        toast.error('Error updating user data:', error);
      }
    } else {
      toast.warning('User bodyData is missing or not fully populated. Form not submitted.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      {formikProps => {
        return (
          <StyledFormik>
            <UserInfo>
              <div>
                <FormLabel>Name</FormLabel>
                <FormInput type="text" name="name"/>
                <ToastError name="name" />
              </div>
              <div>
                <FormLabel>Email</FormLabel>
                <FormInput
                  type="email"
                  name="email"
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
                <div style={{ position: 'relative' }} > <DatePickerItem number={initialValues.birthday} /></div>
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
                      label={option.label}
                      onChange={() => formikProps.setFieldValue('blood', option.id)}
                      checked={formikProps.values.blood == option.id}
                    />
                  ))}
                </RadioContainer>
                <ToastError name="blood" />
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
                <ToastError name="sex" />
              </RadioContainer>
            </UserHealthlInfo>

            <ActivityLabel>
              {levelOptions.map(option => (
                <RadioInput
                  key={option.id}
                  id={option.id}
                  name="levelActivity"
                  label={option.label}
                  onChange={() => formikProps.setFieldValue('levelActivity', option.value)}
                  checked={formikProps.values.levelActivity === option.value}
                />
              ))}
              <ToastError name="levelActivity" />
            </ActivityLabel>
            <Button type="submit" disabled={!formikProps.dirty} >Save</Button>
            <ToastContainer />
          </StyledFormik>
        );
      }}
    </Formik>
  );
};