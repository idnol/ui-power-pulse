import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import {
  BtnBox,
  CaloriesText,
  ErrorMessage,
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

const ProductSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string().required('Required'),
});

export const ProductForm = ({ onClose }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ProductSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}
    >
      <Form>
        <LabelBox>
          <InputName name="name" placeholder="Banana juice" />
          <ErrorMessage name="name" component="span" />

          <BoxCalories>
            <InputCalories name="number" />
            <Grams>grams</Grams>
          </BoxCalories>
          <ErrorMessage name="number" component="span" />
        </LabelBox>
        <CountsPro>
          <CaloriesText>Calories:</CaloriesText>
          <Value>96</Value>
        </CountsPro>

        <BtnBox>
          <FormBtnAdd type="submit">Add to diary</FormBtnAdd>
          <FormBtnCancel type="button" onClick={onClose}>
            Cancel
          </FormBtnCancel>
        </BtnBox>
      </Form>
    </Formik>
  );
};
