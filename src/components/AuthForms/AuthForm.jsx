import { useState } from 'react';
import { Error, StyledButton, StyledEye, StyledIFormWrapper, StyledInput, StyledInputWrapper } from './AuthForms.styled';
import { Form, Formik } from 'formik';
import sprite from 'assets/sprite-2.svg';


export const AuthForm = ({ schema, handleSubmit, register }) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPas = () => {
        return showPassword ? 'text' : 'password';
    }

    const initialValues = register ? {
        email: '',
        password: '',
        name: '',
    } : {
        email: '',
        password: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                handleSubmit(values);
            }}>
            {({ errors, touched }) => (
                <Form autoComplete="off">
                    <StyledIFormWrapper>
                        {register && (
                            <>
                                <StyledInput type="text" name="name" placeholder="Name" error={(errors.name && touched.name) ? "true" : "false"} touched={touched.name ? "true" : "false"} />
                                <Error name="name" component="p" />
                            </>
                        )}
                        <StyledInput type="email" name="email" placeholder="Email" error={(errors.email && touched.email) ? "true" : "false"} touched={touched.email ? "true" : "false"} />
                        <Error name="email" component="p" />
                        <StyledInputWrapper>
                            <StyledInput name="password" type={handleShowPas()} placeholder="Password" error={(errors.password && touched.password) ? "true" : "false"} touched={touched.password ? "true" : "false"} />
                            <StyledEye type="button" onClick={() => setShowPassword(!showPassword)}>
                                <svg width="20" height="20" stroke="#efede8" viewBox="0 0 20 20">
                                    {showPassword ? (
                                        <use href={`${sprite}#eye-off`} />
                                    ) : (
                                        <use href={`${sprite}#eye`} />
                                    )}
                                </svg>
                            </StyledEye>
                        </StyledInputWrapper >
                        <Error name="password" component="p" />
                    </StyledIFormWrapper>
                    <StyledButton type="submit">Sign Up</StyledButton>
                </Form>
            )}
        </Formik>
    )
}