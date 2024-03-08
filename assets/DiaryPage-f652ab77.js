import{s as i,t as e,j as t,N as R,a as s,f as K,b as f}from"./index-6ec9fa09.js";import{f as u,i as O,s as U,a as J}from"./index-4365d4c2.js";const Q=i.div`
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
`,X=i.div`
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
`,Z=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 115px;
  }
`,ee=i.p`
  width: 132px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 157px;
  }
`,te=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 131px;
  }
`,ie=i.p`
  width: 84px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 106px;
  }
`,oe=i.p`
  width: 78px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 91px;
  }
`,ne=i.p`
  width: 72px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 82px;
  }
`,re=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,ae=i.thead`
  display: none;
`,de=i.tr`
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
`,se=i.td`
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
`,le=i.td`
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
`,pe=i.td`
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
`,he=i.td`
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
`,ce=i.td`
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
`,xe=i.td`
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
`,me=i.td`
  width: 20px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 30px;
  }
`,ge=i.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,we=i.svg`
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
`,be=({exercises:n,onDeleteExercise:a})=>t.jsxs(t.Fragment,{children:[t.jsxs(X,{children:[t.jsx(Z,{children:"Body Part"}),t.jsx(ee,{children:"Equipment"}),t.jsx(te,{children:"Name"}),t.jsx(ie,{children:"Target"}),t.jsx(oe,{children:"Burned Calories"}),t.jsx(ne,{children:"Time"}),t.jsx("p",{children:" "})]}),t.jsx(Q,{children:t.jsxs(re,{children:[t.jsx(ae,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Body Part"}),t.jsx("th",{children:"Equipment"}),t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Target"}),t.jsx("th",{children:"Burned Calories"}),t.jsx("th",{children:"Time"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:n.map(o=>t.jsxs(de,{children:[t.jsx(se,{children:o.bodyPart}),t.jsx(le,{children:o.equipment}),t.jsx(pe,{children:o.name}),t.jsx(he,{children:o.target}),t.jsx(ce,{children:o.burnedCalories}),t.jsx(xe,{children:o.time}),t.jsx(me,{children:t.jsx(ge,{onClick:()=>a(o.id),children:t.jsx(we,{children:t.jsx("use",{href:"/img/sprait.svg#trash"})})})})]},o.id))})]})})]}),fe=i.div`
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
`,ue=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 16px;
  }
`,ye=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.greyThird};
`,ke=i(R)`
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
`,$e=i.svg`
  stroke: ${e.color.orange};
  width: 16px;
  height: 16px;
`,je=i.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.grey};
  text-align: center;

  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 65px;
  }
`,ve=[{id:"1",bodyPart:"Upper arms",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"2",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"3",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"4",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"5",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"6",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"7",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"8",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"9",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"10",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"11",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"12",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"13",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"14",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"15",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"16",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"17",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"18",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"19",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"20",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"21",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"22",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"23",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"24",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"25",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60},{id:"26",bodyPart:"Waist",equipment:"Body weight",name:"45° side bend",target:"Abs",burnedCalories:323,time:60}],Ce=()=>{const[n,a]=s.useState(ve),o=l=>{a(g=>g.filter(w=>w.id!==l))};return t.jsx(t.Fragment,{children:t.jsxs(fe,{children:[t.jsxs(ue,{children:[t.jsx(ye,{children:"Execrcises"}),t.jsxs(ke,{children:["Add product",t.jsx($e,{children:t.jsx("use",{href:"/img/sprait.svg#icon-Icon"})})]})]}),n.length?t.jsx(be,{exercises:n,onDeleteExercise:o}):t.jsx(je,{children:"Not found products"})]})})},Se=i.div`
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
`,De=i.div`
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
`,Ae=i(R)`
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
`,Be=i.svg`
  stroke: ${e.color.orange};
  width: 16px;
  height: 16px;
`,_e=i.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.grey};
  text-align: center;

  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 65px;
  }
`,Pe=i.div`
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
`,Te=i.div`
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
`,We=i.p`
  width: 204px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 212px;
  }
`,Ne=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 166px;
  }
