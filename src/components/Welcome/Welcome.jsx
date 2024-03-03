import {
  MainTitle,
  StyledSignUpNavLink,
  StyledSignInNavLink,
  SvgLine,
  Container,
  WrapperNavLink,
} from './Welcome.styled';

export const Welcome = () => {
  return (
    <>
      <Container>
        <SvgLine>
          <use href="/img/sprait.svg#icon-Line" />
        </SvgLine>
        <MainTitle>Transforming your body shape with Power Pulse</MainTitle>
        <WrapperNavLink>
          <StyledSignUpNavLink to="/signup">Sign Up</StyledSignUpNavLink>
          <StyledSignInNavLink to="/signin">Sign In</StyledSignInNavLink>
        </WrapperNavLink>
      </Container>
    </>
  );
};
