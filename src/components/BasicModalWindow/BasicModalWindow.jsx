import { useEffect } from 'react';
import { BackDrop, Modal } from './BasicModalWindow.styled';

export const BasicModalWindow = ({ isOpen, onClose, children }) => {
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
  }, [isOpen, onClose]);
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <BackDrop onClick={onBackDropClick}>
          <Modal>{children}</Modal>
        </BackDrop>
      )}
    </>
  );
};
