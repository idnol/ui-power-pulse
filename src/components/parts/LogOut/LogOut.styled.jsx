import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../vars';

export const LogOutLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 78px;
  height: 24px;
  color: ${(props) => props.color || `${theme.color.white}`};

  :hover {
    color: ${(props) => props.hovercolor || 'none'};
  }
`;
export const LogOutIcon = styled.svg`
  width: 23px;
  height: 23px;
  stroke: ${(props) => props.stroke || `${theme.color.white}`};
`;
