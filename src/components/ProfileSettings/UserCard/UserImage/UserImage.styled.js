import styled from 'styled-components';
import {theme} from '../../../../vars'


export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    @media screen and (min-width: ${theme.breakpoint.md}) and (max-width:${theme.breakpoint.xl}) {
        margin-top: 64px;
  }
    @media screen and (${theme.breakpoint.xl}){
        margin-top: 0;
  }
`;
export const FormWrapper = styled.form`
    position: absolute;
    bottom: -26px;
    right: 37%;


@media screen and (min-width:${theme.breakpoint.md}) {
    bottom: -36px;
    right: 40%;

  }
`
export const Avatar = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 100px;
    border: 1px solid #e6533c;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width:${theme.breakpoint.md}) {
        width: 150px;
        height: 150px;
  }
`;
export const Photo = styled.img`
    border-radius: 100px;
`;

export const Button = styled.div`
    cursor: pointer;
`;

export const SvgLogoUser = styled.svg`
    fill: rgba(239, 237, 232, 0.1);
    width: 40px;
    height: 41px;
    @media screen and (min-width:${theme.breakpoint.md}) {
        width: 68px;
        height: 68px;
  }
`;

export const IconBtn = styled.svg`
    width: 24px;
    height: 24px;
    position: relative;
    top: -13px;
    left: 0px;

  @media screen and (min-width:${theme.breakpoint.md}) {
      width: 32px;
      height: 32px;
      top: -17.5px;
  }
`;

export const TitleName = styled.p`
    color: #efede8;
    margin-top:18px; 

  @media screen and (min-width: ${theme.breakpoint.md}) {
      font-size: 24px;
      line-height: 28px;
  }
`;

export const Subtitle = styled.p`
    font-size: 14px;
    line-height: 18px;
    color: rgba(239, 237, 232, 0.5);
    margin-top: 4px;

    @media screen and (min-width: ${theme.breakpoint.md}) {
        margin-top: 8px;
  }
`;

export const Image = styled.img`
    width: 90px;
    height:90px;
    border-radius:50%;
    @media screen and (min-width:${theme.breakpoint.md}) {
        width: 150px;
        height:150px;
  }

`