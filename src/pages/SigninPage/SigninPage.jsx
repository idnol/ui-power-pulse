import { SignInForm } from "../../components/AuthForms/SignInForm";
import { Wrapper } from '../WelcomePage/WelcomePage.styled.js';
import { SignUpForm } from '../../components/AuthForms/SignUpForm.jsx';
import { StatisticsInfo } from '../../components/StatisticsInfo/StatisticsInfo.jsx';

export default function SigninPage() {
  return (
        <section>
        <div className="container">
          <div className="row">
            <Wrapper>
              <SignInForm />
              <StatisticsInfo/>
            </Wrapper>
          </div>
        </div>
      </section>
    )
}