import { DayExercises } from '../../components/DayExercises/DayExercises';
import { DayProducts } from '../../components/DayProducts/DayProducts';
import { DayDashboard } from '../../components/DiaryPage/DayDashBoard/DayDashboard';
// import { Wrapper } from '../WelcomePage/WelcomePage.styled.js';
import { HeadWrapper, InfoWrapper, Wrapper, DiaryWrapper, DiarySection } from './DiaryPage.styled.js';
import StyledDatepicker from "../../components/DatePicker/StyledDatePicker.jsx";
import { TitlePage } from '../../components/parts/TitlePage/TitlePage.jsx';

export default function DiaryPage() {
  const productList = {};
  return (
    <DiarySection>
      <div className="container">
        <div className="row">
          <Wrapper>
            <HeadWrapper className='diaryHeadWrapper'>
              <TitlePage>Diary</TitlePage>
              <StyledDatepicker />
            </HeadWrapper>
            <DiaryWrapper>
              <InfoWrapper>
                <DayProducts productList={productList} />
                <DayExercises />
              </InfoWrapper>
              <DayDashboard />
            </DiaryWrapper>
          </Wrapper>
        </div>
      </div>
    </DiarySection>
  );
}
