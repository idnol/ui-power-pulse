import { DetailsText, SmallText, StyledItem } from "./ExerciseDetailsItem.styled";


export const ExerciseDetailsItem = ({ tittle, name }) => {

    return (
        <StyledItem>
            <SmallText>{tittle}</SmallText>
            <DetailsText>{name}</DetailsText>
        </StyledItem>
    )
}