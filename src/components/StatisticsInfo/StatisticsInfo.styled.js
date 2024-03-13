import { styled } from 'styled-components';
import { theme } from '../../vars.js';

export const StatisticsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 234px;
  height: 212px;
  margin-left: auto;
  transition-duration: 300ms;
  padding-top: 40px;
  position: absolute;
  bottom: 40px;
  right: 0;


  @media screen and (min-width: ${theme.breakpoint.md}) {
    width: 405px;
    height: 262px;
  };

  @media screen and (min-width: ${theme.breakpoint.xl}) {
  width: 638px;
  height: 245px;
  }`;

/* ---   FirstElement styled   --- */

export const FirstElementWrapper = styled.div`
display: flex;
align-items: center;
gap: 8px;
width: 146px;
height: 66px;
border-radius: 12px;
background-color: ${theme.color.darkGrey};
padding-top: 14px;
padding-bottom: 14px;
padding-left: 18px;
padding-right: 18px; 
transition-duration: 300ms;

  @media screen and (min-width: ${theme.breakpoint.md}) {
  gap: 12px;
  width: 206px;
  height: 96px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 23px;
  padding-right: 23px; 
} `;

export const FirstElementIconWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
border-radius: 100%;
background-color: ${theme.color.orangeSecond};

  @media screen and (min-width: ${theme.breakpoint.md}) {
  width: 40px;
  height: 40px;
} `;

export const SvgVideoWrapper = styled.div`
display: flex;
justify-content: end;
align-items: center;
width: 12px;
height: 12px;

  @media screen and (min-width: ${theme.breakpoint.md}) {
  width: 20px;
  height: 20px;
} `;

export const SvgWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 12px;
height: 12px;

  @media screen and (min-width: ${theme.breakpoint.md}) {
  width: 20px;
  height: 20px;
} `;

export const SvgVideo = styled.svg`
width: 9px;
height: 12px;
fill: ${theme.color.white};

  @media screen and (min-width: ${theme.breakpoint.md}) {
  width: 15px;
  height: 18px;
} `;

export const SvgStyledFirst = styled.svg`
width: 12px;
height: 12px;
fill: ${theme.color.white};

  @media screen and (min-width: ${theme.breakpoint.md}) {
  width: 20px;
  height: 20px;
} `;

export const FirstElementNumber = styled.p`
font-weight: 700;
font-size: 16px;
line-height: 1.12;
margin-bottom: 4px;

  @media screen and (min-width: ${theme.breakpoint.md}) {
  font-size: 24px;
  line-height: 1;
  margin-bottom: 8px;
} `;

export const FirstElementText = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 1.33;
color: rgba(239, 237, 232, 0.65);
white-space: nowrap;

  @media screen and (min-width: ${theme.breakpoint.md}) {
  font-size: 16px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.65);
}  `;

/* ---   SecondElement styled   --- */

export const SecondElementWrapper = styled.div`
width: 119px;
height: 76px;
border-radius: 12px;
background-color: ${theme.color.orangeSecond};
padding-top: 14px;
padding-bottom: 14px;
padding-left: 18px;
padding-right: 18px;
transition-duration: 300ms;
margin-left: auto;
margin-top: auto;

  @media screen and (min-width: ${theme.breakpoint.md}) {
  width: 180px;
  height: 110px;
  padding-left: 28px;
  padding-right: 28px;
}  `;

export const SvgStyledSecond = styled.svg`
width: 20px;
height: 20px;
margin-bottom: 4px;

  @media screen and (min-width: ${theme.breakpoint.md}) {
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
}  `;

export const SecondElementDataWrapper = styled.div`
display: flex;
gap: 8px;
align-items: baseline;

  @media screen and (min-width: ${theme.breakpoint.md}) {
  gap: 11px;
} `;

export const SecondElementNumber = styled.p`
font-weight: 700;
font-size: 24px;
line-height: 1;
letter-spacing: -0.04em;
text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoint.md}) {
  font-size: 48px;
  line-height: 1.04;
  letter-spacing: -0.02em;
}  `;

export const SecondElementText = styled.p`
font-weight: 700;
font-size: 12px;
line-height: 1.33;
color: rgba(239, 237, 232, 0.65);

  @media screen and (min-width: ${theme.breakpoint.md}) {
  font-size: 16px;
  line-height: 1.5;
}  `;
