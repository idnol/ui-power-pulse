import { DayExercises } from '../../components/DayExercises/DayExercises';
import { DayProducts } from '../../components/DayProducts/DayProducts';
import { DayDashboard } from '../../components/DiaryPage/DayDashBoard/DayDashboard';
import { HeadWrapper, InfoWrapper, Title, Wrapper, DiaryWrapper } from './DiaryPage.styled.js';
import StyledDatepicker from "../../components/DatePicker/StyledDatePicker.jsx";
import { NewDatePicker } from '../../components/NewDatePicker/NewDatePicker.jsx';

export default function DiaryPage() {
  const productList = {};
  return (
    <section>
      <div className="container">
        <div className="row">
          <Wrapper>
            <HeadWrapper>
              <Title>Diary</Title>
              <StyledDatepicker />
              <NewDatePicker />
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
    </section>
  );
}
