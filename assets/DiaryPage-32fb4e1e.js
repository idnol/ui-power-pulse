import{s as o,t as i,j as t}from"./index-be439271.js";const a=o.div`
  max-width: 335px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${i.breakpoint.md}) {
    max-width: 593px;
  }

  @media (min-width: ${i.breakpoint.xl}) {
    max-width: 390px;
  }
`,d=o.ul`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 13px;
  grid-template-columns: repeat(auto-fill, minmax(157px, 157px));
  justify-content: center;

  max-width: 335px;
  margin: 0 auto 20px auto;

  @media (min-width: ${i.breakpoint.md}) {
    max-width: 593px;
    justify-content: start;

    grid-row-gap: 16px;
    grid-column-gap: 16px;

    grid-template-columns: repeat(auto-fill, minmax(187px, 187px));

    margin: 0 auto 32px auto;
  }

  @media (min-width: ${i.breakpoint.xl}) {
    max-width: 390px;

    margin: 0 auto 48px auto;
  }
`,l=o.li`
  position: relative;

  padding: 14px;
  border-radius: 12px;

  max-width: 157px;
  width: 100%;
  height: 96px;

  &:nth-child(5) {
    border: 1px solid
      ${n=>n.count<0?`${i.color.red}`:`${i.border.grey2}`};
  }

  &:nth-child(6) {
    order: 6;
    border: 1px solid
      ${n=>n.count>0?`${i.color.green}`:`${i.border.grey2}`};
  }

  @media (min-width: ${i.breakpoint.md}) {
    padding: 18px;
    max-width: 187px;
    height: 116px;

    &:nth-child(1) {
      order: 1;
    }
    &:nth-child(2) {
      order: 4;
    }
    &:nth-child(3) {
      order: 2;
    }
    &:nth-child(4) {
      order: 5;
    }
    &:nth-child(5) {
      order: 3;
    }
    &:nth-child(6) {
      order: 6;
    }
  }

  @media (min-width: ${i.breakpoint.xl}) {
    &:nth-child(1) {
      order: 1;
    }
    &:nth-child(2) {
      order: 2;
    }
    &:nth-child(3) {
      order: 3;
    }
    &:nth-child(4) {
      order: 4;
    }
    &:nth-child(5) {
      order: 5;
    }
    &:nth-child(6) {
      order: 6;
    }
  }
`,s=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,c=o.svg`
  width: 20px;
  height: 20px;
`,h=o.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */

  margin: 0;

  @media (min-width: ${i.breakpoint.md}) {
    line-height: 18px;
  }
`,p=o.p`
  position: absolute;
  left: 14px;
  bottom: 14px;

  color: ${i.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */

  margin: 0;

  @media (min-width: ${i.breakpoint.md}) {
    left: 18px;
    bottom: 18px;

    font-size: 24px;
    line-height: 32px;
  }
`,x=o.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,m=o.svg`
  width: 24px;
  height: 24px;
`,g=o.p`
  color: ${i.color.grey};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  max-width: 303px;

  margin: 0;

  @media (min-width: ${i.breakpoint.md}) {
    font-size: 16px;
    line-height: 24px;
    max-width: 561px;
  }

  @media (min-width: ${i.breakpoint.xl}) {
    max-width: 358px;
  }
`,u=[{icon:"../../../../public/img/sprait.svg#calorie-intake",title:"Daily calorie intake",count:2200,countType:"cal",background:"accent",textColor:"whiteTextColor"},{icon:"../../../../public/img/sprait.svg#physical-activity",title:"Daily physical activity",count:110,countType:"time",background:"accent",textColor:"whiteTextColor"},{icon:"../../../../public/img/sprait.svg#calories-consumed",title:"Сalories consumed",count:707,countType:"cal",background:"default",textColor:"greyTextColor"},{icon:"../../../../public/img/sprait.svg#calories-burned",title:"Сalories burned",count:855,countType:"cal",background:"default",textColor:"greyTextColor"},{icon:"../../../../public/img/sprait.svg#calories-remaining",title:"Calories remaining",count:-100,countType:"cal",background:"default",textColor:"greyTextColor"},{icon:"../../../../public/img/sprait.svg#sports-remaining",title:"Sports remaining",count:85,countType:"time",background:"default",textColor:"greyTextColor"}],f=()=>{const n=u;return t.jsxs(a,{children:[t.jsx(d,{children:n.map((e,r)=>t.jsxs(l,{className:e.background,count:e.count,children:[t.jsxs(s,{children:[t.jsx(c,{children:t.jsx("use",{href:e.icon})}),t.jsx(h,{className:e.textColor,children:e.title})]}),t.jsxs(p,{children:[e.count," ",e.countType==="time"?"min":""]})]},r))}),t.jsxs(x,{children:[t.jsx(m,{children:t.jsx("use",{href:"../../../../public/img/sprait.svg#attention-icon"})}),t.jsx(g,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})};function y(){return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"diary"}),t.jsx(f,{})]})}export{y as default};
