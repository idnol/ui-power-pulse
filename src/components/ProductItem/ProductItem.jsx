import { useState } from "react";
import { StatsList } from "../ListItem/ListItem.styled";
import { ListItemName } from "../parts/ListItemName/ListItemName";
import { StatItem } from "../StatsItem/StatsItem";
import { AddBtn, BtnContainer, BtnWrapper, DietBox, ProductCard, RecomendedText, RecomendSwitch, IconSvg } from "./ProductItem.styled";
import {AddProductForm} from "../AddProductForm/ModalProducts/AddProductForm";
import sprite from 'assets/sprite-2.svg';

export const ProductItem = ({item:{title, calories, category, weight, groupBloodNotAllowed, _id}, bloodGroup}) => {
  const [isModalOpen, setIsModal] = useState(false);
  const notAllowed = groupBloodNotAllowed[bloodGroup];
  const isRecomended = notAllowed ? "Not recommended" : "Recommended";
  return (
  <>
  <ProductCard>
    <BtnContainer>
      <DietBox>Diet</DietBox>
      <BtnWrapper>
      <RecomendedText><RecomendSwitch $notAllowed={notAllowed}/>{isRecomended}</RecomendedText>
        <AddBtn type="button" onClick={() => setIsModal(true)}>Add
          <IconSvg >
           <use href={`${sprite}#arrow`} />
          </IconSvg>
        </AddBtn>
      </BtnWrapper>
    </BtnContainer>
    <ListItemName titleName={title}/>
    <StatsList>
      <StatItem text="Calories: " val={calories}/>
      <StatItem text="Category: " val={category}/>
      <StatItem text="Weight: " val={weight}/>
    </StatsList>
  </ProductCard>
  <AddProductForm isOpen={isModalOpen} id={_id} title={title} calories={calories} onClose={() => setIsModal(false)} />
  </>
  ) 
}
