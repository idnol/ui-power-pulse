import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import {
  BackDrop,
  BtnSuccess,
  CaloriesText,
  Icon,
  IconUse,
  Modal,
  ModalClBtn,
  ModalSvg,
  ModalSvgArrow,
  Span,
  StyledLink,
  SuccessBox,
  TextLink,
  TimeText,
  TitleSuccess,
} from './ModalWaist.styled';

export const ModalWaist = ({ isOpen, onClose }) => {
  const location = useLocation();
  const backLinkRef = useRef(location);

  const onBackDropClick = (evt) => {
    if (evt.currentTarget === evt.target) onClose();
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <BackDrop onClick={onBackDropClick}>
          <Modal>
            <ModalClBtn onClick={onClose}>
              <ModalSvg>
                <Icon href="/img/sprait.svg#x-modal" />
              </ModalSvg>
            </ModalClBtn>
            <SuccessBox>
              <img
                srcset="/img/like-1x.png, /img/like-2x.png"
                src="/img/like-1x.png"
                loading="lazy"
                alt="Like"
              ></img>
              <TitleSuccess>Well done</TitleSuccess>
              <TimeText>
                Your time: <Span> 3 minutes</Span>
              </TimeText>
              <CaloriesText>
                Burned calories: <Span>150</Span>
              </CaloriesText>
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
          </Modal>
        </BackDrop>
      )}
    </>
  );
};
