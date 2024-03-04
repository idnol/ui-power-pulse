import{s as e,t,N as n,j as i}from"./index-2f939acb.js";const o=e.div`
  position: relative;
  height: 202px;

  @media (min-width: ${t.breakpoint.md}) {
    height: 354px;
   }
`,r=e.h1`
  margin-top: 127px;
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 38px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  width: 335px;

  @media (min-width: ${t.breakpoint.md}) {
    margin-top: 189px;
    font-size: 70px;
    line-height: 1.11;
    width: 598px;
  }

  @media (min-width: ${t.breakpoint.xl}) {
    margin-top: 200px;
  }
`,p=e.nav`
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
`,a=e(n)`
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
    background: transparent;
    border: 1px solid rgba(239, 237, 232, 0.3);
    box-shadow: 0px 2px 5px 1px #b7b7b7;
    transition-duration: 300ms;
  }

  @media (min-width: ${t.breakpoint.md}) {
    width: 190px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
   }
`,s=e(n)`
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
    background: ${t.color.orange};
    border: 1px solid transparent;
    box-shadow: 0px 2px 5px 1px #b7b7b7;
    transition-duration: 300ms;
  }

  @media (min-width: ${t.breakpoint.md}) {
    width: 190px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
   }
`,x=e.svg`
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
  `,h=()=>i.jsx(i.Fragment,{children:i.jsxs(o,{children:[i.jsx(x,{children:i.jsx("use",{href:"/img/sprait.svg#icon-Line"})}),i.jsx(r,{children:"Transforming your body shape with Power Pulse"}),i.jsxs(p,{children:[i.jsx(a,{to:"/signup",children:"Sign Up"}),i.jsx(s,{to:"/signin",children:"Sign In"})]})]})});function g(){return i.jsx(i.Fragment,{children:i.jsx(h,{})})}export{g as default};
