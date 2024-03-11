import{s as n,t as i,u as w,a as b,c as $,d as j,j as t,b as l}from"./index-44247cc4.js";const v=n.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 234px;
height: 212px;
margin-left: auto;
transition-duration: 300ms;

  @media screen and (min-width: ${i.breakpoint.md}) {
  width: 405px;
  height: 262px;  }

  @media screen and (min-width: ${i.breakpoint.xl}) {
  width: 638px;
  height: 245px;
} `,k=n.div`
display: flex;
align-items: center;
gap: 8px;
width: 146px;
height: 66px;
border-radius: 12px;
background-color: ${i.color.darkGrey};
padding-top: 14px;
padding-bottom: 14px;
padding-left: 18px;
padding-right: 18px; 
transition-duration: 300ms;

  @media screen and (min-width: ${i.breakpoint.md}) {
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
background-color: ${i.color.orangeSecond};

  @media screen and (min-width: ${i.breakpoint.md}) {
  width: 40px;
  height: 40px;
} `,y=n.div`
display: flex;
justify-content: end;
align-items: center;
width: 12px;
height: 12px;

  @media screen and (min-width: ${i.breakpoint.md}) {
  width: 20px;
  height: 20px;
} `,m=n.div`
display: flex;
justify-content: center;
align-items: center;
width: 12px;
height: 12px;

  @media screen and (min-width: ${i.breakpoint.md}) {
  width: 20px;
  height: 20px;
} `,E=n.svg`
width: 9px;
height: 12px;
fill: ${i.color.white};

  @media screen and (min-width: ${i.breakpoint.md}) {
  width: 15px;
  height: 18px;
} `,f=n.svg`
width: 12px;
height: 12px;
fill: ${i.color.white};

  @media screen and (min-width: ${i.breakpoint.md}) {
  width: 20px;
  height: 20px;
} `,W=n.p`
font-weight: 700;
font-size: 16px;
line-height: 1.12;
margin-bottom: 4px;

  @media screen and (min-width: ${i.breakpoint.md}) {
  font-size: 24px;
  line-height: 1;
  margin-bottom: 8px;
} `,z=n.p`
font-weight: 400;
font-size: 12px;
line-height: 1.33;
color: rgba(239, 237, 232, 0.65);
white-space: nowrap;

  @media screen and (min-width: ${i.breakpoint.md}) {
  font-size: 16px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.65);
}  `,F=n.div`
width: 119px;
height: 76px;
border-radius: 12px;
background-color: ${i.color.orangeSecond};
padding-top: 14px;
padding-bottom: 14px;
padding-left: 18px;
padding-right: 18px;
transition-duration: 300ms;
margin-left: auto;
margin-top: auto;

  @media screen and (min-width: ${i.breakpoint.md}) {
  width: 180px;
  height: 110px;
  padding-left: 28px;
  padding-right: 28px;
}  `,T=n.svg`
width: 20px;
height: 20px;
margin-bottom: 4px;

  @media screen and (min-width: ${i.breakpoint.md}) {
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
}  `,B=n.div`
display: flex;
gap: 8px;
align-items: baseline;

  @media screen and (min-width: ${i.breakpoint.md}) {
  gap: 11px;
} `,U=n.p`
font-weight: 700;
font-size: 24px;
line-height: 1;
letter-spacing: -0.04em;
text-transform: uppercase;

  @media screen and (min-width: ${i.breakpoint.md}) {
  font-size: 48px;
  line-height: 1.04;
  letter-spacing: -0.02em;
}  `,V=n.p`
font-weight: 700;
font-size: 12px;
line-height: 1.33;
color: rgba(239, 237, 232, 0.65);

  @media screen and (min-width: ${i.breakpoint.md}) {
  font-size: 16px;
  line-height: 1.5;
}  `,A=e=>e.statistics.items,p=e=>{if(e<1e4)return e;if(e>=1e4&&e<1e6)return`${(e/1e3).toFixed()}K`;if(e>=1e6&&e<1e9)return`${(e/1e6).toFixed()}M`;if(e>=1e9&&e<1e12)return`${(e/1e9).toFixed()}B`},h=(e,s)=>{var d;return((d=s.find(c=>c[e]))==null?void 0:d[e])??null},u=(e,s)=>Math.floor(Math.random()*(s-e+1))+e,I=()=>{const e=w();b.useEffect(()=>{e($())},[e]);const s=j(A),a=p(h("userQuantity",s)),d=p(h("exercisesQuantity",s)),c=p(h("burnedCaloriesUsersTotal",s)),g=p(h("sportTimeUsersTotal",s)),o=p(h("exercisesUsersTotal",s)),r=u(1,3),x=u(4,5);return t.jsxs(v,{children:[(d||a||o)&&t.jsxs(k,{children:[t.jsxs(S,{children:[d&&r===1&&t.jsx(y,{children:t.jsxs(E,{children:[" ",t.jsx("use",{href:`${l}#triangle`})," "]})}),a&&r===2&&t.jsx(m,{children:t.jsxs(f,{children:[" ",t.jsx("use",{href:`${l}#icon-user`})," "]})}),o&&r===3&&t.jsx(m,{children:t.jsxs(f,{children:[" ",t.jsx("use",{href:`${l}#dumbbell-stat`})," "]})})]}),t.jsxs("div",{children:[t.jsxs(W,{children:[r===1&&d&&d,r===2&&a&&a,r===3&&o&&o]}),t.jsxs(z,{children:[r===1&&d&&"Video tutorial",r===2&&a&&"Users",r===3&&o&&"Exercises"]})]})]}),(g||o)&&t.jsxs(F,{children:[t.jsxs(T,{children:[" ",t.jsx("use",{href:`${l}#run-man-circle`})," "]}),t.jsxs(B,{children:[t.jsxs(U,{children:[x===4&&c,x===5&&g]}),t.jsxs(V,{children:[x===4&&c&&"cal",x===5&&g&&"min"]})]})]})]})},M=n.div`
    display: flex;
    align-items: end;
`;export{I as S,M as W};
