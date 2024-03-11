import{s as i,t as e,j as t,N as U,a as l,d as z,u as L,q as J,v as Z,w as ee,b as x,h as te}from"./index-fc4aa28e.js";import{f as S,i as ie,s as oe,a as ne,b as re,c as ae}from"./index-cf429e40.js";const de=i.div`
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
`,se=i.div`
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
`,pe=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 115px;
  }
`,le=i.p`
  width: 132px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 157px;
  }
`,he=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 131px;
  }
`,xe=i.p`
  width: 84px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 106px;
  }
`,ce=i.p`
  width: 78px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 91px;
  }
`,me=i.p`
  width: 72px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 82px;
  }
`,ge=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,we=i.thead`
  display: none;
`,be=i.tr`
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
`,ue=i.td`
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
`,ye=i.td`
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
`,$e=i.td`
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
`,ke=i.td`
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
`,je=i.td`
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
`,ve=i.td`
  width: 20px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 30px;
  }
`,Ce=i.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,De=i.svg`
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
`,Se=({exercises:a,onDeleteExercise:d})=>t.jsxs(t.Fragment,{children:[t.jsxs(se,{children:[t.jsx(pe,{children:"Body Part"}),t.jsx(le,{children:"Equipment"}),t.jsx(he,{children:"Name"}),t.jsx(xe,{children:"Target"}),t.jsx(ce,{children:"Burned Calories"}),t.jsx(me,{children:"Time"}),t.jsx("p",{children:" "})]}),t.jsx(de,{children:t.jsxs(ge,{children:[t.jsx(we,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Body Part"}),t.jsx("th",{children:"Equipment"}),t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Target"}),t.jsx("th",{children:"Burned Calories"}),t.jsx("th",{children:"Time"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:a.map(o=>t.jsxs(be,{children:[t.jsx(fe,{children:o.bodyPart}),t.jsx(ue,{children:o.equipment}),t.jsx(ye,{children:o.name}),t.jsx($e,{children:o.target}),t.jsx(ke,{children:o.burnedCalories}),t.jsx(je,{children:o.time}),t.jsx(ve,{children:t.jsx(Ce,{onClick:()=>d(o.id),children:t.jsx(De,{children:t.jsx("use",{href:"/img/sprait.svg#trash"})})})})]},o.id))})]})})]}),ze=i.div`
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
`,Be=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 16px;
  }
`,_e=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.greyThird};
`,Pe=i(U)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  stroke: ${e.color.orange};
  color: ${e.color.orange};
  transition-duration: 300ms;

  &:hover {
    stroke: ${e.color.white};
    color: ${e.color.white};
    transition-duration: 300ms;
  }

  @media (min-width: ${e.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Te=i.svg`
  width: 16px;
  height: 16px;
`,Ae=i.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.grey};
  text-align: center;

  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 65px;
  }
`,We=[{id:"1",bodyPart:"Upper arms",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"2",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"3",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"4",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"5",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"6",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"7",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"8",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"9",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"10",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"11",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"12",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"13",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"14",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"15",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"16",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"17",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"18",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"19",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"20",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"21",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"22",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"23",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"24",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"25",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"26",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60}],Ne=()=>{const[a,d]=l.useState(We),o=r=>{d(m=>m.filter(s=>s.id!==r))};return t.jsx(t.Fragment,{children:t.jsxs(ze,{children:[t.jsxs(Be,{children:[t.jsx(_e,{children:"Execrcises"}),t.jsxs(Pe,{to:"/exercises",children:["Add exercise",t.jsx(Te,{children:t.jsx("use",{href:"/img/sprait.svg#icon-Icon"})})]})]}),a.length?t.jsx(Se,{exercises:a,onDeleteExercise:o}):t.jsx(Ae,{children:"Not found products"})]})})},qe=i.div`
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
`,Ie=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 16px;
  }
`,Me=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.greyThird};
`,Re=i(U)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.orange};
  stroke: ${e.color.orange};
  transition-duration: 300ms;

  &:hover {
    stroke: ${e.color.white};
    color: ${e.color.white};
    transition-duration: 300ms;
  }

  @media (min-width: ${e.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Ee=i.svg`
  width: 16px;
  height: 16px;
