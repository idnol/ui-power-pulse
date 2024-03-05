import * as Yup from 'yup';
import { StyledDiv, StyledGreetings, StyledLink, StyledSecondaryText, StyledTitle } from './AuthForms.styled';
import { AuthForm } from './AuthForm';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/api.js';


const schema = Yup.object().shape({
    email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "It must be valid email").required('Required'),
    password: Yup.string().min(6, "password must be at least 6 characters").required('Required')
});

export const SignInForm = () => {
    const dispatch = useDispatch();

    const handleLogin = (values) => {
        dispatch(login(values))
    }

    return (
        <>

            <StyledDiv>
                <StyledTitle>Sign In</StyledTitle>
                <StyledGreetings>Welcome! Please enter your credentials to login to the platform:</StyledGreetings>
                <AuthForm schema={schema} handleSubmit={handleLogin} btnContent="Sign In" />
                <StyledSecondaryText>Don’t have an account? <StyledLink to="/signup">Sign Up</StyledLink></StyledSecondaryText>
            </StyledDiv>

        </>
    )
}