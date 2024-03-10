import{s as i,t as e,j as t,N as O,a as l,d as F,u as J,q as Q,v as X,b as h,h as Z}from"./index-a9bcf820.js";import{f as S,i as ee,s as te,a as ie,b as oe,c as re}from"./index-bf9c3545.js";const ne=i.div`
  min-height: 234px;
  max-height: 990px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    margin-block: 1.45em;
  }

  &::-webkit-scrollbar-thumb {
    background: ${e.color.greySixth};
    border-radius: 12px;
    height: 203px;
  }

  @media (min-width: ${e.breakpoint.md}) {
    max-width: 704px;
    min-height: 138px;
    max-height: 138px;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 6px;
      border-radius: 12px;
    }

    &::-webkit-scrollbar-track {
      margin-block: 0.3em;
    }

    &::-webkit-scrollbar-thumb {
      background: ${e.color.greySixth};
      border-radius: 12px;
      height: 90px;
    }
  }

  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 826px;
    min-height: 138px;
    max-height: 138px;
    overflow-x: hidden;
  }
`,ae=i.div`
  display: none;

  @media (min-width: ${e.breakpoint.md}) {
    display: flex;
    gap: 8px;
    width: 704px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: ${e.color.orangeSecond};
    margin-bottom: 8px;
  }

  @media (min-width: ${e.breakpoint.xl}) {
    width: 762px;
    padding-left: 16px;
  }
`,de=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 115px;
  }
`,se=i.p`
  width: 132px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 157px;
  }