`,He=i.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.grey};
  text-align: center;

  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 65px;
  }
`,Fe=i.div`
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
`,Le=i.div`
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
`,Ve=i.p`
  width: 204px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 212px;
  }
`,Ge=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 166px;
  }
`,Ye=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Ke=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Oe=i.p`
  width: 80px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Ue=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,Je=i.thead`
  display: none;
`,Qe=i.tr`
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
`,Xe=i.td`
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
`,Ze=i.td`
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
`,et=i.td`
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
`,tt=i.td`
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
`,G=i.td`
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
`,it=i.td`
  width: 20px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 30px;
  }
`,ot=i.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,nt=i.svg`
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
`,Q=a=>a.diary.products,rt=({products:a,onDeleteProduct:d})=>{const o=z(Q),r=L(),m=z(s=>{var c;return(c=s.auth.user.bodyData)==null?void 0:c.blood})??"1";return t.jsxs(t.Fragment,{children:[t.jsxs(Le,{children:[t.jsx(Ve,{children:"Title"}),t.jsx(Ge,{children:"Category"}),t.jsx(Ye,{children:"Calories"}),t.jsx(Ke,{children:"Weight"}),t.jsx(Oe,{children:"Recommend"}),t.jsx("p",{children:" "})]}),t.jsx(Fe,{children:t.jsxs(Ue,{children:[t.jsx(Je,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Title"}),t.jsx("th",{children:"Category"}),t.jsx("th",{children:"Calories"}),t.jsx("th",{children:"Weight"}),t.jsx("th",{children:"Recommend"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:o.map(s=>t.jsxs(Qe,{children:[t.jsx(Xe,{children:s.product.title}),t.jsx(Ze,{children:s.product.category}),t.jsx(et,{children:s.calories}),t.jsx(tt,{children:s.weight}),s.product.groupBloodNotAllowed[m]?t.jsxs(G,{children:[t.jsx(V,{children:t.jsx("use",{href:"/img/sprait.svg#circle",fill:"#419B09"})}),"Yes"]}):t.jsxs(G,{children:[t.jsx(V,{children:t.jsx("use",{href:"/img/sprait.svg#circle",fill:"#e9101d"})}),"No"]}),t.jsx(it,{children:t.jsx(ot,{onClick:()=>r(J({id:s._id,calories:s.calories})),children:t.jsx(nt,{children:t.jsx("use",{href:"/img/sprait.svg#trash"})})})})]},s._id))})]})})]})},at=[{id:"1",title:"Rice semolina Garnets glute",category:"Cereals",calories:"340",weight:"100",recommended:!0},{id:"2",title:"Venison stew Special",category:"Meat",calories:"81",weight:"100",recommended:!1}],dt=()=>{const[a,d]=l.useState(at);z(Q);const o=L(),r=(m,s)=>{o(J({id:m,calories:s}))};return t.jsx(t.Fragment,{children:t.jsxs(qe,{children:[t.jsxs(Ie,{children:[t.jsx(Me,{children:"Products"}),t.jsxs(Re,{to:"/products",children:["Add product",t.jsx(Ee,{children:t.jsx("use",{href:"/img/sprait.svg#icon-Icon"})})]})]}),a.length?t.jsx(rt,{products:a,onDeleteProduct:r}):t.jsx(He,{children:"Not found products"})]})})},st=i.div`
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
`,pt=i.ul`
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
`,lt=i.li`
  position: relative;

  padding: 14px;
  border-radius: 12px;

  max-width: 157px;
  width: 100%;
  height: 96px;

  &:nth-child(5) {
    /* border: 1px solid
      ${a=>a.count<0?`${e.color.red}`:`${e.border.grey2}`}; */
  }

  &:nth-child(6) {
    order: 6;
    /* border: 1px solid
      ${a=>a.count>0?`${e.color.green}`:`${e.border.grey2}`}; */
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
`,ht=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,xt=i.svg`
  width: 20px;
  height: 20px;
`,ct=i.p`
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
`,mt=i.p`
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
`,gt=i.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,wt=i.svg`
  width: 24px;
  height: 24px;
`,bt=i.p`
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
`,ft=()=>{var B,_,P,T,A,j,v,n,y,W,N,g,w,q,I,M,R,C,E,h;const a=z(p=>p.auth.user)||{},d=z(p=>p.diary.items)||0,o=L();l.useEffect(()=>{o(Z()),o(ee())},[o]);const r=[{userData:a},{diaryData:d}],m=(((P=(_=(B=r[1])==null?void 0:B.diaryData)==null?void 0:_.statistic)==null?void 0:P.sportTime)??0)/60,s=(A=(T=r[0])==null?void 0:T.userData)==null?void 0:A.dailyExerciseTime;let c=m-s;const u=((n=(v=(j=r[1])==null?void 0:j.diaryData)==null?void 0:v.statistic)==null?void 0:n.calories)||0,$=((W=(y=r[0])==null?void 0:y.userData)==null?void 0:W.dailyCalorie)-u;return[{icon:`${x}#calorie-intake`,title:"Daily calorie intake",count:((g=(N=r[0])==null?void 0:N.userData)==null?void 0:g.dailyCalorie)??0,countType:"cal",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${x}#physical-activity`,title:"Daily physical activity",count:((q=(w=r[0])==null?void 0:w.userData)==null?void 0:q.dailyExerciseTime)??0,countType:"time",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${x}#calories-consumed`,title:"Сalories consumed",count:((R=(M=(I=r[1])==null?void 0:I.diaryData)==null?void 0:M.statistic)==null?void 0:R.calories)??0,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${x}#calories-burned`,title:"Сalories burned",count:((h=(E=(C=r[1])==null?void 0:C.diaryData)==null?void 0:E.statistic)==null?void 0:h.burnedCalories)??0,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${x}#calories-remaining`,title:"Calories remaining",count:$,countType:"cal",background:"default",textColor:"greyTextColor",border:$<0?"redBorder":"defaultBorder"},{icon:`${x}#sports-remaining`,title:"Sports remaining",count:c>0?`+${Math.round(c)}`:Math.abs(Math.round(c)),countType:"time",background:"default",textColor:"greyTextColor",border:c>0?"greenBorder":"defaultBorder"}]},ut=()=>{const a=ft();return t.jsxs(st,{children:[t.jsx(pt,{children:a.map((d,o)=>t.jsxs(lt,{className:`${d.background} ${d.border}`,children:[t.jsxs(ht,{children:[t.jsx(xt,{children:t.jsx("use",{href:d.icon})}),t.jsx(ct,{className:d.textColor,children:d.title})]}),t.jsxs(mt,{children:[d.count," ",d.countType==="time"?"min":""]})]},o))}),t.jsxs(gt,{children:[t.jsx(wt,{children:t.jsx("use",{href:`${x}#attention-icon`})}),t.jsx(bt,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},yt=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    @media (min-width: ${e.breakpoint.md}) {
        gap: 32px;
    }
`,$t=i.div`
    display: flex;
    justify-content: space-between;
`,kt=i.h2`
  margin-top: 61px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`,jt=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
`,vt=i.div`
    display: flex;
    gap: 40px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    @media (min-width: ${e.breakpoint.md}) {
      flex-direction: column;
      align-items: flex-start;
      gap: 64px;
  }
    @media (min-width: ${e.breakpoint.xl}) {
      flex-direction: row;
      gap: 32px;
  }
`,Ct=te`
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
  `,Dt=i.div`
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
`,St=i.input`
  width: 97px;
  height: 20px;
  background-color: ${e.color.black};
  color: ${e.color.white};
  border: none;

  @media screen and (min-width: ${e.breakpoint.md}) {
    width: 129px;
    height: 32px;
  } `,Y=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 19px;
  padding: 0;
  background-color: transparent;
  border: none;
`,K=i.svg`
  width: 6px;
  height: 10px;
  stroke: ${e.color.white};
  stroke-width: 1.5;
  fill: ${e.color.white};
  stroke: ${e.color.white};
  cursor: pointer;
  `,zt=i.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${e.color.white};
`,Bt=i.div`
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
  } `,O=i.svg`
  width: 16px;
  height: 16px;
  fill: ${e.color.white};
  stroke: ${e.color.white};
  cursor: pointer;

    &:hover, &:focus {
    stroke: ${e.color.orangeSecond};
    fill: ${e.color.orangeSecond} ;
  }
  `,_t=i.svg`
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
  } `;const X=l.forwardRef((a,d)=>{const[o,r]=l.useState(Date.now()),[m,s]=l.useState(""),[c,u]=l.useState(""),[$,k]=l.useState("active"),B=l.useRef(null);l.useEffect(()=>{s(S(o,"MMMM yyyy"))},[o]);const _=()=>{u("active"),k("");const n=oe(o,1);r(n)},P=()=>{u("active"),k("");const n=ne(o,1);r(n)},T=()=>{u(""),k("active");const n=re(o,1);r(n)},A=()=>{u(""),k("active");const n=ae(o,1);r(n)},j=n=>{r(n)},v=l.forwardRef(({value:n,onClick:y,onKeyDown:W},N)=>{const[g,w]=l.useState(""),[q,I]=l.useState("");l.useEffect(()=>{w(n),I(n)},[n]);const M=h=>{const p=h.target.value.replace(/\D/g,"");let b=p;if(p.length>2&&p.length<5?b=p.slice(0,2)+"/"+p.slice(2):p.length>=5&&(b=p.slice(0,2)+"/"+p.slice(2,4)+"/"+p.slice(4,8)),w(b),h.target.value.length===10){const[H,F,f]=b.split("/"),D=new Date(`${f}-${F}-${H}`);isNaN(D.getTime())||(r(D),j(D))}},R=()=>{(!C(g)||g.trim()==="")&&w(q),(!C(g)||g.trim()==="")&&w(S(o,"dd/MM/yyyy"))},C=h=>/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(h),E=h=>{if(h.key==="Enter"){h.preventDefault();const p=g.replace(/\//g,""),b=p.substring(0,2),H=p.substring(2,4),F=p.substring(4,8);let f;if(F.length<4){const D=new Date().getFullYear();f=new Date(`${D}-${H}-${b}`)}else f=new Date(`${F}-${H}-${b}`);if(!isNaN(f.getTime())){r(f),w(S(f,"dd/MM/yyyy"));return}w(S(o,"dd/MM/yyyy"))}};return t.jsxs(Bt,{children:[t.jsx(St,{type:"text",value:g,onChange:M,onBlur:R,onKeyDown:h=>{E(h),W(h)},ref:N}),t.jsx(_t,{onClick:y,children:t.jsx("use",{href:`${x}#calendar`})}),t.jsx(O,{className:c,onClick:P,children:t.jsx("use",{href:`${x}#arrow-left`})}),t.jsx(O,{className:$,onClick:A,children:t.jsx("use",{href:`${x}#arrow-right`})})]})});return v.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(ie,{ref:n=>{B.current=n,d&&(d.current=n)},...a,selected:o,onChange:j,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:n=>n.substr(0,2),customInput:t.jsx(v,{value:S(o,"dd/MM/yyyy"),onChange:r,onKeyDown:n=>{n.key==="Enter"&&n.preventDefault()}}),renderCustomHeader:({decreaseMonth:n,increaseMonth:y})=>t.jsxs(Dt,{children:[t.jsx(Y,{type:"button",className:"react-datepicker__navigation--previous","aria-label":"Previous Month",onClick:n,children:t.jsx(K,{className:c,onClick:_,children:t.jsx("use",{href:`${x}#arrow-left`})})}),t.jsx(zt,{className:"react-datepicker__current-month",children:m}),t.jsx(Y,{type:"button",className:"react-datepicker__navigation--next","aria-label":"Next Month",onClick:y,children:t.jsx(K,{className:$,onClick:T,children:t.jsx("use",{href:`${x}#arrow-right`})})})]})}),t.jsx(Ct,{})]})});X.displayName="StyledDatepicker";const Pt=X;function Wt(){const a={};return t.jsx("section",{children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row",children:t.jsxs(jt,{children:[t.jsxs($t,{children:[t.jsx(kt,{children:"Diary"}),t.jsx(Pt,{})]}),t.jsxs(vt,{children:[t.jsxs(yt,{children:[t.jsx(dt,{productList:a}),t.jsx(Ne,{})]}),t.jsx(ut,{})]})]})})})})}export{Wt as default};