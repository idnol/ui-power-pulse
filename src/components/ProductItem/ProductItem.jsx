import { useState } from "react";
import { StatsList } from "../ListItem/ListItem.styled";
import { ListItemName } from "../parts/ListItemName/ListItemName";
import { StatItem } from "../StatsItem/StatsItem";
import { AddBtn, BtnContainer, BtnWrapper, DietBox, ProductCard, RecomendedText, RecomendSwitch, IconSvg } from "./ProductItem.styled";
import { AddProductForm } from "../AddProductForm/ModalProducts/AddProductForm";
import sprite from 'assets/sprite-2.svg';
import { BasicModalWindow } from "../BasicModalWindow/BasicModalWindow";

export const ProductItem = ({ item: { title, calories, category, weight, groupBloodNotAllowed, _id }, bloodGroup }) => {
  const [isModalOpen, setIsModal] = useState(false);
  const isAllowed = groupBloodNotAllowed[bloodGroup];
  const isRecomended = isAllowed ? "Recommended" : "Not recommended";

  return (
    <>
      <ProductCard>
        <BtnContainer>
          <DietBox>Diet</DietBox>
          <BtnWrapper>
            <RecomendedText><RecomendSwitch $isAllowed={isAllowed} />{isRecomended}</RecomendedText>
            <AddBtn type="button" onClick={() => setIsModal(true)}>Add
              <IconSvg >
                <use href={`${sprite}#arrow`} />
              </IconSvg>
            </AddBtn>
          </BtnWrapper>
        </BtnContainer>
        <ListItemName titleName={title} />
        <StatsList>
          <StatItem text="Calories: " val={calories} />
          <StatItem text="Category: " val={category} />
          <StatItem text="Weight: " val={weight} />
        </StatsList>
      </ProductCard>
      {isModalOpen && (
        <BasicModalWindow
          isOpen={isModalOpen}
          onClose={() => setIsModal(false)}
        >
          <AddProductForm onClose={() => setIsModal(false)} id={_id} title={title} calories={calories} />
        </BasicModalWindow>
      )}
    </>

  )
}
