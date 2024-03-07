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

  // useEffect(() => {
  //   const fetchDiaryAndUser = async () => {
  //     await Promise.all([dispatch(getDiary()), dispatch(current())]);
  //   };

  //   fetchDiaryAndUser();
  // }, [dispatch]);

  const beData = [
    { userDailyCalories: responseUser.dailyCalorie },
    { diaryExercises: responseDiary.exercises },
    { diaryProducts: responseDiary.products },
    { diaryStats: responseDiary.statistic },
    { userCaloriesRemain: responseUser },
    { userSportsRemain: responseUser },
  ];

  console.log('beData', beData);

  // console.log(beData[4].userCaloriesRemain.dailyCalorie); calories remaining
  // console.log(beData[5].userSportsRemain.dailyExerciseTime);
  console.log(beData[1].diaryExercises);

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
      count: beData[1]?.diaryExercises?.[0]?.time / 60,
      // count: 0,
      countType: 'time',
      background: 'accent',
      textColor: 'whiteTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#calories-consumed',
      title: 'Сalories consumed',
      count: beData[2]?.diaryProducts?.[0]?.calories,
      // count: 0,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#calories-burned',
      title: 'Сalories burned',
      count: beData[3]?.diaryStats?.burnedCalories,
      // count: 0,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#calories-remaining',
      title: 'Calories remaining',
      count: parseInt(
        beData[4].userCaloriesRemain.dailyCalorie -
          beData[2]?.diaryProducts?.[0]?.calories
      ),
      // count: beData[4].userCaloriesRemain.dailyCalorie,

      // count: 0,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#sports-remaining',
      title: 'Sports remaining',
      count:
        beData[5].userSportsRemain.dailyExerciseTime -
        beData[1]?.diaryExercises?.[0]?.time / 60,
      // count: beData[5].userSportsRemain.dailyExerciseTime,
      // count: 0,
      countType: 'time',
      background: 'default',
      textColor: 'greyTextColor',
    },
  ];

  return dashboardData;
};
