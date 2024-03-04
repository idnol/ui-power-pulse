import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  BtnBox,
  CaloriesText,
  ErrorMessage,
  Form,
  FormBtnAdd,
  FormBtnCancel,
  LabelBox,
  Span,
  InputCalories,
  InputName,
} from './ModalForm.styled';

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
          <label>
            <InputName name="name" placeholder="Banana juice" />
            <ErrorMessage name="name" component="span" />
          </label>

          <label>
            <InputCalories name="number" />
            <ErrorMessage name="number" component="span" />
          </label>
        </LabelBox>

        <CaloriesText>
          Calories: <Span>96</Span>
        </CaloriesText>
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
