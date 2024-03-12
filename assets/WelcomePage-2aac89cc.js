import{s as e,t,N as n,j as i,a as o}from"./index-d12377af.js";import{W as r,a as s,S as a}from"./WelcomePage.styled-7fbe7bee.js";const p=e.div`
  position: relative;
  margin-right: 72px;
`,h=e.div`
  position: relative;
`,d=e.h1`
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 38px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  width: 335px;

  @media (min-width: ${t.breakpoint.md}) {
    font-size: 70px;
    line-height: 1.11;
    width: 598px;
  }
`,x=e.nav`
  display: flex;
  gap: 14px;
  margin-top: 40px;
  width: 274px;
  height: 42px;
  text-align: center;

  @media (min-width: ${t.breakpoint.md}) {
    gap: 20px;
    margin-top: 64px;
    width: 392px;
    height: 56px;
  }
`,l=e(n)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 136px;
  height: 42px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  border: 1px solid transparent;
  background: ${t.color.orange};
  color: ${t.color.white};
  transition-duration: 300ms;

  &:hover {
    background: ${t.color.orangeSecond};
    transition-duration: 300ms;
  }

  @media (min-width: ${t.breakpoint.md}) {
    width: 190px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }
`,c=e(n)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  width: 136px;
  height: 42px;
  color: ${t.color.white};
  transition-duration: 300ms;

  &:hover {
    border: ${t.border.orange};
    transition-duration: 300ms;
  }

  @media (min-width: ${t.breakpoint.md}) {
    width: 190px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }
`,g=e.svg`
  position: absolute;
  top: 43px;
  left: -8px;
  width: 98px;
  height: 35px;
  stroke: ${t.color.orange};

  @media (min-width: ${t.breakpoint.md}) {
    top: 85px;
    left: -17px;
    width: 185px;
    height: 67px;
  }
`,m=()=>i.jsx(i.Fragment,{children:i.jsxs(p,{children:[i.jsxs(h,{children:[i.jsx(g,{children:i.jsx("use",{href:`${o}#icon-Line`})}),i.jsx(d,{children:"Transforming your body shape with Power Pulse"})]}),i.jsxs(x,{children:[i.jsx(l,{to:"/signup",children:"Sign Up"}),i.jsx(c,{to:"/signin",children:"Sign In"})]})]})});function u(){return i.jsx(r,{children:i.jsx("div",{className:"container",children:i.jsxs(s,{children:[i.jsx(m,{}),i.jsx(a,{})]})})})}export{u as default};
