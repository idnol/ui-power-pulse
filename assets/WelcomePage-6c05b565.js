import{s as e,t,N as n,j as i}from"./index-44247cc4.js";import{W as r,S as o}from"./WelcomePage.styled-14b7a003.js";const s=e.div`
  position: relative;
  margin-right: 72px;
  //height: 202px;

  // @media (min-width: ${t.breakpoint.md}) {
  //   height: 354px;
  //  }
`,a=e.div`
  position: relative;
`,p=e.h1`
  //margin-top: 127px;
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 38px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  width: 335px;

  @media (min-width: ${t.breakpoint.md}) {
    //margin-top: 189px;
    font-size: 70px;
    line-height: 1.11;
    width: 598px;
  }

  @media (min-width: ${t.breakpoint.xl}) {
    //margin-top: 200px;
  }
`,h=e.nav`
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
`,d=e(n)`
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
`,x=e(n)`
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
`,l=e.svg`
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
`,g=()=>i.jsx(i.Fragment,{children:i.jsxs(s,{children:[i.jsxs(a,{children:[i.jsx(l,{children:i.jsx("use",{href:"/img/sprait.svg#icon-Line"})}),i.jsx(p,{children:"Transforming your body shape with Power Pulse"})]}),i.jsxs(h,{children:[i.jsx(d,{to:"/signup",children:"Sign Up"}),i.jsx(x,{to:"/signin",children:"Sign In"})]})]})});function w(){return i.jsx("section",{children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"row",children:i.jsxs(r,{children:[i.jsx(g,{}),i.jsx(o,{})]})})})})}export{w as default};
