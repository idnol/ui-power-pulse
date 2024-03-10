import{s as i,t as e,j as t,N as Y,a as l,d as E,u as O,v as U,w as J,b as h,h as Q}from"./index-251844ee.js";import{f as B,i as X,s as Z,a as ee}from"./index-67beaa9b.js";const te=i.div`
  min-height: 234px;
  max-height: 990px;
  overflow-y: auto;

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
  }
`,ie=i.div`
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
`,oe=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 115px;
  }
`,re=i.p`
  width: 132px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 157px;
  }
`,ne=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 131px;
  }
`,ae=i.p`
  width: 84px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 106px;
  }
`,de=i.p`
  width: 78px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 91px;
  }
`,se=i.p`
  width: 72px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 82px;
  }
`,le=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,pe=i.thead`
  display: none;
`,he=i.tr`
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
`,ce=i.td`
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
`,xe=i.td`
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
`,me=i.td`
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
`,ge=i.td`
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
`,we=i.td`
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
`,be=i.td`
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
`,fe=i.td`
  width: 20px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 30px;
  }
`,ue=i.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,ye=i.svg`
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
`,ke=({exercises:r,onDeleteExercise:a})=>t.jsxs(t.Fragment,{children:[t.jsxs(ie,{children:[t.jsx(oe,{children:"Body Part"}),t.jsx(re,{children:"Equipment"}),t.jsx(ne,{children:"Name"}),t.jsx(ae,{children:"Target"}),t.jsx(de,{children:"Burned Calories"}),t.jsx(se,{children:"Time"}),t.jsx("p",{children:" "})]}),t.jsx(te,{children:t.jsxs(le,{children:[t.jsx(pe,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Body Part"}),t.jsx("th",{children:"Equipment"}),t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Target"}),t.jsx("th",{children:"Burned Calories"}),t.jsx("th",{children:"Time"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:r.map(o=>t.jsxs(he,{children:[t.jsx(ce,{children:o.bodyPart}),t.jsx(xe,{children:o.equipment}),t.jsx(me,{children:o.name}),t.jsx(ge,{children:o.target}),t.jsx(we,{children:o.burnedCalories}),t.jsx(be,{children:o.time}),t.jsx(fe,{children:t.jsx(ue,{onClick:()=>a(o.id),children:t.jsx(ye,{children:t.jsx("use",{href:"/img/sprait.svg#trash"})})})})]},o.id))})]})})]}),$e=i.div`
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
`,je=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 16px;
  }
`,ve=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.greyThird};
`,Ce=i(Y)`
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
`,De=i.svg`
  stroke: ${e.color.orange};
  width: 16px;
  height: 16px;
`,Se=i.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.grey};
  text-align: center;

  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 65px;
  }
`,Be=[{id:"1",bodyPart:"Upper arms",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"2",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"3",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"4",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"5",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"6",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"7",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"8",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"9",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"10",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"11",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"12",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"13",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"14",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"15",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"16",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"17",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"18",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"19",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"20",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"21",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"22",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"23",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"24",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"25",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"26",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60}],ze=()=>{const[r,a]=l.useState(Be),o=d=>{a(w=>w.filter(b=>b.id!==d))};return t.jsx(t.Fragment,{children:t.jsxs($e,{children:[t.jsxs(je,{children:[t.jsx(ve,{children:"Execrcises"}),t.jsxs(Ce,{children:["Add product",t.jsx(De,{children:t.jsx("use",{href:"/img/sprait.svg#icon-Icon"})})]})]}),r.length?t.jsx(ke,{exercises:r,onDeleteExercise:o}):t.jsx(Se,{children:"Not found products"})]})})},Ae=i.div`
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
`,Te=i.div`
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
`,Pe=i(Y)`
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
`,We=i.svg`
  stroke: ${e.color.orange};
  width: 16px;
  height: 16px;
`,Ne=i.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.grey};
  text-align: center;

  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 65px;
  }
`,qe=i.div`
  min-height: 234px;
  max-height: 750px;
  overflow-y: auto;

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
  }
`,Re=i.div`
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
`,Ie=i.p`
  width: 204px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 212px;
  }
`,Me=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 166px;
  }
