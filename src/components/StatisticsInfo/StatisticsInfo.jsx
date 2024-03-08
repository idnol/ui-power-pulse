import sprite from 'assets/sprite-2.svg';
import {FirstElementIconWrapper, FirstElementNumber, FirstElementText, FirstElementWrapper,
        SecondElementDataWrapper, SecondElementNumber, SecondElementText, SecondElementWrapper,
        StatisticsInfoWrapper, SvgStyledFirst, SvgStyledSecond, SvgVideo, SvgVideoWrapper, SvgWrapper,} from './StatisticsInfo.styled';
import { useDispatch, useSelector } from 'react-redux';
import { statisticsGetAll } from '../../redux/statistics/api';
import { selectStatistics } from '../../redux/statistics/selectors';
import { useEffect } from 'react';
import { findValue, formattedData, getRandomNumber } from './helpers';

export const StatisticsInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(statisticsGetAll()); }, [dispatch]);

  const items = useSelector(selectStatistics); 

  const usersAll = formattedData(findValue("userQuantity", items));
  const videoAll = formattedData(findValue("exercisesQuantity", items));
  const usersBurnedCalories = formattedData(findValue("burnedCaloriesUsersTotal", items));
  const usersTimes = formattedData(findValue("sportTimeUsersTotal", items));
  const usersExercises = formattedData(findValue("exercisesUsersTotal", items));

  const firstBtn = getRandomNumber(1, 3);
  const secondBtn = getRandomNumber(4, 5);

  return (
    <StatisticsInfoWrapper>
      { (videoAll || usersAll || usersExercises) && (
      <FirstElementWrapper>
        <FirstElementIconWrapper>
          { videoAll && firstBtn === 1 &&
            (<SvgVideoWrapper>
              <SvgVideo> <use href={`${sprite}#triangle`} /> </SvgVideo>
            </SvgVideoWrapper>)}
            
          { usersAll && firstBtn === 2 &&
            (<SvgWrapper>
              <SvgStyledFirst> <use href={`${sprite}#icon-user`} /> </SvgStyledFirst>
            </SvgWrapper>) }
            
          { usersExercises && firstBtn === 3 &&
            (<SvgWrapper>
              <SvgStyledFirst> <use href={`${sprite}#dumbbell-stat`} /> </SvgStyledFirst>
            </SvgWrapper>) }
        </FirstElementIconWrapper>

        <div>
          <FirstElementNumber>
            { firstBtn === 1 && videoAll && videoAll }
            { firstBtn === 2 && usersAll && usersAll }
            { firstBtn === 3 && usersExercises && usersExercises }
          </FirstElementNumber>
          <FirstElementText>
            { firstBtn === 1 && videoAll && `Video tutorial`}
            { firstBtn === 2 && usersAll && `Users`}
            { firstBtn === 3 && usersExercises && `Exercises`}
          </FirstElementText>
        </div>

      </FirstElementWrapper>  )}      

      { (usersTimes || usersExercises) && (
      <SecondElementWrapper>
        <SvgStyledSecond> <use href={`${sprite}#run-man-circle`} /> </SvgStyledSecond>

        <SecondElementDataWrapper>
          <SecondElementNumber>
            { secondBtn === 4 && usersBurnedCalories }
            { secondBtn === 5 && usersTimes }
          </SecondElementNumber>
          <SecondElementText>
            { secondBtn === 4 && usersBurnedCalories && `cal`}
            { secondBtn === 5 && usersTimes && `min`}
          </SecondElementText>
        </SecondElementDataWrapper>
      </SecondElementWrapper> )}

    </StatisticsInfoWrapper>
) }