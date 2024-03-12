import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDiary } from '../../../redux/diary/api';
import { current } from '../../../redux/profile/api';

import sprite from 'assets/sprite-2.svg';
import {selectProfile} from "../../../redux/profile/selectors.js";

export const DayDashboardData = () => {
  const responseUser = useSelector((state) => state.auth.user) || {};
  const responseDiary = useSelector((state) => state.diary.items) || {};
  const responseProfile = useSelector(selectProfile)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
    dispatch(getDiary());
  }, [dispatch]);

  const consumedCalories = responseDiary?.statistic?.calories ?? 0;
  const dailyCalories = responseUser?.dailyCalorie ?? 0;

  const remainingCalories = dailyCalories - consumedCalories;
  const burnedCalories = responseDiary?.statistic?.burnedCalories;

  const sportTime = responseDiary?.statistic?.sportTime ?? 0;
  const physicalActivity = sportTime / 60;
  const physicalGoal = responseUser?.dailyExerciseTime ?? 0;
  const remaningTime = physicalActivity - physicalGoal;

  const dashboardData = [
    {
      icon: `${sprite}#calorie-intake`,
      title: 'Daily calorie intake',
      count: Math.floor(responseProfile.dailyCalorie),
      countType: 'cal',
      background: 'accent',
      textColor: 'whiteTextColor',
      border: 'accent',
    },
    {
      icon: `${sprite}#physical-activity`,
      title: 'Daily physical activity',
      count: responseProfile.dailyExerciseTime,
      countType: 'time',
      background: 'accent',
      textColor: 'whiteTextColor',
      border: 'accent',
    },
    {
      icon: `${sprite}#calories-consumed`,
      title: 'Calories consumed',
      count: consumedCalories,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
      border: 'defaultBorder',
    },
    {
      icon: `${sprite}#calories-burned`,
      title: 'Calories burned',
      count: burnedCalories,
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
        remaningTime >= 1
          ? `+${Math.round(remaningTime)}`
          : Math.abs(Math.round(remaningTime)),
      countType: 'time',
      background: 'default',
      textColor: 'greyTextColor',
      border: remaningTime >= 1 ? 'greenBorder' : 'defaultBorder',
    },
  ];

  return dashboardData;
};
