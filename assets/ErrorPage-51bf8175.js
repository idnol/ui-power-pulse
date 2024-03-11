import{s as t,t as i,q as n,d as r,O as d,j as e}from"./index-44247cc4.js";const a=t.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 200px;
  height: 100vh;

  background-color: ${i.color.orange};
  @media (min-width: ${i.breakpoint.md}) {
    width: 420px;
  }
  @media (min-width: ${i.breakpoint.xl}) {
    width: 700px;
  }
`,s=t.div`
  height: 100vh;
  // background-image: url(${"/public/img/side-view-1x-desk.jpg"});
  background-image: url(${"/public/img/side-view-1x-mob.jpg"});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  @media (min-width: ${i.breakpoint.xl}) {
    background-image: url(${"/public/img/side-view-1x-desk.jpg"});
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dpx) {
    background-image: url(${"/public/img/side-view-2x-mob.jpg"});

    @media (min-width: ${i.breakpoint.xl}) {
      background-image: url(${"/public/img/side-view-2x-desk.jpg"});
    }
  }
`,p=t.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  padding: 0 20px;
`,g=t.h1`
  font-weight: 500;
  font-size: 66px;
  line-height: 100%;
  letter-spacing: 0.01em;
  margin-bottom: 14px;

  @media (min-width: ${i.breakpoint.md}) {
    font-size: 160px;
    line-height: 94%;
  }
`,m=t.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  margin-bottom: 28px;
  @media (min-width: ${i.breakpoint.md}) {
    font-size: 16px;
    line-height: 150%;
  }
`,l=t(n)`
  border: ${i.border.grey3};
  border-radius: 12px;
  padding: 12px 40px;
  color: ${i.color.white};
  transition: 0.5s;

  cursor: pointer;
  &:hover {
    border: 1px solid #fff;
  }

  @media (min-width: ${i.breakpoint.md}) {
    border-radius: 12px;
    padding: 16px 60px;
  }
`;function h(){const o=r(d);return e.jsxs("section",{children:[e.jsx(a,{children:e.jsxs(p,{children:[e.jsx(g,{children:"404"}),e.jsx(m,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),e.jsx(l,{to:`${o?"/diary":"/"}`,children:"Go Home"})]})}),e.jsx(s,{})]})}export{h as default};
