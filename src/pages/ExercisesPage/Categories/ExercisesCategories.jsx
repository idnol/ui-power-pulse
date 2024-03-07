import { useState } from 'react';
import { ExercisesUl, ExercisesLi, StyledSpanCategories, ExercisesTitle, ExercisesContainer } from './ExercisesCategories.styled';

export default function ExercisesCategories({ onClick }) {
  const [activeCategory, setActiveCategory] = useState("Body parts");

  const handleClick = (category) => {
    onClick(category);
    setActiveCategory(category);
  };

  return (
    <ExercisesContainer>
      <ExercisesTitle>Exercises</ExercisesTitle>
      <ExercisesUl>
        <ExercisesLi>
          <StyledSpanCategories 
            className={activeCategory === "Body parts" ? 'active' : ''} 
            data-target="Body parts" 
            onClick={() => handleClick("Body parts")}
          >
            Body parts
          </StyledSpanCategories>
        </ExercisesLi>
        <ExercisesLi>
          <StyledSpanCategories 
            className={activeCategory === "Muscles" ? 'active' : ''} 
            data-target="Muscles" 
            onClick={() => handleClick("Muscles")}
          >
            Muscles
          </StyledSpanCategories>
        </ExercisesLi>
        <ExercisesLi>
          <StyledSpanCategories 
            className={activeCategory === "Equipment" ? 'active' : ''} 
            data-target="Equipment" 
            onClick={() => handleClick("Equipment")}
          >
            Equipment
          </StyledSpanCategories>
        </ExercisesLi>
      </ExercisesUl>
    </ExercisesContainer>
  );
}