`,le=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 131px;
  }
`,pe=i.p`
  width: 84px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 106px;
  }
`,he=i.p`
  width: 78px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 91px;
  }
`,ce=i.p`
  width: 72px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 82px;
  }
`,xe=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,me=i.thead`
  display: none;
`,ge=i.tr`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.white};
  margin-top: 66px;
  max-width: 297px;

  &:first-child {
    margin-top: 22px;
  }

  @media (min-width: ${e.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
    max-width: 656px;
    width: 704px;
    height: 40px;
    gap: 8px;
    flex-wrap: nowrap;
    align-items: baseline;
    margin-top: 6px;

    &:first-child {
      margin-top: 0;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 762px;
    width: 826px;
  }
`,we=i.td`
  position: relative;
  border: ${e.border.grey3};
  border-radius: 12px;
  width: 100%;
  height: 38px;
  margin-bottom: 42px;
  padding: 10px 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-align: left;

  &::before {
    content: 'Body Part';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${e.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (min-width: ${e.breakpoint.md}) {
    width: 90px;
    height: 40px;
    margin-bottom: 0;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    width: 115px;
  }
`,be=i.td`
  position: relative;
  border: ${e.border.grey3};
  border-radius: 12px;
  width: 100%;
  height: 38px;
  margin-bottom: 42px;
  padding: 10px 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-align: left;

  &::before {
    content: 'Equipment';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${e.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (min-width: ${e.breakpoint.md}) {
    width: 132px;
    height: 40px;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    width: 157px;
  }
`,fe=i.td`
  position: relative;
  border: ${e.border.grey3};
  border-radius: 12px;
  width: 100%;
  height: 38px;
  margin-bottom: 42px;
  padding: 10px 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-align: left;

  &::before {
    content: 'Name';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${e.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 0;
    padding: 8px 14px;
    width: 128px;
    height: 40px;
    font-size: 16px;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    width: 131px;
  }
`,ue=i.td`
  position: relative;
  border: ${e.border.grey3};
  border-radius: 12px;
  width: 81px;
  height: 38px;
  margin-right: 16px;
  padding: 10px 14px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  &::before {
    content: 'Target';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${e.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    margin-right: 8px;
    max-width: 60px;
  }

  @media (min-width: ${e.breakpoint.md}) {
    width: 84px;
    height: 40px;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    margin-right: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    width: 106px;
  }
`,ye=i.td`
  position: relative;
  border: ${e.border.grey3};
  border-radius: 12px;
  width: 80px;
  height: 38px;
  margin-right: 16px;
  padding: 10px 14px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  &::before {
    content: 'Burned Calories';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${e.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0;
  }

  @media (max-width: 375px) {
    margin-right: 8px;
    max-width: 60px;
  }

  @media (min-width: ${e.breakpoint.md}) {
    width: 78px;
    height: 40px;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    margin-right: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::before {
      display: none;
    }
  }

  @media (min-width: ${e.breakpoint.xl}) {
    width: 91px;
  }
`,ke=i.td`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  width: 76px;
  height: 38px;
  padding: 10px 14px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  &::before {
    content: 'Time';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${e.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    max-width: 60px;
  }

  @media (min-width: ${e.breakpoint.md}) {
    width: 72px;
    height: 40px;
    padding: 8px 14px 8px 14px;
    font-size: 16px;
    line-height: 1.5;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    width: 82px;
  }
`,$e=i.td`
  width: 20px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 30px;
  }
`,je=i.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,ve=i.svg`
  width: 20px;
  height: 20px;
  stroke: ${e.color.orangeSecond};
  transition-duration: 300ms;
  margin-left: 4px;

  &:hover {
    stroke: ${e.color.white};
    transition-duration: 300ms;
  }

  @media (max-width: 375px) {
    margin-left: 4px;
  }
`,Ce=({exercises:d,onDeleteExercise:a})=>t.jsxs(t.Fragment,{children:[t.jsxs(ae,{children:[t.jsx(de,{children:"Body Part"}),t.jsx(se,{children:"Equipment"}),t.jsx(le,{children:"Name"}),t.jsx(pe,{children:"Target"}),t.jsx(he,{children:"Burned Calories"}),t.jsx(ce,{children:"Time"}),t.jsx("p",{children:" "})]}),t.jsx(ne,{children:t.jsxs(xe,{children:[t.jsx(me,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Body Part"}),t.jsx("th",{children:"Equipment"}),t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Target"}),t.jsx("th",{children:"Burned Calories"}),t.jsx("th",{children:"Time"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:d.map(o=>t.jsxs(ge,{children:[t.jsx(we,{children:o.bodyPart}),t.jsx(be,{children:o.equipment}),t.jsx(fe,{children:o.name}),t.jsx(ue,{children:o.target}),t.jsx(ye,{children:o.burnedCalories}),t.jsx(ke,{children:o.time}),t.jsx($e,{children:t.jsx(je,{onClick:()=>a(o.id),children:t.jsx(ve,{children:t.jsx("use",{href:"/img/sprait.svg#trash"})})})})]},o.id))})]})})]}),De=i.div`
  border: ${e.border.grey2};
  border-radius: 12px;
  padding: 16px 8px 16px 16px;
  background: ${e.color.greySeven};
  //margin: 40px auto 40px auto;
  max-width: 335px;
  min-height: 335px;
  max-height: 1064px;
  overflow: hidden;

  @media (min-width: ${e.breakpoint.md}) {
    //margin: 32px auto 32px auto;
    max-width: 704px;
    min-height: 234px;
    max-height: 234px;
  }

  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 826px;
  }
`,Se=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 16px;
  }
