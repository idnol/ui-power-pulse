import { BasicModalWindow } from '../../BasicModalWindow/BasicModalWindow.jsx';
import sprite from 'assets/sprite-2.svg';
import { ProductForm } from '../ModalForm/ProductForm.jsx';

import {
  ModalCloseBtn,
  ModalSvg,
  Icon,
  Wrapper,
} from './AddProductForm.styled';

export const AddProductForm = ({ isOpen, onClose }) => {

  

  return (
    
      <BasicModalWindow isOpen={isOpen} onClose={onClose}>
        
             <ModalCloseBtn onClick={onClose}>
          <ModalSvg>
            <Icon href={`${sprite}#x-modal`} />
          </ModalSvg>
        </ModalCloseBtn>
        <Wrapper>
          <ProductForm onClose={onClose} onSuccess={() => setIsSuccess(true)}/>
        </Wrapper>
        
        
      </BasicModalWindow>
    
  );
};
