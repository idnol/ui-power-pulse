import { useEffect } from 'react';
import {
  OrangePart,
  ContentContainer,
  StyledLink,
  StyledTitle,
  StyledText,
} from './ErrorPage.styled';

export default function ErrorPage() {
  const headerLayout = document.getElementById('hdr-layout');
  useEffect(() => {
    headerLayout.style.borderBottom = 'none';
    console.dir(headerLayout.style);
  });

  // Link веде на WelcomePage/Diary залежить від авторизації
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

          <StyledLink to={'/'}>Go Home</StyledLink>
        </ContentContainer>
      </OrangePart>
    </section>
  );
}
