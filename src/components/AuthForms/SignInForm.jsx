import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Error, StyledButton, StyledDiv, StyledGreetings, StyledInput, StyledLink, StyledSecondaryText, StyledTitle } from './AuthForms.styled';
import { PasswordField } from './PasswordField';


const schema = Yup.object().shape({
    email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "It must be valid email").required('Required'),
    password: Yup.string().min(6, "password must be at least 6 characters").required('Required')
});

export const SignInForm = () => {

    const handleLogin = (values) => {
        // dispatch(login(values));
        console.log(values);
    }

    return (
        <>

            <StyledDiv>
                <StyledTitle>Sign In</StyledTitle>
                <StyledGreetings>Welcome! Please enter your credentials to login to the platform:</StyledGreetings>

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        handleLogin(values);
                    }}>
                    <Form autoComplete="off">
                        <StyledInput type="email" name="email" placeholder="Email" />
                        <Error name="email" component="p" />
                        <StyledInput type="password" name="password" placeholder="Password" component={PasswordField} />
                        <Error name="password" component="p" />
                        <StyledButton type="submit">Sign Up</StyledButton>
                    </Form>
                </Formik>

                <StyledSecondaryText>Don’t have an account? <StyledLink to="/signup">Sign Up</StyledLink></StyledSecondaryText>
            </StyledDiv>

        </>
    )
}