import styled from 'styled-components';
import { theme } from '../../vars';

export const Wrapper = styled.div`
  padding: 48px 89px;
  max-width: 335px;

  @media (min-width: ${theme.breakpoint.md}) {
    padding: 64px 136px;
    max-width: 430px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 16px;
  color: ${theme.color.white};
  @media (min-width: ${theme.breakpoint.md}) {
    margin-top: 32px;
  }
`;

export const Calories = styled.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${theme.color.white};
  opacity: 0.4;
  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 32px;
  }
`;

export const Value = styled.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${theme.color.orange};
  font-size: 14px;
  @media (min-width: ${theme.breakpoint.md}) {
    margin-bottom: 32px;
  }
`;

export const Btn = styled.button`
  min-width: 157px;
  padding: 12px 32px;
  border-radius: 12px;
  border: none;
  background-color: ${theme.color.orange};
  color: ${theme.color.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${theme.color.orangeSecond};
  }
  @media (min-width: ${theme.breakpoint.md}) {
    padding: 14px 32px;
  }
`;
