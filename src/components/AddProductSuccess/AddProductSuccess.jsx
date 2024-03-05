import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { theme } from '../../vars';
import {
  Counts,
  IconUse,
  ModalSvgArrow,
  StyledLink,
  SuccessBox,
  TextLink,
} from '../AddExerciseSuccess/AddExerciseSuccess.styled';
import {
  Icon,
  ModalCloseBtn,
  ModalSvg,
} from '../AddProductForm/ModalProducts/AddProductForm.styled';
import { BasicModalWindow } from '../BasicModalWindow/BasicModalWindow';
import {
  Btn,
  Calories,
  Title,
  Value,
  Wrapper,
} from './AddProductSuccess.styled';

export const AddProductSuccess = ({ isOpen, onClose }) => {
  const location = useLocation();
  const backLinkRef = useRef(location);

  return (
    <>
      <BasicModalWindow isOpen={isOpen} onClose={onClose}>
        <ModalCloseBtn onClick={onClose}>
          <ModalSvg>
            <Icon href="/img/sprait.svg#x-modal" />
          </ModalSvg>
        </ModalCloseBtn>
        <Wrapper>
          <SuccessBox>
            <picture>
              <source
                media={theme.breakpoint.sm}
                srcset="/img/avocado-1x.png"
              ></source>
              <source
                media={theme.breakpoint.md}
                srcset="/img/avocado-2x.png"
              ></source>
              <img src="/img/avocado-1x.png" alt="Avocado" loading="lazy"></img>
            </picture>

            <Title>Well done</Title>
            <Counts>
              <Calories>Calories:</Calories>
              <Value>96</Value>
            </Counts>
            <Btn type="button" onClick={onClose}>
              Next product
            </Btn>
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
