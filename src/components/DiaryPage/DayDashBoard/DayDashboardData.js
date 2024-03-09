import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDiary } from '../../../redux/diary/api';
import { current } from '../../../redux/profile/api';

import sprite from 'assets/sprite-2.svg';

export const DayDashboardData = () => {
  // const responseDiary = useSelector((state) => state.diary.items) || {};
  const responseUser = useSelector((state) => state.auth.user) || {};
  console.log('🚀 ~ DayDashboardData ~ responseUser:', responseUser);

  const responseDiary = useSelector((state) => state.diary.items) || {};
  console.log('🚀 ~ DayDashboardData ~ responseDiary:', responseDiary);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
    dispatch(getDiary());
  }, [dispatch]);

  const beData = [{ userData: responseUser }, { diaryData: responseDiary }];

  let remaingTime =
    (beData[1]?.diaryData?.statistic?.sportTime !== undefined
      ? beData[1]?.diaryData?.statistic?.sportTime / 60
      : 0) -
    (beData[0]?.userData?.dailyExerciseTime !== undefined
      ? beData[0]?.userData?.dailyExerciseTime
      : 0);

  console.log(remaingTime);

  if (remaingTime > 0) {
    remaingTime = `+${Math.abs(Math.round(remaingTime))}`;
  } else {
    remaingTime = Math.abs(Math.round(remaingTime));
  }

  console.log(beData[1]);

  const dashboardData = [
    {
      icon: `${sprite}#calorie-intake`,
      title: 'Daily calorie intake',
      count: beData[0]?.userData?.dailyCalorie ?? 0,
      countType: 'cal',
      background: 'accent',
      textColor: 'whiteTextColor',
    },
    {
      icon: `${sprite}#physical-activity`,
      title: 'Daily physical activity',
      count: beData[0]?.userData?.dailyExerciseTime ?? 0,
      countType: 'time',
      background: 'accent',
      textColor: 'whiteTextColor',
    },
    {
      icon: `${sprite}#calories-consumed`,
      title: 'Сalories consumed',

      count: beData[1]?.diaryData?.statistic?.calories ?? 0,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
    },
    {
      icon: `${sprite}#calories-burned`,
      title: 'Сalories burned',
      count: beData[1]?.diaryData?.statistic?.burnedCalories ?? 0,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
    },
    {
      icon: `${sprite}#calories-remaining`,
      title: 'Calories remaining',
      count:
        beData[0]?.userData?.dailyCalorie -
          beData[1]?.diaryData?.statistic?.calories ?? 0,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
    },
    {
      icon: `${sprite}#sports-remaining`,
      title: 'Sports remaining',
      count: remaingTime,
      // count:
      //   beData[1]?.diaryData?.statistic?.sportTime / 60 -
      //   beData[0]?.userData?.dailyExerciseTime,
      countType: 'time',
      background: 'default',
      textColor: 'greyTextColor',
    },
  ];

  return dashboardData;
};
