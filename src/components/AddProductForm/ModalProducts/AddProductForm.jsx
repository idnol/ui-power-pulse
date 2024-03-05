import { BasicModalWindow } from '../../BasicModalWindow/BasicModalWindow.jsx';

import { ProductForm } from '../ModalForm/ProductForm.jsx';

import {
  ModalCloseBtn,
  ModalSvg,
  Icon,
  Wrapper,
} from './AddProductForm.styled';

export const AddProductForm = ({ isOpen, onClose }) => {
  return (
    <>
      <BasicModalWindow isOpen={isOpen} onClose={onClose}>
        <ModalCloseBtn onClick={onClose}>
          <ModalSvg>
            <Icon href="/img/sprait.svg#x-modal" />
          </ModalSvg>
        </ModalCloseBtn>
        <Wrapper>
          <ProductForm onClose={onClose} />
        </Wrapper>
      </BasicModalWindow>
    </>
  );
};
