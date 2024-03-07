import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDiary } from '../../../redux/diary/api';
import { current } from '../../../redux/profile/api';

// import sprite from 'assets/sprite-2.svg';

export const DayDashboardData = () => {
  const responseDiary = useSelector((state) => state.diary.items);
  console.log('🚀 ~ DayDashboardData ~ responseDiary:', responseDiary);
  const responseUser = useSelector((state) => state.auth.user);
  console.log('🚀 ~ DayDashboardData ~ responseUser:', responseUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiary());
    dispatch(current());
  }, [dispatch]);

  const beData = [
    { userDailyCalories: responseUser.dailyCalorie },
    { diaryExercises: responseDiary.statistic },
    { diaryProducts: responseDiary.statistic },
    { diaryStats: responseDiary.statistic },
    { userCaloriesRemain: responseUser },
    { userSportsRemain: responseUser },
  ];

  let remaingTime =
    beData[1]?.diaryExercises?.sportTime / 60 -
    beData[5].userSportsRemain.dailyExerciseTime;
  if (remaingTime > 0) {
    remaingTime = `+${Math.abs(remaingTime)}`;
  }

  const dashboardData = [
    {
      icon: '../../../../public/img/sprait.svg#calorie-intake',
      title: 'Daily calorie intake',
      count: beData[0].userDailyCalories,
      countType: 'cal',
      background: 'accent',
      textColor: 'whiteTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#physical-activity',
      title: 'Daily physical activity',
      count: beData[5].userSportsRemain.dailyExerciseTime,
      countType: 'time',
      background: 'accent',
      textColor: 'whiteTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#calories-consumed',
      title: 'Сalories consumed',

      count: beData[2]?.diaryProducts?.calories,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#calories-burned',
      title: 'Сalories burned',
      count: beData[3]?.diaryStats?.burnedCalories,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#calories-remaining',
      title: 'Calories remaining',
      count:
        beData[4]?.userCaloriesRemain?.dailyCalorie -
        beData[2]?.diaryProducts?.calories,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#sports-remaining',
      title: 'Sports remaining',

      // count: beData[1]?.diaryExercises?.sportTime / 60,
      count: remaingTime,
      countType: 'time',
      background: 'default',
      textColor: 'greyTextColor',
    },
  ];

  return dashboardData;
};
