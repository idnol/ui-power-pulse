import{s as n,t as e,u as w,b as f,c as k,d as j,j as t,a as l}from"./index-76a15f43.js";const $=n.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 234px;
height: 212px;
margin-left: auto;
transition-duration: 300ms;

  @media screen and (min-width: ${e.breakpoint.md}) {
  width: 405px;
  height: 262px;  }

  @media screen and (min-width: ${e.breakpoint.xl}) {
  width: 638px;
  height: 245px;
} `,v=n.div`
display: flex;
align-items: center;
gap: 8px;
width: 146px;
height: 66px;
border-radius: 12px;
background-color: ${e.color.darkGrey};
padding-top: 14px;
padding-bottom: 14px;
padding-left: 18px;
padding-right: 18px; 
transition-duration: 300ms;

  @media screen and (min-width: ${e.breakpoint.md}) {
  gap: 12px;
  width: 206px;
  height: 96px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 23px;
  padding-right: 23px; 
} `,S=n.div`
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
border-radius: 100%;
background-color: ${e.color.orangeSecond};

  @media screen and (min-width: ${e.breakpoint.md}) {
  width: 40px;
  height: 40px;
} `,y=n.div`
display: flex;
justify-content: end;
align-items: center;
width: 12px;
height: 12px;

  @media screen and (min-width: ${e.breakpoint.md}) {
  width: 20px;
  height: 20px;
} `,m=n.div`
display: flex;
justify-content: center;
align-items: center;
width: 12px;
height: 12px;

  @media screen and (min-width: ${e.breakpoint.md}) {
  width: 20px;
  height: 20px;
} `,E=n.svg`
width: 9px;
height: 12px;
fill: ${e.color.white};

  @media screen and (min-width: ${e.breakpoint.md}) {
  width: 15px;
  height: 18px;
} `,u=n.svg`
width: 12px;
height: 12px;
fill: ${e.color.white};

  @media screen and (min-width: ${e.breakpoint.md}) {
  width: 20px;
  height: 20px;
} `,z=n.p`
font-weight: 700;
font-size: 16px;
line-height: 1.12;
margin-bottom: 4px;

  @media screen and (min-width: ${e.breakpoint.md}) {
  font-size: 24px;
  line-height: 1;
  margin-bottom: 8px;
} `,W=n.p`
font-weight: 400;
font-size: 12px;
line-height: 1.33;
color: rgba(239, 237, 232, 0.65);
white-space: nowrap;

  @media screen and (min-width: ${e.breakpoint.md}) {
  font-size: 16px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.65);
}  `,F=n.div`
width: 119px;
height: 76px;
border-radius: 12px;
background-color: ${e.color.orangeSecond};
padding-top: 14px;
padding-bottom: 14px;
padding-left: 18px;
padding-right: 18px;
transition-duration: 300ms;
margin-left: auto;
margin-top: auto;

  @media screen and (min-width: ${e.breakpoint.md}) {
  width: 180px;
  height: 110px;
  padding-left: 28px;
  padding-right: 28px;
}  `,T=n.svg`
width: 20px;
height: 20px;
margin-bottom: 4px;

  @media screen and (min-width: ${e.breakpoint.md}) {
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
}  `,B=n.div`
display: flex;
gap: 8px;
align-items: baseline;

  @media screen and (min-width: ${e.breakpoint.md}) {
  gap: 11px;
} `,U=n.p`
font-weight: 700;
font-size: 24px;
line-height: 1;
letter-spacing: -0.04em;
text-transform: uppercase;

  @media screen and (min-width: ${e.breakpoint.md}) {
  font-size: 48px;
  line-height: 1.04;
  letter-spacing: -0.02em;
}  `,V=n.p`
font-weight: 700;
font-size: 12px;
line-height: 1.33;
color: rgba(239, 237, 232, 0.65);

  @media screen and (min-width: ${e.breakpoint.md}) {
  font-size: 16px;
  line-height: 1.5;
}  `,A=i=>i.statistics.items,p=i=>{if(i<1e4)return i;if(i>=1e4&&i<1e6)return`${(i/1e3).toFixed()}K`;if(i>=1e6&&i<1e9)return`${(i/1e6).toFixed()}M`;if(i>=1e9&&i<1e12)return`${(i/1e9).toFixed()}B`},c=(i,d)=>{var r;return((r=d.find(h=>h[i]))==null?void 0:r[i])??null},b=(i,d)=>Math.floor(Math.random()*(d-i+1))+i,I=()=>{const i=w();f.useEffect(()=>{i(k())},[i]);const d=j(A),o=p(c("userQuantity",d)),r=p(c("exercisesQuantity",d)),h=p(c("burnedCaloriesUsersTotal",d)),g=p(c("sportTimeUsersTotal",d)),a=p(c("exercisesUsersTotal",d)),s=b(1,3),x=b(4,5);return t.jsxs($,{children:[(r||o||a)&&t.jsxs(v,{children:[t.jsxs(S,{children:[r&&s===1&&t.jsx(y,{children:t.jsxs(E,{children:[" ",t.jsx("use",{href:`${l}#triangle`})," "]})}),o&&s===2&&t.jsx(m,{children:t.jsxs(u,{children:[" ",t.jsx("use",{href:`${l}#icon-user`})," "]})}),a&&s===3&&t.jsx(m,{children:t.jsxs(u,{children:[" ",t.jsx("use",{href:`${l}#dumbbell-stat`})," "]})})]}),t.jsxs("div",{children:[t.jsxs(z,{children:[s===1&&r&&r,s===2&&o&&o,s===3&&a&&a]}),t.jsxs(W,{children:[s===1&&r&&"Video tutorial",s===2&&o&&"Users",s===3&&a&&"Exercises"]})]})]}),(g||a)&&t.jsxs(F,{children:[t.jsxs(T,{children:[" ",t.jsx("use",{href:`${l}#run-man-circle`})," "]}),t.jsxs(B,{children:[t.jsxs(U,{children:[x===4&&h,x===5&&g]}),t.jsxs(V,{children:[x===4&&h&&"cal",x===5&&g&&"min"]})]})]})]})},M=n.section`
  height: 100vh;
  width: 100%;
  background-image: url(../../../public/img/side-view-1x-mob.jpg);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      background-image: url(../../../public/img/side-view-2x-mob.jpg); 
      }
  @media (min-width: ${e.breakpoint.xl}) {
    height: 100vh;
    width: 100%;
    background-image: url(../../../public/img/side-view-1x-desk.jpg);
    background-repeat: no-repeat;
    background-position: right top;
    background-size: contain;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
       background-image: url(../../../public/img/side-view-2x-desk.jpg); 
       }
  }
`,N=n.div`
    padding-top: 127px;
    @media (min-width: ${e.breakpoint.md}) {
      padding-top: 189px;
    }
    @media (min-width: ${e.breakpoint.xl}) {
      padding-top: 200px;
      display: flex;
      align-items: end;
    }
`;export{I as S,M as W,N as a};
