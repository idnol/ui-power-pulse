import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.example.styled.jsx';
import sprite from 'assets/sprite.svg';

export const HeaderExample = () => {

  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/first">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          First
        </StyledLink>
        <StyledLink to="/second">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Second
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
