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
  TitleSuccess,
} from './ModalProductSuccess.styled';

export const ModalProductSuccess = ({ isOpen, onClose }) => {
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
                srcset="/img/avocado-1x.png, /avocado-2x.png"
                src="/img/avocado-1x.png"
                loading="lazy"
                alt="Avocado"
              ></img>
              <TitleSuccess>Well done</TitleSuccess>
              <CaloriesText>
                Calories: <Span>96</Span>
              </CaloriesText>
              <BtnSuccess type="button" onClick={onClose}>
                Next product
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
