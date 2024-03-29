import { useEffect, useRef, useState } from 'react';
import { theme } from '../../vars';
import { AddExerciseSuccess } from '../AddExerciseSuccess/AddExerciseSuccess';
import {
  ContainerImg,
  ContainerTimer,
  StyledBtn,
  StyledCalories,
  StyledContainer,
  StyledList,
  StyledSecondaryText,
  StyledSmallText,
  StyledStartBtn,
} from './AddExerciseForm.styled';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import sprite from 'assets/sprite-2.svg';
import { ExerciseDetailsItem } from '../ExerciseDetailsItem/ExerciseDetailsItem';
import { useDispatch } from 'react-redux';
import { addExercise } from '../../redux/diary/api';
import { toast } from 'react-hot-toast';


export const AddExerciseForm = ({
  item = {
    name: 'N/A',
    target: 'N/A',
    bodyPart: 'N/A',
    equipment: 'N/A',
    gifUrl: '',
    burnedCalories: 0,
    _id: 'N/A',
  },
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBurnedCal, setCurrentBurnedCal] = useState(0);
  const remainingTimeRef = useRef(180);
  const [timerKey, setTimerKey] = useState(0);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [totalBurnedCal, setTotalBurnedCal] = useState(0);

  const {
    name,
    target,
    bodyPart,
    equipment,
    gifUrl,
    burnedCalories,
    _id: id,
  } = item;
  const duration = 180;
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;

    const calculateCalories = () => {
      if (isPlaying) {
        const elapsedSeconds = duration - (remainingTimeRef.current - 1);
        const caloriesPerTraining = burnedCalories;
        setCurrentBurnedCal(
          Math.floor((elapsedSeconds * caloriesPerTraining) / duration)
        );
      }
    };

    if (isPlaying) {
      interval = setInterval(calculateCalories, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [burnedCalories, isPlaying]);

  const timeFormat = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formattedSeconds}`;
  };

  const togglePlayStop = () => {
    if (!isPlaying && remainingTimeRef.current === 0) {
      setTimerKey(prevKey => prevKey + 1);
      remainingTimeRef.current = duration;
      setCurrentBurnedCal(0);
    }
    setIsPlaying(!isPlaying);
  };

  const onComplete = () => {
    setTotalTime(prevTotalTime => prevTotalTime + duration - remainingTimeRef.current);
    setTotalBurnedCal(prevTotalBurnedCal => prevTotalBurnedCal + currentBurnedCal);
    setTimerKey((prevKey) => prevKey + 1);
    setIsPlaying(false);
    setCurrentBurnedCal(0);
    return { shouldRepeat: false };
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        exercise: id,
        time: (duration - remainingTimeRef.current) + totalTime,
      };

      const resultAction = await dispatch(addExercise(data));

      if (addExercise.fulfilled.match(resultAction)) {
        setIsOpenSuccess(true);
      } else {
        setIsOpenSuccess(false);
        toast.error('Oops, something went wrong');
      }
    } catch (error) {
      setIsOpenSuccess(false);
      toast.error('Oops, something went wrong');
    }
  };

  const comboModal = () => {
    onClose();
    setIsOpenSuccess(false);
  };

  return (
    <>
      {!isOpenSuccess && (
        <form onSubmit={onSubmit}>
          <StyledContainer>
            <ContainerImg>
              <img src={gifUrl} alt={name}></img>
            </ContainerImg>
            <ContainerTimer>
              <StyledSmallText>Time</StyledSmallText>
              <CountdownCircleTimer
                key={timerKey}
                isPlaying={isPlaying}
                size={124}
                strokeWidth={4}
                trailColor={`${theme.color.greySixth}`}
                duration={180}
                colors={`${theme.color.orange}`}
                onComplete={onComplete}
              >
                {({ remainingTime }) => {
                  remainingTimeRef.current = remainingTime;
                  return timeFormat({ remainingTime });
                }}
              </CountdownCircleTimer>
              <StyledStartBtn
                type="button"
                onClick={() => {
                  togglePlayStop();
                }}
              >
                <svg
                  width="32"
                  height="32"
                  stroke={`${theme.color.orange}`}
                  viewBox="0 0 32 32"
                >
                  {isPlaying ? (
                    <use href={`${sprite}#pause-btn`} />
                  ) : (
                    <use href={`${sprite}#play-btn`} />
                  )}
                </svg>
              </StyledStartBtn>
              <StyledSecondaryText>
                Burned calories:{' '}
                <StyledCalories>{Math.floor(currentBurnedCal + totalBurnedCal)}</StyledCalories>
              </StyledSecondaryText>
            </ContainerTimer>
            <StyledList>
              <ExerciseDetailsItem tittle="Name" name={name} />
              <ExerciseDetailsItem tittle="Target" name={target} />
              <ExerciseDetailsItem tittle="Body Part" name={bodyPart} />
              <ExerciseDetailsItem tittle="Equipment" name={equipment} />
            </StyledList>
            <StyledBtn type="submit">Add to diary</StyledBtn>
          </StyledContainer>
        </form>
      )}
      {isOpenSuccess && (
        <AddExerciseSuccess
          calorise={Math.floor(currentBurnedCal + totalBurnedCal)}
          time={Math.floor(((duration - remainingTimeRef.current) + totalTime) / 60)}
          isOpen={isOpenSuccess}
          onClose={() => comboModal()}
        />
      )}
    </>
  );
};