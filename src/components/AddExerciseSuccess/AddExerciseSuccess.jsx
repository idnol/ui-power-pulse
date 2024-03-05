import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { theme } from '../../vars';

import { BasicModalWindow } from '../BasicModalWindow/BasicModalWindow';

import {
  BtnSuccess,
  CaloriesText,
  Counts,
  Icon,
  IconUse,
  ModalClBtn,
  ModalSvg,
  ModalSvgArrow,
  StyledLink,
  SuccessBox,
  TextLink,
  TimeText,
  TitleSuccess,
  ValueClr,
  ValueMin,
  Wrapper,
} from './AddExerciseSuccess.styled';

export const AddExerciseSuccess = ({ isOpen, onClose }) => {
  const location = useLocation();
  const backLinkRef = useRef(location);

  return (
    <>
      <BasicModalWindow isOpen={isOpen} onClose={onClose}>
        <ModalClBtn onClick={onClose}>
          <ModalSvg>
            <Icon href="/img/sprait.svg#x-modal" />
          </ModalSvg>
        </ModalClBtn>
        <Wrapper>
          <SuccessBox>
            <picture>
              <source
                media={theme.breakpoint.sm}
                srcset="/img/like-1x.png"
              ></source>
              <source
                media={theme.breakpoint.md}
                srcset="/img/like-2x.png"
              ></source>
              <img src="/img/like-1x.png" alt="Like" loading="lazy"></img>
            </picture>
            <TitleSuccess>Well done</TitleSuccess>
            <Counts>
              <TimeText>Your time:</TimeText>
              <ValueMin>3 minutes</ValueMin>
              <CaloriesText>Burned calories:</CaloriesText>
              <ValueClr>150</ValueClr>
            </Counts>
            <BtnSuccess type="button" onClick={onClose}>
              Next exercise
            </BtnSuccess>

            <StyledLink to={backLinkRef.current.state?.from ?? '/diary'}>
              <TextLink>To the diary</TextLink>
              <ModalSvgArrow>
                <IconUse href="/public/img/sprait.svg#arrow" />
              </ModalSvgArrow>
            </StyledLink>
          </SuccessBox>
        </Wrapper>
      </BasicModalWindow>
    </>
  );
};