`,ze=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.greyThird};
`,Be=i(O)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.orange};
  transition-duration: 300ms;

  &:hover {
    color: ${e.color.white};
    transition-duration: 300ms;
  }

  @media (min-width: ${e.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
  }
`,_e=i.svg`
  stroke: ${e.color.orange};
  width: 16px;
  height: 16px;
`,Te=i.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.grey};
  text-align: center;

  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 65px;
  }
`,Ae=[{id:"1",bodyPart:"Upper arms",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"2",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"3",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"4",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"5",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"6",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"7",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"8",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"9",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"10",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"11",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"12",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"13",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"14",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"15",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"16",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"17",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"18",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"19",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"20",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"21",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"22",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"23",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"24",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"25",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"26",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60}],Pe=()=>{const[d,a]=l.useState(Ae),o=n=>{a(m=>m.filter(g=>g.id!==n))};return t.jsx(t.Fragment,{children:t.jsxs(De,{children:[t.jsxs(Se,{children:[t.jsx(ze,{children:"Execrcises"}),t.jsxs(Be,{children:["Add product",t.jsx(_e,{children:t.jsx("use",{href:"/img/sprait.svg#icon-Icon"})})]})]}),d.length?t.jsx(Ce,{exercises:d,onDeleteExercise:o}):t.jsx(Te,{children:"Not found products"})]})})},We=i.div`
  border: ${e.border.grey2};
  border-radius: 12px;
  padding: 16px 8px 16px 16px;
  background: ${e.color.greySeven};
  //margin: 40px auto 40px auto;
  max-width: 335px;
  min-height: 335px;
  max-height: 824px;
  overflow: hidden;

  @media (min-width: ${e.breakpoint.md}) {
    //margin: 32px auto 32px auto;
    max-width: 704px;
    min-height: 234px;
    max-height: 234px;
  }

  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 826px;
  }
`,Ne=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 16px;
  }
`,qe=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.greyThird};
`,Re=i(O)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.orange};
  transition-duration: 300ms;

  &:hover {
    color: ${e.color.white};
    transition-duration: 300ms;
  }

  @media (min-width: ${e.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Ie=i.svg`
  stroke: ${e.color.orange};
  width: 16px;
  height: 16px;
`,Me=i.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.grey};
  text-align: center;

  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 65px;
  }
`,Ee=i.div`
  min-height: 234px;
  max-height: 750px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
   width: 6px;
   border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
   margin-block: 1.45em;
  }

  &::-webkit-scrollbar-thumb {
    background: ${e.color.greySixth};
    border-radius: 12px;
    height: 203px;
  }

  @media (min-width: ${e.breakpoint.md}) {
    max-width: 704px;
    min-height: 138px;
    max-height: 138px;
    overflow-x: hidden;

     &::-webkit-scrollbar {
       width: 6px;
       border-radius: 12px;
     }
    //
    &::-webkit-scrollbar-track {
      margin-block: 0.3em;
    }

    &::-webkit-scrollbar-thumb {
      background: ${e.color.greySixth};
      border-radius: 12px;
      height: 90px;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 826px;
    min-height: 138px;
    max-height: 138px;
    overflow-x: hidden;
  }
`,He=i.div`
  display: none;

  @media (min-width: ${e.breakpoint.md}) {
    display: flex;
    gap: 8px;
    width: 704px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: ${e.color.orangeSecond};
    margin-bottom: 8px;
  }

  @media (min-width: ${e.breakpoint.xl}) {
    width: 762px;
    padding-left: 16px;
  }
`,Fe=i.p`
  width: 204px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 212px;
  }
`,Ve=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 166px;
  }
`,Le=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Ge=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Ye=i.p`
  width: 80px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Ke=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,Oe=i.thead`
  display: none;
