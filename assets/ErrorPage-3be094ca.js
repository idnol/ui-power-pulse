import{s as t,t as e,L as n,d as r,T as a,j as i}from"./index-740190a3.js";import{i as d,b as s,a as p,c as m}from"./side-view-2x-desk-dd305d4a.js";const h=t.div`
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
`,c=t.div`
  height: 100vh;
  background-image: url(${d}); 
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  @media (min-width: ${e.breakpoint.xl}) {
    background-image: url(${s});
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dpx) {
    background-image: url(${p});

    @media (min-width: ${e.breakpoint.xl}) {
      background-image: url(${m});
    }
  }
`,g=t.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  padding: 0 20px;
`,l=t.h1`
  font-weight: 500;
  font-size: 66px;
  line-height: 100%;
  letter-spacing: 0.01em;
  margin-bottom: 14px;

  @media (min-width: ${e.breakpoint.md}) {
    font-size: 160px;
    line-height: 94%;
  }
`,x=t.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  margin-bottom: 28px;
  @media (min-width: ${e.breakpoint.md}) {
    font-size: 16px;
    line-height: 150%;
  }
`,u=t(n)`
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
`;function k(){const o=r(a);return i.jsxs("section",{children:[i.jsx(h,{children:i.jsxs(g,{children:[i.jsx(l,{children:"404"}),i.jsx(x,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),i.jsx(u,{to:`${o?"/diary":"/"}`,children:"Go Home"})]})}),i.jsx(c,{})]})}export{k as default};