`,qe=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Re=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Ie=i.p`
  width: 80px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Me=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,He=i.thead`
  display: none;
`,Ee=i.tr`
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
`,Fe=i.td`
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
`,Ve=i.td`
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
`,Le=i.td`
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
`,Ge=i.td`
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
`,P=i.svg`
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
`,T=i.td`
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
`,Ye=i.td`
  width: 20px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 30px;
  }
`,Ke=i.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Oe=i.svg`
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
`,Ue=({products:n,onDeleteProduct:a})=>t.jsxs(t.Fragment,{children:[t.jsxs(Te,{children:[t.jsx(We,{children:"Title"}),t.jsx(Ne,{children:"Category"}),t.jsx(qe,{children:"Calories"}),t.jsx(Re,{children:"Weight"}),t.jsx(Ie,{children:"Recommend"}),t.jsx("p",{children:" "})]}),t.jsx(Pe,{children:t.jsxs(Me,{children:[t.jsx(He,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Title"}),t.jsx("th",{children:"Category"}),t.jsx("th",{children:"Calories"}),t.jsx("th",{children:"Weight"}),t.jsx("th",{children:"Recommend"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:n.map(o=>t.jsxs(Ee,{children:[t.jsx(Fe,{children:o.title}),t.jsx(Ve,{children:o.category}),t.jsx(Le,{children:o.calories}),t.jsx(Ge,{children:o.weight}),o.recommended?t.jsxs(T,{children:[t.jsx(P,{children:t.jsx("use",{href:"/img/sprait.svg#circle",fill:"#419B09"})}),"Yes"]}):t.jsxs(T,{children:[t.jsx(P,{children:t.jsx("use",{href:"/img/sprait.svg#circle",fill:"#e9101d"})}),"No"]}),t.jsx(Ye,{children:t.jsx(Ke,{onClick:()=>a(o.id),children:t.jsx(Oe,{children:t.jsx("use",{href:"/img/sprait.svg#trash"})})})})]},o.id))})]})})]}),Je=[{id:"1",title:"Rice semolina Garnets glute",category:"Cereals",calories:"340",weight:"100",recommended:!0},{id:"2",title:"Venison stew Special",category:"Meat",calories:"81",weight:"100",recommended:!1},{id:"3",title:"Bread Hercules grain",category:"Flour",calories:"289",weight:"100",recommended:!0},{id:"4",title:"Banana juice",category:"Soft drinks",calories:"48",weight:"100",recommended:!1},{id:"5",title:"Spikachki",category:"Sausage",calories:"337",weight:"100",recommended:!1},{id:"6",title:"Coffee drink",category:"Soft Drinks",calories:"337",weight:"100",recommended:!1},{id:"7",title:"Red onion",category:"Vegetables and herbs",calories:"42",weight:"100",recommended:!1},{id:"8",title:"Homemade noodles",category:"Flour",calories:"332",weight:"100",recommended:!0},{id:"9",title:"Rice semolina Garnets glute",category:"Cereals",calories:"340",weight:"100",recommended:!0},{id:"10",title:"Venison stew Special",category:"Meat",calories:"81",weight:"100",recommended:!1},{id:"11",title:"Bread Hercules grain",category:"Flour",calories:"289",weight:"100",recommended:!0},{id:"12",title:"Banana juice",category:"Soft drinks",calories:"48",weight:"100",recommended:!1},{id:"13",title:"Spikachki",category:"Sausage",calories:"337",weight:"100",recommended:!1},{id:"14",title:"Coffee drink",category:"Soft Drinks",calories:"337",weight:"100",recommended:!1},{id:"15",title:"Red onion",category:"Vegetables and herbs",calories:"42",weight:"100",recommended:!1},{id:"16",title:"Homemade noodles",category:"Flour",calories:"332",weight:"100",recommended:!0},{id:"17",title:"Red onion",category:"Vegetables and herbs",calories:"42",weight:"100",recommended:!1},{id:"18",title:"Homemade noodles",category:"Flour",calories:"332",weight:"100",recommended:!0},{id:"19",title:"Rice semolina Garnets glute",category:"Cereals",calories:"340",weight:"100",recommended:!0},{id:"20",title:"Venison stew Special",category:"Meat",calories:"81",weight:"100",recommended:!1},{id:"21",title:"Bread Hercules grain",category:"Flour",calories:"289",weight:"100",recommended:!0},{id:"22",title:"Banana juice",category:"Soft drinks",calories:"48",weight:"100",recommended:!1},{id:"23",title:"Spikachki",category:"Sausage",calories:"337",weight:"100",recommended:!1},{id:"24",title:"Coffee drink",category:"Soft Drinks",calories:"337",weight:"100",recommended:!1},{id:"25",title:"Red onion",category:"Vegetables and herbs",calories:"42",weight:"100",recommended:!1},{id:"26",title:"Homemade noodles",category:"Flour",calories:"332",weight:"100",recommended:!0}],Qe=()=>{const[n,a]=s.useState(Je),o=l=>{a(g=>g.filter(w=>w.id!==l))};return t.jsx(t.Fragment,{children:t.jsxs(Se,{children:[t.jsxs(De,{children:[t.jsx(ze,{children:"Products"}),t.jsxs(Ae,{to:"/products",children:["Add product",t.jsx(Be,{children:t.jsx("use",{href:"/img/sprait.svg#icon-Icon"})})]})]}),n.length?t.jsx(Ue,{products:n,onDeleteProduct:o}):t.jsx(_e,{children:"Not found products"})]})})},Xe=i.div`
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
`,Ze=i.ul`
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
`,et=i.li`
  position: relative;

  padding: 14px;
  border-radius: 12px;

  max-width: 157px;
  width: 100%;
  height: 96px;

  &:nth-child(5) {
    border: 1px solid
      ${n=>n.count<0?`${e.color.red}`:`${e.border.grey2}`};
  }

  &:nth-child(6) {
    order: 6;
    border: 1px solid
      ${n=>n.count>0?`${e.color.green}`:`${e.border.grey2}`};
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
`,tt=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,it=i.svg`
  width: 20px;
  height: 20px;
`,ot=i.p`
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
`,nt=i.p`
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
`,rt=i.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,at=i.svg`
  width: 24px;
  height: 24px;
`,dt=i.p`
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
`,st=[{icon:"../../../../public/img/sprait.svg#calorie-intake",title:"Daily calorie intake",count:2200,countType:"cal",background:"accent",textColor:"whiteTextColor"},{icon:"../../../../public/img/sprait.svg#physical-activity",title:"Daily physical activity",count:110,countType:"time",background:"accent",textColor:"whiteTextColor"},{icon:"../../../../public/img/sprait.svg#calories-consumed",title:"Сalories consumed",count:707,countType:"cal",background:"default",textColor:"greyTextColor"},{icon:"../../../../public/img/sprait.svg#calories-burned",title:"Сalories burned",count:855,countType:"cal",background:"default",textColor:"greyTextColor"},{icon:"../../../../public/img/sprait.svg#calories-remaining",title:"Calories remaining",count:-100,countType:"cal",background:"default",textColor:"greyTextColor"},{icon:"../../../../public/img/sprait.svg#sports-remaining",title:"Sports remaining",count:85,countType:"time",background:"default",textColor:"greyTextColor"}],lt=()=>{const n=st;return t.jsxs(Xe,{children:[t.jsx(Ze,{children:n.map((a,o)=>t.jsxs(et,{className:a.background,count:a.count,children:[t.jsxs(tt,{children:[t.jsx(it,{children:t.jsx("use",{href:a.icon})}),t.jsx(ot,{className:a.textColor,children:a.title})]}),t.jsxs(nt,{children:[a.count," ",a.countType==="time"?"min":""]})]},o))}),t.jsxs(rt,{children:[t.jsx(at,{children:t.jsx("use",{href:"../../../../public/img/sprait.svg#attention-icon"})}),t.jsx(dt,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},pt=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    @media (min-width: ${e.breakpoint.md}) {
        gap: 32px;
    }
`,ht=i.div`
    display: flex;
    justify-content: space-between;
`,ct=i.h2`
  margin-top: 61px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`,xt=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
`,mt=i.div`
    display: flex;
    align-items: start;
`,gt=K`
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
  } `,wt=i.div`
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
`,bt=i.input`
  width: 97px;
  height: 20px;
  background-color: ${e.color.black};
  color: ${e.color.white};
  border: none;
  @media screen and (min-width: ${e.breakpoint.md}) {
    width: 129px;
    height: 32px;
  } `,W=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 19px;
  padding: 0;
  background-color: transparent;
  border: none;
`,N=i.svg`
  width: 6px;
  height: 10px;
  stroke: ${e.color.white};
  stroke-width: 1.5;
  stroke-opacity: 0.4;
  fill: ${e.color.white};
  fill-opacity: 0.2;
  cursor: pointer;

  &.active {
    stroke: ${n=>n.isActive?"":`${e.color.white}`};
    stroke-opacity: ${n=>n.isActive?"0.2":"1"};
    fill: ${n=>n.isActive?"":`${e.color.white}`};
    fill-opacity: ${n=>n.isActive?"0.2":"1"};
  } `,ft=i.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${e.color.white};
`,ut=i.div`
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
  } `,q=i.svg`
  width: 16px;
  height: 16px;
  fill: ${e.color.white};
  fill-opacity: 0.2;
  cursor: pointer;

  &.active {
    fill: ${n=>n.isActive?"":`${e.color.white}`};
    fill-opacity: ${n=>n.isActive?"0.2":"1"};
  } `,yt=i.svg`
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
  } `;const I=s.forwardRef((n,a)=>{const[o,l]=s.useState(Date.now()),[g,w]=s.useState(""),[j,v]=s.useState(""),[C,S]=s.useState("active"),M=s.useRef(null);s.useEffect(()=>{w(u(o,"MMMM yyyy"))},[o]);const D=()=>{v("active"),S("");const r=U(o,1);l(r)},z=()=>{v(""),S("active");const r=J(o,1);l(r)},A=r=>{l(r)},B=s.forwardRef(({value:r,onClick:$,onKeyDown:H},E)=>{const[x,m]=s.useState(""),[F,V]=s.useState("");s.useEffect(()=>{m(r),V(r)},[r]);const L=p=>{const d=p.target.value.replace(/\D/g,"");let h=d;if(d.length>2&&d.length<5?h=d.slice(0,2)+"/"+d.slice(2):d.length>=5&&(h=d.slice(0,2)+"/"+d.slice(2,4)+"/"+d.slice(4,8)),m(h),p.target.value.length===10){const[y,k,c]=h.split("/"),b=new Date(`${c}-${k}-${y}`);isNaN(b.getTime())||(l(b),A(b))}},G=()=>{(!_(x)||x.trim()==="")&&m(F),(!_(x)||x.trim()==="")&&m(u(o,"dd/MM/yyyy"))},_=p=>/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(p),Y=p=>{if(p.key==="Enter"){p.preventDefault();const d=x.replace(/\//g,""),h=d.substring(0,2),y=d.substring(2,4),k=d.substring(4,8);let c;if(k.length<4){const b=new Date().getFullYear();c=new Date(`${b}-${y}-${h}`)}else c=new Date(`${k}-${y}-${h}`);if(!isNaN(c.getTime())){l(c),m(u(c,"dd/MM/yyyy"));return}m(u(o,"dd/MM/yyyy"))}};return t.jsxs(ut,{children:[t.jsx(bt,{type:"text",value:x,onChange:L,onBlur:G,onKeyDown:p=>{Y(p),H(p)},ref:E}),t.jsx(yt,{onClick:$,children:t.jsx("use",{href:`${f}#calendar`})}),t.jsx(q,{className:j,onClick:D,children:t.jsx("use",{href:`${f}#arrow-left`})}),t.jsx(q,{className:C,onClick:z,children:t.jsx("use",{href:`${f}#arrow-right`})})]})});return B.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(O,{ref:r=>{M.current=r,a&&(a.current=r)},...n,selected:o,onChange:A,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:r=>r.substr(0,2),customInput:t.jsx(B,{value:u(o,"dd/MM/yyyy"),onChange:l,onKeyDown:r=>{r.key==="Enter"&&r.preventDefault()}}),renderCustomHeader:({decreaseMonth:r,increaseMonth:$})=>t.jsxs(wt,{children:[t.jsx(W,{type:"button",className:"react-datepicker__navigation--previous","aria-label":"Previous Month",onClick:r,children:t.jsx(N,{className:j,onClick:D,children:t.jsx("use",{href:`${f}#arrow-left`})})}),t.jsx(ft,{className:"react-datepicker__current-month",children:g}),t.jsx(W,{type:"button",className:"react-datepicker__navigation--next","aria-label":"Next Month",onClick:$,children:t.jsx(N,{className:C,onClick:z,children:t.jsx("use",{href:`${f}#arrow-right`})})})]})}),t.jsx(gt,{})]})});I.displayName="StyledDatepicker";const kt=I;function vt(){return t.jsx("section",{children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row",children:t.jsxs(xt,{children:[t.jsxs(ht,{children:[t.jsx(ct,{children:"Diary"}),t.jsx(kt,{})]}),t.jsxs(mt,{children:[t.jsxs(pt,{children:[t.jsx(Qe,{}),t.jsx(Ce,{})]}),t.jsx(lt,{})]})]})})})})}export{vt as default};
