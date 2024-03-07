import styled from 'styled-components';
import { theme } from '../../vars';
import { Link } from 'react-router-dom';

export const OrangePart = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 200px;
  height: 100vh;

  background-color: ${theme.color.orange};
  @media (min-width: ${theme.breakpoint.md}) {
    width: 420px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 700px;
  }
`;

export const StyledImagePart = styled.div`
  height: 100vh;
  // background-image: url(${`/public/img/side-view-1x-desk.jpg`});
  background-image: url(${`/public/img/side-view-1x-mob.jpg`});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  @media (min-width: ${theme.breakpoint.xl}) {
    background-image: url(${`/public/img/side-view-1x-desk.jpg`});
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dpx) {
    background-image: url(${`/public/img/side-view-2x-mob.jpg`});

    @media (min-width: ${theme.breakpoint.xl}) {
      background-image: url(${`/public/img/side-view-2x-desk.jpg`});
    }
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  padding: 0 20px;
`;
export const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 66px;
  line-height: 100%;
  letter-spacing: 0.01em;
  margin-bottom: 14px;

  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 160px;
    line-height: 94%;
  }
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  margin-bottom: 28px;
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const StyledLink = styled(Link)`
  border: ${theme.border.grey3};
  border-radius: 12px;
  padding: 12px 40px;
  color: ${theme.color.white};
  transition: 0.5s;

  cursor: pointer;
  &:hover {
    border: 1px solid #fff;
  }

  @media (min-width: ${theme.breakpoint.md}) {
    border-radius: 12px;
    padding: 16px 60px;
  }
`;
