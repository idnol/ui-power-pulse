import {SignUpForm} from "../../components/AuthForms/SignUpForm"
import { StatisticsInfo } from '../../components/StatisticsInfo/StatisticsInfo.jsx';
import { Wrapper } from '../WelcomePage/WelcomePage.styled.js';

export default function SignupPage() {
  return (
        <section>
          <div className="container">
            <div className="row">
              <Wrapper>
                <SignUpForm />
                <StatisticsInfo/>
              </Wrapper>
            </div>
          </div>
        </section>
  )
}