import { useRef } from 'react';
import sprite from 'assets/sprite-2.svg';
import { useLocation } from 'react-router-dom';
import { theme } from '../../vars';
import {
  Counts,
  ModalSvgArrow,
  StyledLink,
  SuccessBox,
} from '../AddExerciseSuccess/AddExerciseSuccess.styled';

import {
  Btn,
  Calories,
  Title,
  Value,
  Wrapper,
} from './AddProductSuccess.styled';

export const AddProductSuccess = ({ isOpen, onClose, calories }) => {
  const location = useLocation();
  const backLinkRef = useRef(location);

  return (
    <>
      {isOpen && (
        <Wrapper>
          <SuccessBox>
            <picture>
              <source
                media={`${theme.breakpoint.sm}`}
                srcSet="/img/avocado-1x.png"
              />
              <source
                media={`${theme.breakpoint.md}`}
                srcSet="/img/avocado-2x.png"
              />
              <img src="/img/avocado-1x.png" alt="Avocado" loading="lazy"></img>
            </picture>

            <Title>Well done</Title>
            <Counts>
              <Calories>Calories:</Calories>
              <Value>{calories}</Value>
            </Counts>
            <Btn type="button" onClick={onClose}>
              Next product
            </Btn>
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
