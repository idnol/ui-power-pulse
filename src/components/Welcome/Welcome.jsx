import {
  MainTitle,
  StyledSignUpNavLink,
  StyledSignInNavLink,
  SvgLine,
  Container,
  WrapperNavLink, TitleWrapper,
} from './Welcome.styled';
import sprite from 'assets/sprite-2.svg'

export const Welcome = () => {
  return (
    <>
      <Container>
        <TitleWrapper>
          <SvgLine>
            <use href={`${sprite}#icon-Line`} />
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
