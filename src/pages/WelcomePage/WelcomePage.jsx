import { Welcome } from '../../components/Welcome/Welcome';
import { StatisticsInfo } from '../../components/StatisticsInfo/StatisticsInfo';
import { WelcomeSection, Wrapper } from './WelcomePage.styled.js';

export default function WelcomePage() {
  return (
    <WelcomeSection>
      <div className="container">
       
          <Wrapper>
            <Welcome />
            <StatisticsInfo />
          </Wrapper>
       
      </div>
    </WelcomeSection>
  );
}
