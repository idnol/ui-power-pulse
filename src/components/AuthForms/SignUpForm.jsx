import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Error, StyledButton, StyledDiv, StyledGreetings, StyledInput, StyledLink, StyledSecondaryText, StyledTitle } from './AuthForms.styled';


const schema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required('Required'),
    email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "It must be valid email").required('Required'),
    password: Yup.string().min(6, "password must be at least 6 characters").required('Required')
});

export const SignUpForm = () => {

    const handleRegistration = (values) => {
        // dispatch(login(values));
        console.log(values);
    }

    return (
        <>

            <StyledDiv>
                <StyledTitle>Sign Up</StyledTitle>
                <StyledGreetings>Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.</StyledGreetings>

                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        handleRegistration(values);
                    }}>
                    <Form autoComplete="off">
                        <StyledInput type="text" name="name" placeholder="Name" />
                        <Error name="name" component="p" />
                        <StyledInput type="email" name="email" placeholder="Email" />
                        <Error name="email" component="p" />
                        <StyledInput type="password" name="password" placeholder="Password" />
                        <Error name="password" component="p" />
                        <StyledButton type="submit">Sign Up</StyledButton>
                    </Form>
                </Formik>

                <StyledSecondaryText>Already have an account? <StyledLink to="/signin">Sign In</StyledLink></StyledSecondaryText>
            </StyledDiv>

        </>
    )
}