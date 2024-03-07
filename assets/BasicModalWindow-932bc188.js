import{s as t,t as o,j as n,r as f}from"./index-be439271.js";const c=t.li`
  color: ${o.color.greyFifth};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */

  margin-right: 16px;
  display: flex;
  gap: 4px;
  &:last-child {
    margin-right: 0;
  }
`,p=t.span`
  color: ${o.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
 display: block;
 max-width: 76px;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
`,x=({text:e,val:i})=>n.jsxs(c,{children:[e,n.jsx(p,{children:i})]}),m=t.p`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  margin-bottom: 33px;

  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 25px;
  }
`,u=t.div`
  display: flex;
  gap: 16px;

  margin-bottom: 8px;
`,w=t.svg`
  width: 24px;
  height: 24px;
`,b=t.p`
  color: ${o.color.white};
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
  line-height: 24px; /* 120% */

  max-width: 240px;

  @media (min-width: ${o.breakpoint.md}) {
    font-size: 24px;
    line-height: 32px;
  }
`,y=t.ul`
  display: flex;
  flex-wrap: wrap;
`,k=t.button`
  position: absolute;
  top: 18px;
  right: 16px;

  display: flex;
  align-items: center;
  gap: 8px;

  background: none;
  border: none;

  cursor: pointer;
`,v=t.svg`
  width: 16px;
  height: 16px;
  stroke: ${o.color.orange};
`,j=t.p`
  color: ${o.color.orange};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  @media (min-width: ${o.breakpoint.md}) {
    font-size: 16px;
    line-height: 24px;
  }
`,d=t.div`
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
 
  
`,h=t.div`
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
  
`,z=({isOpen:e,onClose:i,children:a})=>{const r=s=>{s.currentTarget===s.target&&i()};return f.useEffect(()=>{const s=l=>{l.keyCode===27&&i()};return e&&(document.addEventListener("keydown",s),document.body.classList.add("disable-scroll")),()=>{document.removeEventListener("keydown",s),document.body.classList.remove("disable-scroll")}},[e,i]),e?n.jsx(n.Fragment,{children:e&&n.jsx(d,{onClick:r,children:n.jsx(h,{children:a})})}):null};export{k as B,w as I,u as N,y as S,m as T,b as a,x as b,j as c,v as d,z as e};
