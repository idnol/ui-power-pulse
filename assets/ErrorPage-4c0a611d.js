import{s as i,t as e,L as o,j as t}from"./index-f46ecf8e.js";const n=i.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 200px;
  height: 100vh;

  background-color: ${e.color.orange};
  @media (min-width: ${e.breakpoint.md}) {
    width: 420px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    width: 700px;
  }
`,r=i.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  padding: 0 20px;
`,d=i.h1`
  font-weight: 500;
  font-size: 66px;
  line-height: 100%;
  letter-spacing: 0.01em;
  margin-bottom: 14px;

  @media (min-width: ${e.breakpoint.md}) {
    font-size: 160px;
    line-height: 94%;
  }
`,a=i.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  margin-bottom: 28px;
  @media (min-width: ${e.breakpoint.md}) {
    font-size: 16px;
    line-height: 150%;
  }
`,s=i(o)`
  border: ${e.border.grey3};
  border-radius: 12px;
  padding: 12px 40px;
  color: ${e.color.white};
  transition: 0.5s;

  cursor: pointer;
  &:hover {
    border: 1px solid #fff;
  }

  @media (min-width: ${e.breakpoint.md}) {
    border-radius: 12px;
    padding: 16px 60px;
  }
`;function h(){return t.jsx("section",{children:t.jsx(n,{children:t.jsxs(r,{children:[t.jsx(d,{children:"404"}),t.jsx(a,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),t.jsx(s,{to:"/",children:"Go Home"})]})})})}export{h as default};
