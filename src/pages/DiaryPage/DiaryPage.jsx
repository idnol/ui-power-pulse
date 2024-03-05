import { useDispatch } from 'react-redux';
import { DayProducts } from '../../components/DayProducts/DayProducts';
import { useEffect } from 'react';
import { fetchListDiaryProdact } from '../../redux/diary/api';

export default function DiaryPage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchListDiaryProdact());
  // }, [dispatch]);

  return (
    <>
      <h1>diary</h1>
      <DayProducts />
    </>
  );
}
