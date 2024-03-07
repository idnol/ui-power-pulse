import { DayExercises } from '../../components/DayExercises/DayExercises';
import { DayProducts } from '../../components/DayProdacts/DayProducts';
import { DayDashboard } from '../../components/DiaryPage/DayDashBoard/DayDashboard';

export default function DiaryPage() {
  return (
    <>
      <h1>diary</h1>
      <DayDashboard />
      <DayProducts />
      <DayExercises />
    </>
  );
}
