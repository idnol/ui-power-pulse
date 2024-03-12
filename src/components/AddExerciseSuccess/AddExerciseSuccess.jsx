import { useRef } from 'react';
import sprite from 'assets/sprite-2.svg';
import { useLocation } from 'react-router-dom';
import wellDone from "assets/logo/like-1x.png"
import wellDone2x from 'assets/logo/like-2x.png'
import { theme } from '../../vars';

import {
  BtnSuccess,
  CaloriesText,
  Counts,
  ModalClBtn,
  ModalSvg,
  ModalSvgArrow,
  StyledLink,
  SuccessBox,
  TimeText,
  TitleSuccess,
  ValueClr,
  ValueMin,
  Wrapper,
} from './AddExerciseSuccess.styled';

export const AddExerciseSuccess = ({ isOpen, onClose, calorise, time }) => {
  const location = useLocation();
  const backLinkRef = useRef(location);

  return (
    <>
      <ModalClBtn onClick={onClose}>
        <ModalSvg>
          <use href={`${sprite}#x-modal`} />
        </ModalSvg>
      </ModalClBtn>
      {isOpen && (
        <Wrapper>
          <SuccessBox>
            <picture>
              <source media={theme.breakpoint.sm} srcSet={wellDone} />
              <source media={theme.breakpoint.md} srcSet={wellDone2x} />
              <img src={wellDone} alt="Like" loading="lazy"></img>
            </picture>
            <TitleSuccess>Well done</TitleSuccess>
            <Counts>
              <TimeText>Your time:</TimeText>
              <ValueMin>{time} minutes</ValueMin>
              <CaloriesText>Burned calories:</CaloriesText>
              <ValueClr>{calorise}</ValueClr>
            </Counts>
            <BtnSuccess type="button" onClick={onClose}>
              Next exercise
            </BtnSuccess>

            <StyledLink to={backLinkRef.current.state?.from ?? '/diary'}>
              To the diary
              <ModalSvgArrow>
                <use href={`${sprite}#arrow`} />
              </ModalSvgArrow>
            </StyledLink>
          </SuccessBox>
        </Wrapper>
      )}
    </>
  );
};
