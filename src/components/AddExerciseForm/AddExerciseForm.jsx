import { useState } from "react";
import { theme } from "../../vars"
import { ContainerImg, ContainerTimer, StyledBtn, StyledCalories, StyledContainer, StyledItem, StyledList, StyledSmallText, StyledStartBtn } from "./AddExerciseForm.styled"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import sprite from 'assets/sprite-2.svg';
import { StyledText } from "../parts/ReusableStyles.styled";

export const AddExerciseForm = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [burnedCalories, setBurnedCalories] = useState(0);

    const timeFormatAndCalories = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        const duration = 180;

        if (isPlaying) {
            const elapsedSeconds = duration - remainingTime;
            const caloriesPerTraining = 300;
            setBurnedCalories((elapsedSeconds * caloriesPerTraining) / duration);
        }

        return `${minutes}:${formattedSeconds}`
    }

    const togglePlayStop = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <StyledContainer>
            <ContainerImg>
                <img src="" alt=""></img>
            </ContainerImg>
            <ContainerTimer>
                <StyledSmallText>Time</StyledSmallText>
                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    size={124}
                    strokeWidth={4}
                    trailColor={`${theme.color.greySixth}`}
                    duration={180}
                    colors={`${theme.color.orange}`}
                >
                    {timeFormatAndCalories}
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
                <StyledText>Burned calories: <StyledCalories>{Math.round(burnedCalories)}</StyledCalories></StyledText>
            </ContainerTimer>
            <StyledList>
                <StyledItem></StyledItem>
                <StyledItem></StyledItem>
                <StyledItem></StyledItem>
                <StyledItem></StyledItem>
            </StyledList>
            <StyledBtn>Add to diary</StyledBtn>
        </StyledContainer>
    )
}