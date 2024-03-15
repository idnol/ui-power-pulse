import{s as o,t,j as i,b as l,L as c}from"./index-740190a3.js";const d=o.li`
  color: ${t.color.greyFifth};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  margin-right: 16px;
  display: flex;
  gap: 4px;
  &:last-child {
    margin-right: 0;
  }
`,x=o.span`
  color: ${t.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
 display: block;
 max-width: 76px;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
`,h=({text:e,val:n})=>i.jsxs(d,{children:[e,i.jsx(x,{children:n})]}),w=o.p`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  margin-bottom: 33px;

  @media (min-width: ${t.breakpoint.md}) {
    margin-bottom: 25px;
  }
`,b=o.div`
  display: flex;
  gap: 16px;

  margin-bottom: 8px;
`,u=o.svg`
  width: 24px;
  height: 24px;
`,y=o.p`
  color: ${t.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;

  max-width: 240px;

  @media (min-width: ${t.breakpoint.md}) {
    font-size: 24px;
    line-height: 32px;
  }
`,k=o.ul`
  display: flex;
  flex-wrap: wrap;
`,$=o.button`
  position: absolute;
  top: 18px;
  right: 16px;

  display: flex;
  align-items: center;
  gap: 8px;

  background: none;
  border: none;

  cursor: pointer;
`,v=o.svg`
  width: 16px;
  height: 16px;
  stroke: ${t.color.orange};
`,z=o.p`
  color: ${t.color.orange};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;

  @media (min-width: ${t.breakpoint.md}) {
    font-size: 16px;
    line-height: 24px;
  }
`,m=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1200;
`,g=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;

  transform: translate(-50%, -50%);
  background-color: #10100f;
  border-radius: 12px;
  border: none;
  overflow: hidden;
`,S=({isOpen:e,onClose:n,children:a})=>{const s=r=>{r.currentTarget===r.target&&n()};return l.useEffect(()=>{const r=p=>{p.keyCode===27&&n()};return e&&(document.addEventListener("keydown",r),document.body.classList.add("disable-scroll")),()=>{document.removeEventListener("keydown",r),document.body.classList.remove("disable-scroll")}},[e,n]),e?i.jsx(i.Fragment,{children:e&&i.jsx(m,{onClick:s,children:i.jsx(g,{children:a})})}):null},j=o.div`
  padding: 48px 89px;
  max-width: 335px;

  @media (min-width: ${t.breakpoint.md}) {
    padding: 64px 134px;
    max-width: 430px;
  }
`,B=o.button`
  position: absolute;

  width: 22px;
  height: 22px;
  top: 14px;
  right: 14px;
  stroke: ${t.color.white};
  fill: transparent;
  &:hover {
    stroke: ${t.color.orangeSecond};
  }

  @media (min-width: ${t.breakpoint.md}) {
    width: 26px;
    height: 26px;
    top: 16px;
    right: 16px;
  }

  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`,L=o.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${t.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,T=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,C=o.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 27px;
  color: ${t.color.white};
  @media (min-width: ${t.breakpoint.md}) {
    margin-top: 32px;
  }
`,M=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px 8px;
`,R=o.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 0;
  color: ${t.color.white};
  opacity: 0.4;
`,E=o.p`
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 24px;
  color: ${t.color.white};
  opacity: 0.4;
  @media (min-width: ${t.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,I=o.p`
  color: ${t.color.orange};
  margin-top: 16px;
  margin-bottom: 0;
  font-size: 14px;
`,N=o.p`
  color: ${t.color.orange};
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 14px;
  @media (min-width: ${t.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,V=o.button`
  min-width: 162px;
  padding: 12px 32px;
  border-radius: 12px;
  border: none;
  background-color: ${t.color.orange};
  color: ${t.color.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${t.color.orangeSecond};
  }
  @media (min-width: ${t.breakpoint.md}) {
    padding: 14px 32px;
  }
`,W=o.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${t.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,D=o(c)`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 8px;
  stroke: ${t.color.grey};
  font-size: 14px;
  

  fill: transparent;

  color: ${t.color.grey};
  &:hover{
    color: ${t.color.white};
    stroke: ${t.color.white}
   
  }
`;o.p`
  margin: 0;
  text-align: center;
  font-size: 14px;
`;export{V as B,M as C,u as I,B as M,b as N,T as S,C as T,I as V,j as W,L as a,R as b,E as c,N as d,D as e,W as f,w as g,y as h,k as i,h as j,$ as k,z as l,v as m,S as n};
