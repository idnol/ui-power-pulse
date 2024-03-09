import { ContainerSubcategoriesImage, ContainerSubcategoriesLi, ContainerTextSubcategories, SubcategoriesH3, SubcategoriesH4 } from "./ExercisesSubcategoriesItem.styled";

export default function ExercisesSubcategoriesItem({ subcategory }) {
  return (
    <ContainerSubcategoriesLi>
      <ContainerSubcategoriesImage src={subcategory.imgURL} alt={subcategory.name}/>
      <ContainerTextSubcategories>
        <SubcategoriesH3>{subcategory.name}</SubcategoriesH3>
        <SubcategoriesH4>{subcategory.filter}</SubcategoriesH4>
      </ContainerTextSubcategories>
    </ContainerSubcategoriesLi>
  );
}