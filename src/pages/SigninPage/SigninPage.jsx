import { SignInForm } from "../../components/AuthForms/SignInForm";
import { WelcomeSection, Wrapper } from '../WelcomePage/WelcomePage.styled.js';
import { StatisticsInfo } from '../../components/StatisticsInfo/StatisticsInfo.jsx';

export default function SigninPage() {
  return (
      <WelcomeSection>
        <div className="container">
            <Wrapper>
              <SignInForm />
              <StatisticsInfo/>
            </Wrapper>
        </div>
      </WelcomeSection>
    )
}