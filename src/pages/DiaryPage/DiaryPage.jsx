import { DayExercises } from '../../components/DayExercises/DayExercises';
import { DayProducts } from '../../components/DayProducts/DayProducts';
import { DayDashboard } from '../../components/DiaryPage/DayDashBoard/DayDashboard';
import { Wrapper } from '../WelcomePage/WelcomePage.styled.js';
import { InfoWrapper } from './DiaryPage.styled.js';

export default function DiaryPage() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <Wrapper>
            <InfoWrapper>
              <DayProducts />
              <DayExercises />
            </InfoWrapper>
            <DayDashboard />
          </Wrapper>
        </div>
      </div>
    </section>
  );
}
