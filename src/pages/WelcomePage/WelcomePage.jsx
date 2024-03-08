import { Welcome } from '../../components/Welcome/Welcome';
import { StatisticsInfo } from '../../components/StatisticsInfo/StatisticsInfo';
import { Wrapper } from './WelcomePage.styled.js';

export default function WelcomePage() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <Wrapper>
            <Welcome />
            <StatisticsInfo />
          </Wrapper>
        </div>
      </div>
    </section>
  );
}
