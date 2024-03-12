import {SignUpForm} from "../../components/AuthForms/SignUpForm"
import { StatisticsInfo } from '../../components/StatisticsInfo/StatisticsInfo.jsx';
import { WelcomeSection, Wrapper } from '../WelcomePage/WelcomePage.styled.js';

export default function SignupPage() {
  return (
        <WelcomeSection>
          <div className="container">
              <Wrapper>
                <SignUpForm />
                <StatisticsInfo/>
              </Wrapper>
          </div>
        </WelcomeSection>
  )
}