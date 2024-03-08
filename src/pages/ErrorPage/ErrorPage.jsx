import { useSelector } from 'react-redux';
import {
  OrangePart,
  StyledImagePart,
  ContentContainer,
  StyledLink,
  StyledTitle,
  StyledText,
} from './ErrorPage.styled';
import { selectIsAuthenticated } from '../../redux/auth/selectors';

export default function ErrorPage() {
  const isLoggedIn = useSelector(selectIsAuthenticated);
  return (
    <section>
      <OrangePart>
        <ContentContainer>
          <StyledTitle>404</StyledTitle>
          <StyledText>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </StyledText>

          <StyledLink to={`${isLoggedIn ? '/diary' : '/'}`}>Go Home</StyledLink>
        </ContentContainer>
      </OrangePart>
      <StyledImagePart />
    </section>
  );
}
