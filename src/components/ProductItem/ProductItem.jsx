import { AddBtn, BtnContainer, BtnWrapper, DietBox, ProductCard, ProductInfoData, ProductInfoText, ProductInfoWrapper, RecomendedText, ProductTitle, RecomendSwitch, TitleWrapper } from "./ProductItem.styled"

export const ProductItem = ({product:{title, calories, category, weight, groupBloodNotAllowed}, bloodGroup}) => {
  const notAllowed = groupBloodNotAllowed[bloodGroup];
  const isRecomended = notAllowed ? "Not recommended" : "Recommended";
  return (
    <ProductCard>

    <BtnContainer>
      <DietBox>Diet</DietBox>
      <BtnWrapper>
      <RecomendedText><RecomendSwitch $notAllowed={notAllowed}/>{isRecomended}</RecomendedText>
        <AddBtn>Add
          <svg style={{
            width: '18',
            height: '18',
            stroke: '#e6533c',
          }} >
           <use href="/img/sprait.svg#arrow" />
          </svg>
        </AddBtn>
      </BtnWrapper>
    </BtnContainer>

    <TitleWrapper>
      <svg style={{
            width: '24',
            height: '24',
          }} >
          <use href="/img/sprait.svg#run-man-circle" />
      </svg>
      <ProductTitle>{title}</ProductTitle>
    </TitleWrapper>

    <ProductInfoWrapper>
      <ProductInfoText>Calories: <ProductInfoData>{calories}</ProductInfoData></ProductInfoText>
      <ProductInfoText>Ctegory: <ProductInfoData>{category}</ProductInfoData></ProductInfoText>
      <ProductInfoText>Weight: <ProductInfoData>{weight}</ProductInfoData></ProductInfoText>
    </ProductInfoWrapper>

   </ProductCard>

  )
}
