import { AddBtn, BtnContainer, BtnWrapper, DietBox, ProductCard, ProductInfoData, ProductInfoText, ProductInfoWrapper, RecomendedText, ProductTitle, RecomendSwitch, TitleWrapper, IconSvg, IconTitle } from "./ProductItem.styled";
import sprite from 'assets/sprite-2.svg';

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
          <IconSvg >
           <use href={`${sprite}#arrow`} />
          </IconSvg>
        </AddBtn>
      </BtnWrapper>
    </BtnContainer>

    <TitleWrapper>
      <IconTitle>
       <use href={`${sprite}#run-man-circle`} />
      </IconTitle>
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
