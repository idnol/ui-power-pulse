import {
  MainTitle,
  StyledSignUpNavLink,
  StyledSignInNavLink,
  SvgLine,
  Container,
  WrapperNavLink, TitleWrapper,
} from './Welcome.styled';

export const Welcome = () => {
  return (
    <>
      <Container>
        <TitleWrapper>
          <SvgLine>
            <use href="/img/sprait.svg#icon-Line" />
          </SvgLine>
          <MainTitle>Transforming your body shape with Power Pulse</MainTitle>
        </TitleWrapper>
        <WrapperNavLink>
          <StyledSignUpNavLink to="/signup">Sign Up</StyledSignUpNavLink>
          <StyledSignInNavLink to="/signin">Sign In</StyledSignInNavLink>
        </WrapperNavLink>
      </Container>
    </>
  );
};
