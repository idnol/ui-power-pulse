import styled from 'styled-components';
import { theme } from '../../vars.js';
import { NavLink } from 'react-router-dom';

export const BoxDayProducts = styled.div`
  /* position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;

  align-items: flex-start; */

  margin-top: 40px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 16px 8px 16px 16px;
  max-width: 335px;
  min-height: 339px;
  max-height: 824px;
  background: rgba(239, 237, 232, 0.05);
  margin-bottom: 40px;
`;

export const ScrollContainer = styled.div`
  display: block;
  width: 100%;
  height: 800px;
  overflow-y: scroll;
  /* overflow-x: auto; */

  /* Стилізація полоси прокрутки */
  &::-webkit-scrollbar {
    width: 6px;
    height: 90px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(239, 237, 232, 0.1); /* Колір бігунка (полоси прокрутки) */
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    width: 6px;
    background-color: transparent; /* Колір доріжки (фону полоси прокрутки) */
  }
`;

export const WrapperAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.5);
`;

export const StyledAddProdactNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${theme.color.orange};
  transition-duration: 300ms;

  &:hover {
    color: ${theme.color.white};
    transition-duration: 300ms;
  }
`;

export const SvgArrow = styled.svg`
  stroke: ${theme.color.orange};
  width: 13px;
  height: 13px;

  /* &:hover {
    stroke: ${theme.color.beige};
  } */
`;

export const TextNoProdacts = styled.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  text-align: center;
`;
