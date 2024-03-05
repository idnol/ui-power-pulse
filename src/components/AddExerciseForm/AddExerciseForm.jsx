import { useEffect, useRef, useState } from "react";
import { theme } from "../../vars"
import { ContainerImg, ContainerTimer, StyledBtn, StyledCalories, StyledContainer, StyledList, StyledSecondaryText, StyledSmallText, StyledStartBtn } from "./AddExerciseForm.styled"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import sprite from 'assets/sprite-2.svg';
import { ExerciseDetailsItem } from "../ExerciseDetailsItem/ExerciseDetailsItem";


export const AddExerciseForm = ({ item = { name: "N/A", target: "N/A", bodyPart: "N/A", equipment: "N/A", gifUrl: "" } }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [burnedCalories, setBurnedCalories] = useState(0);
    const remainingTimeRef = useRef(180);
    const [timerKey, setTimerKey] = useState(0);

    const { name, target, bodyPart, equipment, gifUrl } = item;
    const duration = 180;

    useEffect(() => {
        let interval = null;

        const calculateCalories = () => {
            if (isPlaying) {
                const elapsedSeconds = duration - (remainingTimeRef.current - 1);
                const caloriesPerTraining = 300;
                setBurnedCalories(Math.round((elapsedSeconds * caloriesPerTraining) / duration));
            }
        }

        if (isPlaying) {
            interval = setInterval(calculateCalories, 1000);
        };

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, [isPlaying]);

    const timeFormat = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${minutes}:${formattedSeconds}`
    };

    const togglePlayStop = () => {
        setIsPlaying(!isPlaying);
        console.log(burnedCalories);
    };

    const onComplete = () => {
        setTimerKey(prevKey => prevKey + 1);
        setIsPlaying(false);
        return { shouldRepeat: false };
    };

    return (
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
                <StyledStartBtn type="button" onClick={() => { togglePlayStop() }}>
                    <svg width="32" height="32" stroke={`${theme.color.orange}`} viewBox="0 0 32 32">
                        {isPlaying ? (
                            <use href={`${sprite}#pause-btn`} />
                        ) : (
                            <use href={`${sprite}#play-btn`} />
                        )}
                    </svg>
                </StyledStartBtn>
                <StyledSecondaryText>Burned calories: <StyledCalories>{Math.round(burnedCalories)}</StyledCalories></StyledSecondaryText>
            </ContainerTimer>
            <StyledList>
                <ExerciseDetailsItem tittle="Name" name={name} />
                <ExerciseDetailsItem tittle="Target" name={target} />
                <ExerciseDetailsItem tittle="Body Part" name={bodyPart} />
                <ExerciseDetailsItem tittle="Equipment" name={equipment} />
            </StyledList>
            <StyledBtn>Add to diary</StyledBtn>
        </StyledContainer>
    )
}