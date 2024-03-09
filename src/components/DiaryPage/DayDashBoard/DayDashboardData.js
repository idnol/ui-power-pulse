import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDiary } from '../../../redux/diary/api';
import { current } from '../../../redux/profile/api';

import sprite from 'assets/sprite-2.svg';

export const DayDashboardData = () => {
  const responseUser = useSelector((state) => state.auth.user) || {};
  const responseDiary = useSelector((state) => state.diary.items) || 0;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
    dispatch(getDiary());
  }, [dispatch]);

  const beData = [{ userData: responseUser }, { diaryData: responseDiary }];

  const physicalActivity =
    (beData[1]?.diaryData?.statistic?.sportTime ?? 0) / 60;

  const physicalGoal = beData[0]?.userData?.dailyExerciseTime;

  let remaningTime = physicalActivity - physicalGoal;

  const consumedCalories = beData[1]?.diaryData?.statistic?.calories || 0;
  const remainingCalories =
    beData[0]?.userData?.dailyCalorie - consumedCalories;

  const dashboardData = [
    {
      icon: `${sprite}#calorie-intake`,
      title: 'Daily calorie intake',
      count: beData[0]?.userData?.dailyCalorie ?? 0,
      countType: 'cal',
      background: 'accent',
      textColor: 'whiteTextColor',
      border: 'accent',
    },
    {
      icon: `${sprite}#physical-activity`,
      title: 'Daily physical activity',
      count: beData[0]?.userData?.dailyExerciseTime ?? 0,
      countType: 'time',
      background: 'accent',
      textColor: 'whiteTextColor',
      border: 'accent',
    },
    {
      icon: `${sprite}#calories-consumed`,
      title: 'Сalories consumed',
      count: beData[1]?.diaryData?.statistic?.calories ?? 0,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
      border: 'defaultBorder',
    },
    {
      icon: `${sprite}#calories-burned`,
      title: 'Сalories burned',
      count: beData[1]?.diaryData?.statistic?.burnedCalories ?? 0,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
      border: 'defaultBorder',
    },
    {
      icon: `${sprite}#calories-remaining`,
      title: 'Calories remaining',
      count: remainingCalories,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
      border: remainingCalories < 0 ? 'redBorder' : 'defaultBorder',
    },
    {
      icon: `${sprite}#sports-remaining`,
      title: 'Sports remaining',
      count:
        remaningTime > 0
          ? `+${Math.round(remaningTime)}`
          : Math.abs(Math.round(remaningTime)),
      countType: 'time',
      background: 'default',
      textColor: 'greyTextColor',
      border: remaningTime > 0 ? 'greenBorder' : 'defaultBorder',
    },
  ];

  return dashboardData;
};
