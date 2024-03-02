import React, { useEffect } from 'react';

import { ProductForm } from '../ModalForm/ModalForm.jsx';

import {
  ModalCloseBtn,
  ModalSvg,
  Modal,
  ModalContent,
  Icon,
} from './ModalProducts.styled';

export const ModalProducts = ({ isOpen, onClose }) => {
  const onBackDropClick = (evt) => {
    if (evt.currentTarget === evt.target) onClose();
  };
  const handleClose = () => {
    onClose();
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        handleClose();
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
        <Modal onClick={onBackDropClick}>
          <ModalContent>
            <ModalCloseBtn onClick={onClose}>
              <ModalSvg>
                <Icon href="/img/sprait.svg#x-modal" />
              </ModalSvg>
            </ModalCloseBtn>

            <ProductForm onClose={onClose} />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