`,Ue=i.tr`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.white};
  margin-top: 66px;
  max-width: 297px;

  &:first-child {
    margin-top: 22px;
  }

  @media (min-width: ${e.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
    max-width: 656px;
    width: 704px;
    height: 40px;
    gap: 8px;
    flex-wrap: nowrap;
    align-items: baseline;
    margin-top: 6px;

    &:first-child {
      margin-top: 0;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 762px;
    width: 826px;
  }
`,Je=i.td`
  position: relative;
  border: ${e.border.grey3};
  border-radius: 12px;
  width: 100%;
  height: 38px;
  margin-bottom: 42px;
  padding: 10px 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-align: left;

  &::before {
    content: 'Title';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${e.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 0;
    padding: 8px 14px;
    width: 204px;
    height: 40px;
    font-size: 16px;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    width: 212px;
  }
`,Qe=i.td`
  position: relative;
  border: ${e.border.grey3};
  border-radius: 12px;
  width: 100%;
  height: 38px;
  margin-bottom: 42px;
  padding: 10px 14px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  &::before {
    content: 'Category';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${e.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (min-width: ${e.breakpoint.md}) {
    width: 128px;
    height: 40px;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    width: 166px;
  }
`,Xe=i.td`
  position: relative;
  border: ${e.border.grey3};
  border-radius: 12px;
  width: 81px;
  height: 38px;
  margin-right: 16px;
  padding: 10px 14px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  &::before {
    content: 'Calories';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${e.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    margin-right: 8px;
    max-width: 60px;
  }

  @media (min-width: ${e.breakpoint.md}) {
    width: 90px;
    height: 40px;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    margin-right: 0;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Ze=i.td`
  position: relative;
  border: ${e.border.grey3};
  border-radius: 12px;
  width: 80px;
  height: 38px;
  margin-right: 16px;
  padding: 10px 14px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  &::before {
    content: 'Weight';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${e.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    margin-right: 8px;
    max-width: 60px;
  }

  @media (min-width: ${e.breakpoint.md}) {
    width: 90px;
    height: 40px;
    padding: 8px 14px;
    font-size: 16px;
    line-height: 1.5;
    margin-right: 0;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,V=i.svg`
  width: 14px;
  height: 14px;
  margin-right: 8px;

  @media (max-width: 375px) {
    display: none;
  }

  @media (min-width: ${e.breakpoint.md}) {
    display: flex;
    width: 14px;
    height: 14px;
  }
`,L=i.td`
  position: relative;
  display: flex;
  align-items: center;
  border: ${e.border.grey3};
  border-radius: 12px;
  width: 76px;
  height: 38px;
  padding: 10px 14px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  &::before {
    content: 'Recommend';
    position: absolute;
    top: -25px;
    left: 0;
    color: ${e.color.orangeSecond};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    max-width: 60px;
  }

  @media (min-width: ${e.breakpoint.md}) {
    width: 80px;
    height: 40px;
    padding: 8px 14px 8px 14px;
    font-size: 16px;
    line-height: 1.5;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,et=i.td`
  width: 20px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 30px;
  }
`,tt=i.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,it=i.svg`
  width: 20px;
  height: 20px;
  stroke: ${e.color.orangeSecond};
  transition-duration: 300ms;
  margin-left: 4px;

  &:hover {
    stroke: ${e.color.white};
    transition-duration: 300ms;
  }

  @media (max-width: 375px) {
    margin-left: 4px;
  }
`,ot=({products:d,onDeleteProduct:a})=>t.jsxs(t.Fragment,{children:[t.jsxs(He,{children:[t.jsx(Fe,{children:"Title"}),t.jsx(Ve,{children:"Category"}),t.jsx(Le,{children:"Calories"}),t.jsx(Ge,{children:"Weight"}),t.jsx(Ye,{children:"Recommend"}),t.jsx("p",{children:" "})]}),t.jsx(Ee,{children:t.jsxs(Ke,{children:[t.jsx(Oe,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Title"}),t.jsx("th",{children:"Category"}),t.jsx("th",{children:"Calories"}),t.jsx("th",{children:"Weight"}),t.jsx("th",{children:"Recommend"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:d.map(o=>t.jsxs(Ue,{children:[t.jsx(Je,{children:o.title}),t.jsx(Qe,{children:o.category}),t.jsx(Xe,{children:o.calories}),t.jsx(Ze,{children:o.weight}),o.recommended?t.jsxs(L,{children:[t.jsx(V,{children:t.jsx("use",{href:"/img/sprait.svg#circle",fill:"#419B09"})}),"Yes"]}):t.jsxs(L,{children:[t.jsx(V,{children:t.jsx("use",{href:"/img/sprait.svg#circle",fill:"#e9101d"})}),"No"]}),t.jsx(et,{children:t.jsx(tt,{onClick:()=>a(o.id),children:t.jsx(it,{children:t.jsx("use",{href:"/img/sprait.svg#trash"})})})})]},o.id))})]})})]}),rt=[{id:"1",title:"Rice semolina Garnets glute",category:"Cereals",calories:"340",weight:"100",recommended:!0},{id:"2",title:"Venison stew Special",category:"Meat",calories:"81",weight:"100",recommended:!1},{id:"3",title:"Bread Hercules grain",category:"Flour",calories:"289",weight:"100",recommended:!0},{id:"4",title:"Banana juice",category:"Soft drinks",calories:"48",weight:"100",recommended:!1},{id:"5",title:"Spikachki",category:"Sausage",calories:"337",weight:"100",recommended:!1},{id:"6",title:"Coffee drink",category:"Soft Drinks",calories:"337",weight:"100",recommended:!1},{id:"7",title:"Red onion",category:"Vegetables and herbs",calories:"42",weight:"100",recommended:!1},{id:"8",title:"Homemade noodles",category:"Flour",calories:"332",weight:"100",recommended:!0},{id:"9",title:"Rice semolina Garnets glute",category:"Cereals",calories:"340",weight:"100",recommended:!0},{id:"10",title:"Venison stew Special",category:"Meat",calories:"81",weight:"100",recommended:!1},{id:"11",title:"Bread Hercules grain",category:"Flour",calories:"289",weight:"100",recommended:!0},{id:"12",title:"Banana juice",category:"Soft drinks",calories:"48",weight:"100",recommended:!1},{id:"13",title:"Spikachki",category:"Sausage",calories:"337",weight:"100",recommended:!1},{id:"14",title:"Coffee drink",category:"Soft Drinks",calories:"337",weight:"100",recommended:!1},{id:"15",title:"Red onion",category:"Vegetables and herbs",calories:"42",weight:"100",recommended:!1},{id:"16",title:"Homemade noodles",category:"Flour",calories:"332",weight:"100",recommended:!0},{id:"17",title:"Red onion",category:"Vegetables and herbs",calories:"42",weight:"100",recommended:!1},{id:"18",title:"Homemade noodles",category:"Flour",calories:"332",weight:"100",recommended:!0},{id:"19",title:"Rice semolina Garnets glute",category:"Cereals",calories:"340",weight:"100",recommended:!0},{id:"20",title:"Venison stew Special",category:"Meat",calories:"81",weight:"100",recommended:!1},{id:"21",title:"Bread Hercules grain",category:"Flour",calories:"289",weight:"100",recommended:!0},{id:"22",title:"Banana juice",category:"Soft drinks",calories:"48",weight:"100",recommended:!1},{id:"23",title:"Spikachki",category:"Sausage",calories:"337",weight:"100",recommended:!1},{id:"24",title:"Coffee drink",category:"Soft Drinks",calories:"337",weight:"100",recommended:!1},{id:"25",title:"Red onion",category:"Vegetables and herbs",calories:"42",weight:"100",recommended:!1},{id:"26",title:"Homemade noodles",category:"Flour",calories:"332",weight:"100",recommended:!0}],nt=()=>{const[d,a]=l.useState(rt),o=n=>{a(m=>m.filter(g=>g.id!==n))};return t.jsx(t.Fragment,{children:t.jsxs(We,{children:[t.jsxs(Ne,{children:[t.jsx(qe,{children:"Products"}),t.jsxs(Re,{to:"/products",children:["Add product",t.jsx(Ie,{children:t.jsx("use",{href:"/img/sprait.svg#icon-Icon"})})]})]}),d.length?t.jsx(ot,{products:d,onDeleteProduct:o}):t.jsx(Me,{children:"Not found products"})]})})},at=i.div`
  max-width: 335px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${e.breakpoint.md}) {
    max-width: 593px;
    margin: unset;
  }

  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 390px;
    margin-left: auto;
  }
`,dt=i.ul`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 13px;
  grid-template-columns: repeat(auto-fill, minmax(157px, 157px));
  justify-content: center;

  max-width: 335px;
  margin: 0 auto 20px auto;

  @media (min-width: ${e.breakpoint.md}) {
    max-width: 593px;
    justify-content: start;

    grid-row-gap: 16px;
    grid-column-gap: 16px;

    grid-template-columns: repeat(auto-fill, minmax(187px, 187px));

    margin: 0 auto 32px auto;
  }

  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 390px;

    margin: 0 auto 48px auto;
  }
`,st=i.li`
  position: relative;

  padding: 14px;
  border-radius: 12px;

  max-width: 157px;
  width: 100%;
  height: 96px;

  &:nth-child(5) {
    /* border: 1px solid
      ${d=>d.count<0?`${e.color.red}`:`${e.border.grey2}`}; */
  }

  &:nth-child(6) {
    order: 6;
    /* border: 1px solid
      ${d=>d.count>0?`${e.color.green}`:`${e.border.grey2}`}; */
  }

  @media (min-width: ${e.breakpoint.md}) {
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

  @media (min-width: ${e.breakpoint.xl}) {
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
`,lt=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,pt=i.svg`
  width: 20px;
  height: 20px;
`,ht=i.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */

  margin: 0;

  @media (min-width: ${e.breakpoint.md}) {
    line-height: 18px;
  }
`,ct=i.p`
  position: absolute;
  left: 14px;
  bottom: 14px;

  color: ${e.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */

  margin: 0;

  @media (min-width: ${e.breakpoint.md}) {
    left: 18px;
    bottom: 18px;

    font-size: 24px;
    line-height: 32px;
  }
`,xt=i.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,mt=i.svg`
  width: 24px;
  height: 24px;
`,gt=i.p`
  color: ${e.color.grey};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  max-width: 303px;

  margin: 0;

  @media (min-width: ${e.breakpoint.md}) {
    font-size: 16px;
    line-height: 24px;
    max-width: 561px;
  }

  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 358px;
  }
`,wt=()=>{var z,B,_,T,A,j,v,r,y,P,W,c,x,N,q,R,I,C,M,p;const d=F(s=>s.auth.user)||{},a=F(s=>s.diary.items)||0,o=J();l.useEffect(()=>{o(Q()),o(X())},[o]);const n=[{userData:d},{diaryData:a}],m=(((_=(B=(z=n[1])==null?void 0:z.diaryData)==null?void 0:B.statistic)==null?void 0:_.sportTime)??0)/60,g=(A=(T=n[0])==null?void 0:T.userData)==null?void 0:A.dailyExerciseTime;let w=m-g;const u=((r=(v=(j=n[1])==null?void 0:j.diaryData)==null?void 0:v.statistic)==null?void 0:r.calories)||0,k=((P=(y=n[0])==null?void 0:y.userData)==null?void 0:P.dailyCalorie)-u;return[{icon:`${h}#calorie-intake`,title:"Daily calorie intake",count:((c=(W=n[0])==null?void 0:W.userData)==null?void 0:c.dailyCalorie)??0,countType:"cal",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${h}#physical-activity`,title:"Daily physical activity",count:((N=(x=n[0])==null?void 0:x.userData)==null?void 0:N.dailyExerciseTime)??0,countType:"time",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${h}#calories-consumed`,title:"Сalories consumed",count:((I=(R=(q=n[1])==null?void 0:q.diaryData)==null?void 0:R.statistic)==null?void 0:I.calories)??0,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${h}#calories-burned`,title:"Сalories burned",count:((p=(M=(C=n[1])==null?void 0:C.diaryData)==null?void 0:M.statistic)==null?void 0:p.burnedCalories)??0,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${h}#calories-remaining`,title:"Calories remaining",count:k,countType:"cal",background:"default",textColor:"greyTextColor",border:k<0?"redBorder":"defaultBorder"},{icon:`${h}#sports-remaining`,title:"Sports remaining",count:w>0?`+${Math.round(w)}`:Math.abs(Math.round(w)),countType:"time",background:"default",textColor:"greyTextColor",border:w>0?"greenBorder":"defaultBorder"}]},bt=()=>{const d=wt();return t.jsxs(at,{children:[t.jsx(dt,{children:d.map((a,o)=>t.jsxs(st,{className:`${a.background} ${a.border}`,children:[t.jsxs(lt,{children:[t.jsx(pt,{children:t.jsx("use",{href:a.icon})}),t.jsx(ht,{className:a.textColor,children:a.title})]}),t.jsxs(ct,{children:[a.count," ",a.countType==="time"?"min":""]})]},o))}),t.jsxs(xt,{children:[t.jsx(mt,{children:t.jsx("use",{href:`${h}#attention-icon`})}),t.jsx(gt,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},ft=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    @media (min-width: ${e.breakpoint.md}) {
        gap: 32px;
    }
`,ut=i.div`
    display: flex;
    justify-content: space-between;
`,yt=i.h2`
  margin-top: 61px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`,kt=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
`,$t=i.div`
    display: flex;
    align-items: start;
`,jt=Z`
  .react-datepicker__wrapper {
    width: 183px;
    height: 20px;
  }

  .react-datepicker__input-container{
    width: 183px;
    margin-left: auto;
    position: relative;
  }
  
  @media screen and (min-width: ${e.breakpoint.md}) {
    .react-datepicker__wrapper {
      width: 239px;
      height: 32px;
  }
    .react-datepicker__input-container{
      width: 239px;
      height: 32px;
  }}

  .react-datepicker {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 8px;
    width: 215px;
    min-height: 236px;
    background-color: ${e.color.orangeSecond};
    padding: 14px;
  }

  .react-datepicker__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 187px;
    background-color: ${e.color.orangeSecond};
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 187px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
    border-bottom: none;
    padding-top: 14px;
  }

  .react-datepicker__current-month {
    height: 19px;
    white-space: nowrap;
  }

  .react-datepicker__day-name {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    text-align: center;
    color: rgba(239, 237, 232, 0.5);
  }

  .react-datepicker__navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${e.color.white};
  }

  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${e.color.white};
    margin-top: 6px;
  }

  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    color: ${e.color.white};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-align: center;
    cursor: pointer;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--selected:hover,
  .react-datepicker__day:hover,
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: ${e.color.black};
  }


  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }

  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__month {
    width: 187px;
    min-height: 161px;
  }

  .react-datepicker__aria-live {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .react-datepicker__month-container{
    display: flex;
    flex-direction: column;
  }

  .react-datepicker__day--outside-month{
    color: rgba(239, 237, 232, 0.2);
    opacity: 1;
  }

 .react-datepicker-wrapper .react-datepicker__input-container {
  display: inline-flex; 
  position: relative; 
}

.react-datepicker__tab-loop {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9998; 
}

.react-datepicker-popper {
  z-index: 9999; 
}
  `,vt=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 187px;
  height: 19px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${e.color.white};
  margin-bottom: 14px;
`,Ct=i.input`
  width: 97px;
  height: 20px;
  background-color: ${e.color.black};
  color: ${e.color.white};
  border: none;

  @media screen and (min-width: ${e.breakpoint.md}) {
    width: 129px;
    height: 32px;
  } `,G=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 19px;
  padding: 0;
  background-color: transparent;
  border: none;
`,Y=i.svg`
  width: 6px;
  height: 10px;
  stroke: ${e.color.white};
  stroke-width: 1.5;
  fill: ${e.color.white};
  stroke: ${e.color.white};
  cursor: pointer;
  `,Dt=i.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${e.color.white};
`,St=i.div`
  display: flex;
  align-items: center;
  width: 183px;
  height: 20px;
  border: none;
  padding: 0;
  background-color: ${e.color.black};
  color: ${e.color.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 0.02em;
  text-align: center;

  @media screen and (min-width: ${e.breakpoint.md}) {
    font-size: 24px;
    line-height: 1.33;
    width: 239px;
    height: 32px;
  } `,K=i.svg`
  width: 16px;
  height: 16px;
  fill: ${e.color.white};
  stroke: ${e.color.white};
  cursor: pointer;

    &:hover, &:focus {
    stroke: ${e.color.orangeSecond};
    fill: ${e.color.orangeSecond} ;
  }
  `,zt=i.svg`
  width: 20px;
  height: 20px;
  stroke: ${e.color.orangeSecond};
  margin-left: 8px;
  margin-right: auto;
  stroke-width: 1.8;
  cursor: pointer;

  @media screen and (min-width: ${e.breakpoint.md}) {
    width: 24px;
    height: 24px;
  } `;const U=l.forwardRef((d,a)=>{const[o,n]=l.useState(Date.now()),[m,g]=l.useState(""),[w,u]=l.useState(""),[k,$]=l.useState("active"),z=l.useRef(null);l.useEffect(()=>{g(S(o,"MMMM yyyy"))},[o]);const B=()=>{u("active"),$("");const r=te(o,1);n(r)},_=()=>{u("active"),$("");const r=ie(o,1);n(r)},T=()=>{u(""),$("active");const r=oe(o,1);n(r)},A=()=>{u(""),$("active");const r=re(o,1);n(r)},j=r=>{n(r)},v=l.forwardRef(({value:r,onClick:y,onKeyDown:P},W)=>{const[c,x]=l.useState(""),[N,q]=l.useState("");l.useEffect(()=>{x(r),q(r)},[r]);const R=p=>{const s=p.target.value.replace(/\D/g,"");let b=s;if(s.length>2&&s.length<5?b=s.slice(0,2)+"/"+s.slice(2):s.length>=5&&(b=s.slice(0,2)+"/"+s.slice(2,4)+"/"+s.slice(4,8)),x(b),p.target.value.length===10){const[E,H,f]=b.split("/"),D=new Date(`${f}-${H}-${E}`);isNaN(D.getTime())||(n(D),j(D))}},I=()=>{(!C(c)||c.trim()==="")&&x(N),(!C(c)||c.trim()==="")&&x(S(o,"dd/MM/yyyy"))},C=p=>/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(p),M=p=>{if(p.key==="Enter"){p.preventDefault();const s=c.replace(/\//g,""),b=s.substring(0,2),E=s.substring(2,4),H=s.substring(4,8);let f;if(H.length<4){const D=new Date().getFullYear();f=new Date(`${D}-${E}-${b}`)}else f=new Date(`${H}-${E}-${b}`);if(!isNaN(f.getTime())){n(f),x(S(f,"dd/MM/yyyy"));return}x(S(o,"dd/MM/yyyy"))}};return t.jsxs(St,{children:[t.jsx(Ct,{type:"text",value:c,onChange:R,onBlur:I,onKeyDown:p=>{M(p),P(p)},ref:W}),t.jsx(zt,{onClick:y,children:t.jsx("use",{href:`${h}#calendar`})}),t.jsx(K,{className:w,onClick:_,children:t.jsx("use",{href:`${h}#arrow-left`})}),t.jsx(K,{className:k,onClick:A,children:t.jsx("use",{href:`${h}#arrow-right`})})]})});return v.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(ee,{ref:r=>{z.current=r,a&&(a.current=r)},...d,selected:o,onChange:j,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:r=>r.substr(0,2),customInput:t.jsx(v,{value:S(o,"dd/MM/yyyy"),onChange:n,onKeyDown:r=>{r.key==="Enter"&&r.preventDefault()}}),renderCustomHeader:({decreaseMonth:r,increaseMonth:y})=>t.jsxs(vt,{children:[t.jsx(G,{type:"button",className:"react-datepicker__navigation--previous","aria-label":"Previous Month",onClick:r,children:t.jsx(Y,{className:w,onClick:B,children:t.jsx("use",{href:`${h}#arrow-left`})})}),t.jsx(Dt,{className:"react-datepicker__current-month",children:m}),t.jsx(G,{type:"button",className:"react-datepicker__navigation--next","aria-label":"Next Month",onClick:y,children:t.jsx(Y,{className:k,onClick:T,children:t.jsx("use",{href:`${h}#arrow-right`})})})]})}),t.jsx(jt,{})]})});U.displayName="StyledDatepicker";const Bt=U;function At(){return t.jsx("section",{children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row",children:t.jsxs(kt,{children:[t.jsxs(ut,{children:[t.jsx(yt,{children:"Diary"}),t.jsx(Bt,{})]}),t.jsxs($t,{children:[t.jsxs(ft,{children:[t.jsx(nt,{}),t.jsx(Pe,{})]}),t.jsx(bt,{})]})]})})})})}export{At as default};
