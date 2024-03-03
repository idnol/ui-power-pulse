import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogOutLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 78px;
  height: 24px;
  color: ${(props) => props.color || 'none'};

  :hover {
    color: ${(props) => props.hovercolor || 'none'};
  }
`;
export const LogOutIcon = styled.svg`
width: 20px;
height: 20px;
  stroke: ${(props) => props.stroke || 'none'};
`;
