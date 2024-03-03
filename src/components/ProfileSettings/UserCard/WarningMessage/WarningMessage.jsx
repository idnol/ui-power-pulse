import sprite from '../../../../../public/img/sprait.svg';

import { WarningText, WarningWrapper } from './WarningMessage.styled';
export const WarningMessage = () => {
  return (
    <WarningWrapper>
      <svg width={24} height={24}>
        <use href={`${sprite}#exclamation-mark`}></use>
      </svg>
      <WarningText>
        We understand that each individual is unique, so the entire approach to
        diet is relative and tailored to your unique body and goals.
      </WarningText>
    </WarningWrapper>
  );
};
