import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '/src/vars.js';

export const LogOutLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${theme.color.white};

  :hover {
    color: ${theme.color.orange};
  }
`;
export const LogOutIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${theme.color.orange};
`;