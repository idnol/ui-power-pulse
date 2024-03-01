import { AddBtn, BtnContainer, DietBox, ProductCard, ProductText, RecomendSwitch } from "./ProductItem.styled"

export const ProductItem = ({product:{title, calories, category, weight, groupBloodNotAllowed}, bloodGroup}) => {
  const notAllowed = groupBloodNotAllowed[bloodGroup];
  const isRecomended = notAllowed ? "Not recommended" : "Recommended";
  return (
    <ProductCard>
      <BtnContainer>
      <DietBox>Diet</DietBox>
      <ProductText><RecomendSwitch $notAllowed={notAllowed}/>{isRecomended}</ProductText>
        <AddBtn>Add<svg style={{
            width: '20',
            height: '20',
            stroke: '#e6533c',
          }} >
          <use href="/img/sprait.svg#arrow" />
        </svg></AddBtn>
        </BtnContainer>
      <h3>{title}</h3>
      <div>
      <p>Calories: <span>{calories}</span></p>
      <p>Ctegory: <span>{category}</span></p>
      <p>Weight: <span>{weight}</span></p>
        </div>
   </ProductCard>

  )
}