`,Ee=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,He=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Fe=i.p`
  width: 80px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Ve=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,Le=i.thead`
  display: none;
`,Ge=i.tr`
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
`,Ye=i.td`
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
`,Ke=i.td`
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
`,Oe=i.td`
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
`,Ue=i.td`
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
`,H=i.svg`
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
`,F=i.td`
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
`,Je=i.td`
  width: 20px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 30px;
  }
`,Qe=i.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Xe=i.svg`
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
`,Ze=({products:r,onDeleteProduct:a})=>t.jsxs(t.Fragment,{children:[t.jsxs(Re,{children:[t.jsx(Ie,{children:"Title"}),t.jsx(Me,{children:"Category"}),t.jsx(Ee,{children:"Calories"}),t.jsx(He,{children:"Weight"}),t.jsx(Fe,{children:"Recommend"}),t.jsx("p",{children:" "})]}),t.jsx(qe,{children:t.jsxs(Ve,{children:[t.jsx(Le,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Title"}),t.jsx("th",{children:"Category"}),t.jsx("th",{children:"Calories"}),t.jsx("th",{children:"Weight"}),t.jsx("th",{children:"Recommend"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:r.map(o=>t.jsxs(Ge,{children:[t.jsx(Ye,{children:o.title}),t.jsx(Ke,{children:o.category}),t.jsx(Oe,{children:o.calories}),t.jsx(Ue,{children:o.weight}),o.recommended?t.jsxs(F,{children:[t.jsx(H,{children:t.jsx("use",{href:"/img/sprait.svg#circle",fill:"#419B09"})}),"Yes"]}):t.jsxs(F,{children:[t.jsx(H,{children:t.jsx("use",{href:"/img/sprait.svg#circle",fill:"#e9101d"})}),"No"]}),t.jsx(Je,{children:t.jsx(Qe,{onClick:()=>a(o.id),children:t.jsx(Xe,{children:t.jsx("use",{href:"/img/sprait.svg#trash"})})})})]},o.id))})]})})]}),et=[{id:"1",title:"Rice semolina Garnets glute",category:"Cereals",calories:"340",weight:"100",recommended:!0},{id:"2",title:"Venison stew Special",category:"Meat",calories:"81",weight:"100",recommended:!1},{id:"3",title:"Bread Hercules grain",category:"Flour",calories:"289",weight:"100",recommended:!0},{id:"4",title:"Banana juice",category:"Soft drinks",calories:"48",weight:"100",recommended:!1},{id:"5",title:"Spikachki",category:"Sausage",calories:"337",weight:"100",recommended:!1},{id:"6",title:"Coffee drink",category:"Soft Drinks",calories:"337",weight:"100",recommended:!1},{id:"7",title:"Red onion",category:"Vegetables and herbs",calories:"42",weight:"100",recommended:!1},{id:"8",title:"Homemade noodles",category:"Flour",calories:"332",weight:"100",recommended:!0},{id:"9",title:"Rice semolina Garnets glute",category:"Cereals",calories:"340",weight:"100",recommended:!0},{id:"10",title:"Venison stew Special",category:"Meat",calories:"81",weight:"100",recommended:!1},{id:"11",title:"Bread Hercules grain",category:"Flour",calories:"289",weight:"100",recommended:!0},{id:"12",title:"Banana juice",category:"Soft drinks",calories:"48",weight:"100",recommended:!1},{id:"13",title:"Spikachki",category:"Sausage",calories:"337",weight:"100",recommended:!1},{id:"14",title:"Coffee drink",category:"Soft Drinks",calories:"337",weight:"100",recommended:!1},{id:"15",title:"Red onion",category:"Vegetables and herbs",calories:"42",weight:"100",recommended:!1},{id:"16",title:"Homemade noodles",category:"Flour",calories:"332",weight:"100",recommended:!0},{id:"17",title:"Red onion",category:"Vegetables and herbs",calories:"42",weight:"100",recommended:!1},{id:"18",title:"Homemade noodles",category:"Flour",calories:"332",weight:"100",recommended:!0},{id:"19",title:"Rice semolina Garnets glute",category:"Cereals",calories:"340",weight:"100",recommended:!0},{id:"20",title:"Venison stew Special",category:"Meat",calories:"81",weight:"100",recommended:!1},{id:"21",title:"Bread Hercules grain",category:"Flour",calories:"289",weight:"100",recommended:!0},{id:"22",title:"Banana juice",category:"Soft drinks",calories:"48",weight:"100",recommended:!1},{id:"23",title:"Spikachki",category:"Sausage",calories:"337",weight:"100",recommended:!1},{id:"24",title:"Coffee drink",category:"Soft Drinks",calories:"337",weight:"100",recommended:!1},{id:"25",title:"Red onion",category:"Vegetables and herbs",calories:"42",weight:"100",recommended:!1},{id:"26",title:"Homemade noodles",category:"Flour",calories:"332",weight:"100",recommended:!0}],tt=()=>{const[r,a]=l.useState(et),o=d=>{a(w=>w.filter(b=>b.id!==d))};return t.jsx(t.Fragment,{children:t.jsxs(Ae,{children:[t.jsxs(Te,{children:[t.jsx(_e,{children:"Products"}),t.jsxs(Pe,{to:"/products",children:["Add product",t.jsx(We,{children:t.jsx("use",{href:"/img/sprait.svg#icon-Icon"})})]})]}),r.length?t.jsx(Ze,{products:r,onDeleteProduct:o}):t.jsx(Ne,{children:"Not found products"})]})})},it=i.div`
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
`,ot=i.ul`
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
`,rt=i.li`
  position: relative;

  padding: 14px;
  border-radius: 12px;

  max-width: 157px;
  width: 100%;
  height: 96px;

  &:nth-child(5) {
    /* border: 1px solid
      ${r=>r.count<0?`${e.color.red}`:`${e.border.grey2}`}; */
  }

  &:nth-child(6) {
    order: 6;
    /* border: 1px solid
      ${r=>r.count>0?`${e.color.green}`:`${e.border.grey2}`}; */
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
`,nt=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,at=i.svg`
  width: 20px;
  height: 20px;
`,dt=i.p`
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
`,st=i.p`
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
`,lt=i.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,pt=i.svg`
  width: 24px;
  height: 24px;
`,ht=i.p`
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
`,ct=()=>{var A,$,j,v,C,n,y,T,_,x,m,P,W,N,q,D,R,p,s,c;const r=E(g=>g.auth.user)||{},a=E(g=>g.diary.items)||0,o=O();l.useEffect(()=>{o(U()),o(J())},[o]);const d=[{userData:r},{diaryData:a}],w=(((j=($=(A=d[1])==null?void 0:A.diaryData)==null?void 0:$.statistic)==null?void 0:j.sportTime)??0)/60,b=(C=(v=d[0])==null?void 0:v.userData)==null?void 0:C.dailyExerciseTime;let f=w-b;const z=((T=(y=(n=d[1])==null?void 0:n.diaryData)==null?void 0:y.statistic)==null?void 0:T.calories)||0,k=((x=(_=d[0])==null?void 0:_.userData)==null?void 0:x.dailyCalorie)-z;return[{icon:`${h}#calorie-intake`,title:"Daily calorie intake",count:((P=(m=d[0])==null?void 0:m.userData)==null?void 0:P.dailyCalorie)??0,countType:"cal",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${h}#physical-activity`,title:"Daily physical activity",count:((N=(W=d[0])==null?void 0:W.userData)==null?void 0:N.dailyExerciseTime)??0,countType:"time",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${h}#calories-consumed`,title:"Сalories consumed",count:((R=(D=(q=d[1])==null?void 0:q.diaryData)==null?void 0:D.statistic)==null?void 0:R.calories)??0,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${h}#calories-burned`,title:"Сalories burned",count:((c=(s=(p=d[1])==null?void 0:p.diaryData)==null?void 0:s.statistic)==null?void 0:c.burnedCalories)??0,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${h}#calories-remaining`,title:"Calories remaining",count:k,countType:"cal",background:"default",textColor:"greyTextColor",border:k<0?"redBorder":"defaultBorder"},{icon:`${h}#sports-remaining`,title:"Sports remaining",count:f>0?`+${Math.round(f)}`:Math.abs(Math.round(f)),countType:"time",background:"default",textColor:"greyTextColor",border:f>0?"greenBorder":"defaultBorder"}]},xt=()=>{const r=ct();return t.jsxs(it,{children:[t.jsx(ot,{children:r.map((a,o)=>t.jsxs(rt,{className:`${a.background} ${a.border}`,children:[t.jsxs(nt,{children:[t.jsx(at,{children:t.jsx("use",{href:a.icon})}),t.jsx(dt,{className:a.textColor,children:a.title})]}),t.jsxs(st,{children:[a.count," ",a.countType==="time"?"min":""]})]},o))}),t.jsxs(lt,{children:[t.jsx(pt,{children:t.jsx("use",{href:`${h}#attention-icon`})}),t.jsx(ht,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},mt=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    @media (min-width: ${e.breakpoint.md}) {
        gap: 32px;
    }
`,gt=i.div`
    display: flex;
    justify-content: space-between;
`,wt=i.h2`
  margin-top: 61px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`,bt=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
`,ft=i.div`
    display: flex;
    align-items: start;
`,ut=Q`
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
  } `,yt=i.div`
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
`,kt=i.input`
  width: 97px;
  height: 20px;
  background-color: ${e.color.black};
  color: ${e.color.white};
  border: none;
  @media screen and (min-width: ${e.breakpoint.md}) {
    width: 129px;
    height: 32px;
  } `,V=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 19px;
  padding: 0;
  background-color: transparent;
  border: none;
`,L=i.svg`
  width: 6px;
  height: 10px;
  stroke: ${e.color.white};
  stroke-width: 1.5;
  stroke-opacity: 0.4;
  fill: ${e.color.white};
  fill-opacity: 0.2;
  cursor: pointer;

  &.active {
    stroke: ${r=>r.isActive?"":`${e.color.white}`};
    stroke-opacity: ${r=>r.isActive?"0.2":"1"};
    fill: ${r=>r.isActive?"":`${e.color.white}`};
    fill-opacity: ${r=>r.isActive?"0.2":"1"};
  } `,$t=i.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${e.color.white};
`,jt=i.div`
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
  } `,G=i.svg`
  width: 16px;
  height: 16px;
  fill: ${e.color.white};
  fill-opacity: 0.2;
  cursor: pointer;

  &.active {
    fill: ${r=>r.isActive?"":`${e.color.white}`};
    fill-opacity: ${r=>r.isActive?"0.2":"1"};
  } `,vt=i.svg`
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
  } `;const K=l.forwardRef((r,a)=>{const[o,d]=l.useState(Date.now()),[w,b]=l.useState(""),[f,z]=l.useState(""),[k,M]=l.useState("active"),A=l.useRef(null);l.useEffect(()=>{b(B(o,"MMMM yyyy"))},[o]);const $=()=>{z("active"),M("");const n=Z(o,1);d(n)},j=()=>{z(""),M("active");const n=ee(o,1);d(n)},v=n=>{d(n)},C=l.forwardRef(({value:n,onClick:y,onKeyDown:T},_)=>{const[x,m]=l.useState(""),[P,W]=l.useState("");l.useEffect(()=>{m(n),W(n)},[n]);const N=p=>{const s=p.target.value.replace(/\D/g,"");let c=s;if(s.length>2&&s.length<5?c=s.slice(0,2)+"/"+s.slice(2):s.length>=5&&(c=s.slice(0,2)+"/"+s.slice(2,4)+"/"+s.slice(4,8)),m(c),p.target.value.length===10){const[g,I,u]=c.split("/"),S=new Date(`${u}-${I}-${g}`);isNaN(S.getTime())||(d(S),v(S))}},q=()=>{(!D(x)||x.trim()==="")&&m(P),(!D(x)||x.trim()==="")&&m(B(o,"dd/MM/yyyy"))},D=p=>/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(p),R=p=>{if(p.key==="Enter"){p.preventDefault();const s=x.replace(/\//g,""),c=s.substring(0,2),g=s.substring(2,4),I=s.substring(4,8);let u;if(I.length<4){const S=new Date().getFullYear();u=new Date(`${S}-${g}-${c}`)}else u=new Date(`${I}-${g}-${c}`);if(!isNaN(u.getTime())){d(u),m(B(u,"dd/MM/yyyy"));return}m(B(o,"dd/MM/yyyy"))}};return t.jsxs(jt,{children:[t.jsx(kt,{type:"text",value:x,onChange:N,onBlur:q,onKeyDown:p=>{R(p),T(p)},ref:_}),t.jsx(vt,{onClick:y,children:t.jsx("use",{href:`${h}#calendar`})}),t.jsx(G,{className:f,onClick:$,children:t.jsx("use",{href:`${h}#arrow-left`})}),t.jsx(G,{className:k,onClick:j,children:t.jsx("use",{href:`${h}#arrow-right`})})]})});return C.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(X,{ref:n=>{A.current=n,a&&(a.current=n)},...r,selected:o,onChange:v,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:n=>n.substr(0,2),customInput:t.jsx(C,{value:B(o,"dd/MM/yyyy"),onChange:d,onKeyDown:n=>{n.key==="Enter"&&n.preventDefault()}}),renderCustomHeader:({decreaseMonth:n,increaseMonth:y})=>t.jsxs(yt,{children:[t.jsx(V,{type:"button",className:"react-datepicker__navigation--previous","aria-label":"Previous Month",onClick:n,children:t.jsx(L,{className:f,onClick:$,children:t.jsx("use",{href:`${h}#arrow-left`})})}),t.jsx($t,{className:"react-datepicker__current-month",children:w}),t.jsx(V,{type:"button",className:"react-datepicker__navigation--next","aria-label":"Next Month",onClick:y,children:t.jsx(L,{className:k,onClick:j,children:t.jsx("use",{href:`${h}#arrow-right`})})})]})}),t.jsx(ut,{})]})});K.displayName="StyledDatepicker";const Ct=K;function Bt(){return t.jsx("section",{children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row",children:t.jsxs(bt,{children:[t.jsxs(gt,{children:[t.jsx(wt,{children:"Diary"}),t.jsx(Ct,{})]}),t.jsxs(ft,{children:[t.jsxs(mt,{children:[t.jsx(tt,{}),t.jsx(ze,{})]}),t.jsx(xt,{})]})]})})})})}export{Bt as default};
