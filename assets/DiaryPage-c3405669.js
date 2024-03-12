import{s as i,t as e,N as F,d as j,u as T,j as t,v as J,w as l,a as p,y as Q,b as c,z as X,h as Z,A as m}from"./index-f7800596.js";import{f as C,i as U,s as ee,a as te,b as ie,c as oe}from"./index-d7ad6235.js";import{T as re}from"./TitlePage-7a75988d.js";const ne=o=>o.diary.selectedDate,ae=o=>o.diary.products,de=o=>o.diary.exercises,pe=i.div`
  min-height: 234px;
  max-height: 1000px;
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
`,he=i.div`
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
`,le=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 115px;
  }
`,se=i.p`
  width: 132px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 157px;
  }
`,xe=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 131px;
  }
`,ce=i.p`
  width: 84px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 106px;
  }
`,ge=i.p`
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
`,we=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,fe=i.thead`
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
  padding-right: 4px;

  &:first-child {
    margin-top: 22px;
  }

  @media (max-width: 375px) {
    width: 100%;
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
    padding-right: 0px;

    &:first-child {
      margin-top: 0;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 762px;
    width: 826px;
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
`,$e=i.td`
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
`,ke=i.td`
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
    width: 27%;
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
`,je=i.td`
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
    width: 27%;
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
`,ve=i.td`
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
    width: 27%;
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
`,Se=i.td`
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
`,ze=i.div`
  border: ${e.border.grey2};
  border-radius: 12px;
  padding: 16px 8px 16px 16px;
  background: ${e.color.greySeven};
  min-width: 335px;
  width: 335px;
  min-height: 335px;
  max-height: 1064px;
  overflow: hidden;

  @media (max-width: 375px) {
    min-width: 300px;
  }

  @media (min-width: ${e.breakpoint.md}) {
    max-width: 704px;
    min-height: 234px;
    max-height: 234px;
    width: 704px;
  }

  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 826px;
    width: 826px;
  }
`,_e=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 16px;
  }
`,Te=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.greyThird};
`,He=i(F)`
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
`,We=i.svg`
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
`,Be=()=>{const o=j(de),d=T();return t.jsxs(t.Fragment,{children:[(o==null?void 0:o.length)===0&&t.jsx(Ne,{children:"Not found exercises"}),(o==null?void 0:o.length)>0&&t.jsxs(t.Fragment,{children:[t.jsxs(he,{children:[t.jsx(le,{children:"Body Part"}),t.jsx(se,{children:"Equipment"}),t.jsx(xe,{children:"Name"}),t.jsx(ce,{children:"Target"}),t.jsx(ge,{children:"Burned Calories"}),t.jsx(me,{children:"Time"}),t.jsx("p",{children:" "})]}),t.jsx(pe,{children:t.jsxs(we,{children:[t.jsx(fe,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Body Part"}),t.jsx("th",{children:"Equipment"}),t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Target"}),t.jsx("th",{children:"Burned Calories"}),t.jsx("th",{children:"Time"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:o==null?void 0:o.map(r=>t.jsxs(be,{children:[t.jsx(ue,{children:r.exercise.bodyPart}),t.jsx(ye,{children:r.exercise.equipment}),t.jsx($e,{children:r.exercise.name}),t.jsx(ke,{children:r.exercise.target}),t.jsx(je,{children:r.calories}),t.jsx(ve,{children:r.time}),t.jsx(Se,{children:t.jsx(Ce,{onClick:()=>{d(J({id:r._id,calories:r.calories,time:r.time})),d(l())},children:t.jsx(De,{children:t.jsx("use",{href:`${p}#trash`})})})})]},r._id))})]})})]})]})},Me=()=>t.jsx(t.Fragment,{children:t.jsxs(ze,{children:[t.jsxs(_e,{children:[t.jsx(Te,{children:"Execrcises"}),t.jsxs(He,{to:"/exercises",children:["Add exercise",t.jsx(We,{children:t.jsx("use",{href:`${p}#icon-Icon`})})]})]}),t.jsx(Be,{})]})}),Ie=i.div`
  border: ${e.border.grey2};
  border-radius: 12px;
  padding: 16px 8px 16px 16px;
  background: ${e.color.greySeven};
  max-width: 335px;
  width: 335px;
  min-height: 335px;
  max-height: 824px;
  overflow: hidden;

   @media (max-width: 375px) {
    min-width: 300px;
  }

  @media (min-width: ${e.breakpoint.md}) {
    max-width: 704px;
    min-height: 234px;
    max-height: 234px;
    width: 704px;
  }

  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 826px;
    width: 826px;
  }
`,Re=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 16px;
  }
`,Pe=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.greyThird};
`,Ee=i(F)`
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
`,Ae=i.svg`
  width: 16px;
  height: 16px;
`,Fe=i.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.grey};
  text-align: center;

  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 65px;
  }
`,Oe=i.div`
  min-height: 234px;
  max-height: 760px;
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
`,qe=i.div`
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
`,Le=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 166px;
  }
`,Ge=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Ye=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Ke=i.p`
  width: 80px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Je=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,Qe=i.thead`
  display: none;
`,Xe=i.tr`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.white};
  margin-top: 66px;
  max-width: 297px;
  padding-right: 4px; 

  &:first-child {
    margin-top: 22px;
  }

  @media (max-width: 375px) {
    width: 100%;
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
    padding-right: 0px;

    &:first-child {
      margin-top: 0;
    }
  }
  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 762px;
    width: 826px;
  }
`,Ze=i.td`
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
`,Ue=i.td`
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
    width: 27%;
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
    width: 27%;
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
`,I=i.svg`
  width: 14px;
  height: 14px;
  margin-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    display: flex;
    width: 14px;
    height: 14px;
  }
`,R=i.td`
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
    width: 26%;
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
`,rt=i.svg`
  width: 20px;
  height: 20px;
  stroke: ${e.color.orangeSecond};
  transition-duration: 300ms;
  margin-left: 4px;

  &:hover {
    stroke: ${e.color.white};
    transition-duration: 300ms;
  }
`,nt=()=>{const o=j(ae),d=T(),r=j(a=>{var s;return(s=a.auth.user.bodyData)==null?void 0:s.blood})??"1";return t.jsxs(t.Fragment,{children:[(o==null?void 0:o.length)===0&&t.jsx(Fe,{children:"Not found products"}),(o==null?void 0:o.length)>0&&t.jsxs(t.Fragment,{children:[t.jsxs(qe,{children:[t.jsx(Ve,{children:"Title"}),t.jsx(Le,{children:"Category"}),t.jsx(Ge,{children:"Calories"}),t.jsx(Ye,{children:"Weight"}),t.jsx(Ke,{children:"Recommend"}),t.jsx("p",{children:" "})]}),t.jsx(Oe,{children:t.jsxs(Je,{children:[t.jsx(Qe,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Title"}),t.jsx("th",{children:"Category"}),t.jsx("th",{children:"Calories"}),t.jsx("th",{children:"Weight"}),t.jsx("th",{children:"Recommend"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:o==null?void 0:o.map(a=>{var s,w;return t.jsxs(Xe,{children:[t.jsx(Ze,{children:a.product.title}),t.jsx(Ue,{children:a.product.category}),t.jsx(et,{children:a.calories}),t.jsx(tt,{children:a.weight}),(w=(s=a==null?void 0:a.product)==null?void 0:s.groupBloodNotAllowed)!=null&&w[r.toString()]?t.jsxs(R,{children:[t.jsx(I,{children:t.jsx("use",{href:`${p}#circle`,fill:"#419B09"})}),"Yes"]}):t.jsxs(R,{children:[t.jsx(I,{children:t.jsx("use",{href:`${p}#circle`,fill:"#e9101d"})}),"No"]}),t.jsx(it,{children:t.jsx(ot,{onClick:()=>{d(Q({id:a._id,calories:a.calories})),d(l())},children:t.jsx(rt,{children:t.jsx("use",{href:`${p}#trash`})})})})]},a._id)})})]})})]})]})},at=()=>t.jsx(t.Fragment,{children:t.jsxs(Ie,{children:[t.jsxs(Re,{children:[t.jsx(Pe,{children:"Products"}),t.jsxs(Ee,{to:"/products",children:["Add product",t.jsx(Ae,{children:t.jsx("use",{href:`${p}#icon-Icon`})})]})]}),t.jsx(nt,{})]})}),dt=i.div`
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
`,ht=i.li`
  position: relative;

  padding: 14px;
  border-radius: 12px;

  max-width: 157px;
  width: 100%;
  height: 96px;

  &:nth-child(5) {
    /* border: 1px solid
      ${o=>o.count<0?`${e.color.red}`:`${e.border.grey2}`}; */
  }

  &:nth-child(6) {
    order: 6;
    /* border: 1px solid
      ${o=>o.count>0?`${e.color.green}`:`${e.border.grey2}`}; */
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
`,st=i.svg`
  width: 20px;
  height: 20px;
`,xt=i.p`
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
`,gt=i.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,mt=i.svg`
  width: 24px;
  height: 24px;
`,wt=i.p`
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
`,ft=()=>{var v,n,u;const o=j(S=>S.auth.user)||{},d=j(S=>S.diary.items)||{},r=T();c.useEffect(()=>{r(X()),r(l())},[r]);const a=((v=d==null?void 0:d.statistic)==null?void 0:v.calories)??0,s=(o==null?void 0:o.dailyCalorie)??0,w=s-a,H=(n=d==null?void 0:d.statistic)==null?void 0:n.burnedCalories,W=(((u=d==null?void 0:d.statistic)==null?void 0:u.sportTime)??0)/60,D=(o==null?void 0:o.dailyExerciseTime)??0,b=W-D;return[{icon:`${p}#calorie-intake`,title:"Daily calorie intake",count:s,countType:"cal",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${p}#physical-activity`,title:"Daily physical activity",count:D,countType:"time",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${p}#calories-consumed`,title:"Calories consumed",count:a,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${p}#calories-burned`,title:"Calories burned",count:H,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${p}#calories-remaining`,title:"Calories remaining",count:w,countType:"cal",background:"default",textColor:"greyTextColor",border:w<0?"redBorder":"defaultBorder"},{icon:`${p}#sports-remaining`,title:"Sports remaining",count:b>=1?`+${Math.round(b)}`:Math.abs(Math.round(b)),countType:"time",background:"default",textColor:"greyTextColor",border:b>=1?"greenBorder":"defaultBorder"}]},bt=()=>{const o=ft();return t.jsxs(dt,{children:[t.jsx(pt,{children:o.map((d,r)=>t.jsxs(ht,{className:`${d.background} ${d.border}`,children:[t.jsxs(lt,{children:[t.jsx(st,{children:t.jsx("use",{href:d.icon})}),t.jsx(xt,{className:d.textColor,children:d.title})]}),t.jsxs(ct,{children:[d.count," ",d.countType==="time"?"min":""]})]},r))}),t.jsxs(gt,{children:[t.jsx(mt,{children:t.jsx("use",{href:`${p}#attention-icon`})}),t.jsx(wt,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},ut=i.section`
  padding-top: 101px;
  padding-bottom: 44px;
  @media (min-width: ${e.breakpoint.md}) {
    padding-top: 156px;
  }
`,yt=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    @media (min-width: ${e.breakpoint.md}) {
        gap: 32px;
    }
`,$t=i.div`
    display: flex;
    justify-content: space-between;
`;i.h2`
  margin-top: 61px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`;const kt=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
`,jt=i.div`
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
`,vt=Z`
  .diaryHeadWrapper  .react-datepicker__wrapper {
    width: 183px;
    height: 20px;
  }

  .diaryHeadWrapper  .react-datepicker__input-container{
    width: 183px;
    margin-left: auto;
    position: relative;
  }
  
  
  @media screen and (min-width: ${e.breakpoint.md}) {
    .diaryHeadWrapper  .react-datepicker__wrapper {
      width: 239px;
      height: 32px;
  }
    .diaryHeadWrapper  .react-datepicker__input-container{
      width: 239px;
      height: 32px;
  }}

  .diaryHeadWrapper  .react-datepicker {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 8px;
    width: 215px;
    min-height: 236px;
    background-color: ${e.color.orangeSecond};
    padding: 14px;
  }

  .diaryHeadWrapper  .react-datepicker__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 187px;
    background-color: ${e.color.orangeSecond};
    border-bottom: none;
  }

  .diaryHeadWrapper  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 187px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
    border-bottom: none;
    padding-top: 14px;
  }

  .diaryHeadWrapper  .react-datepicker__current-month {
    height: 19px;
    white-space: nowrap;
    color: ${e.color.white};
  }

  .diaryHeadWrapper  .react-datepicker__day-name {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    text-align: center;
    color: rgba(239, 237, 232, 0.5);
  }

  .diaryHeadWrapper  .react-datepicker__navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${e.color.white};
  }

  .diaryHeadWrapper  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${e.color.white};
    margin-top: 6px;
  }

  .diaryHeadWrapper  .react-datepicker__day {
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

  .diaryHeadWrapper  .react-datepicker__day--selected,
  .diaryHeadWrapper  .react-datepicker__day--selected:hover,
  .diaryHeadWrapper  .react-datepicker__day:hover,
  .diaryHeadWrapper  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: ${e.color.black};
  }


  .diaryHeadWrapper  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }

  .diaryHeadWrapper  .react-datepicker__triangle {
    visibility: hidden;
  }

  .diaryHeadWrapper  .react-datepicker__month {
    width: 187px;
    min-height: 161px;
    margin: 0;
  }

  .diaryHeadWrapper  .react-datepicker__aria-live {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .diaryHeadWrapper  .react-datepicker__month-container{
    display: flex;
    flex-direction: column;
    width: 187px;
    min-height: 161px;
    margin: 0;
  }

  .diaryHeadWrapper  .react-datepicker__day--outside-month{
    color: rgba(239, 237, 232, 0.2);
    opacity: 1;
  }

 .diaryHeadWrapper  .react-datepicker-wrapper .react-datepicker__input-container {
  display: inline-flex; 
  position: relative; 
}

.diaryHeadWrapper  .react-datepicker__tab-loop {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9998; 
}

.diaryHeadWrapper  .react-datepicker-popper {
  z-index: 9999; 
}
  `,St=i.div`
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
  } `,P=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 19px;
  padding: 0;
  background-color: transparent;
  border: none;
`,E=i.svg`
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
`,zt=i.div`
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
  } `,A=i.svg`
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
  } `;const O=c.forwardRef((o,d)=>{const r=T(),a=j(ne),[s,w]=c.useState(""),H=c.useRef(null);c.useEffect(()=>{r(l(a)),w(C(a,"MMMM yyyy"))},[r,a]);const B=()=>{const n=ee(a,1);r(m(n.toISOString())),r(l(n))},W=()=>{const n=te(a,1);r(m(n.toISOString())),r(l(n))},D=()=>{const n=ie(a,1);r(m(n.toISOString())),r(l(n))},b=()=>{const n=oe(a,1);r(m(n.toISOString())),r(l(n))},N=n=>{r(m(n.toISOString())),r(l(n))},v=c.forwardRef(({value:n,onClick:u,onKeyDown:S},q)=>{const[y,$]=c.useState(""),[V,L]=c.useState("");c.useEffect(()=>{$(n),L(n)},[n]);const G=x=>{const h=x.target.value.replace(/\D/g,"");let f=h;if(h.length>2&&h.length<5?f=h.slice(0,2)+"/"+h.slice(2):h.length>=5&&(f=h.slice(0,2)+"/"+h.slice(2,4)+"/"+h.slice(4,8)),$(f),x.target.value.length===10){const[z,_,g]=f.split("/"),k=new Date(`${g}-${_}-${z}`);isNaN(k.getTime())||(r(m(k.toISOString())),r(l(k)),N(k))}},Y=()=>{(!M(y)||y.trim()==="")&&$(V),(!M(y)||y.trim()==="")&&$(C(a,"dd/MM/yyyy"))},M=x=>/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(x),K=x=>{if(x.key==="Enter"){x.preventDefault();const h=y.replace(/\//g,""),f=h.substring(0,2),z=h.substring(2,4),_=h.substring(4,8);let g;if(_.length<4){const k=new Date().getFullYear();g=new Date(`${k}-${z}-${f}`)}else g=new Date(`${_}-${z}-${f}`);if(!isNaN(g.getTime())){r(m(g.toISOString())),r(l(g)),$(C(g,"dd/MM/yyyy"));return}$(C(a,"dd/MM/yyyy"))}};return t.jsxs(zt,{children:[t.jsx(Ct,{type:"text",value:y,onChange:G,onBlur:Y,onKeyDown:x=>{K(x),S(x)},ref:q}),t.jsx(_t,{onClick:u,children:t.jsx("use",{href:`${p}#calendar`})}),t.jsx(A,{onClick:W,children:t.jsx("use",{href:`${p}#arrow-left`})}),t.jsx(A,{onClick:b,children:t.jsx("use",{href:`${p}#arrow-right`})})]})});return v.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(U,{ref:n=>{H.current=n,d&&(d.current=n)},...o,selected:a,onChange:N,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:n=>n.substr(0,2),customInput:t.jsx(v,{value:C(a,"dd/MM/yyyy"),onChange:()=>r(m),onKeyDown:n=>{n.key==="Enter"&&n.preventDefault()}}),renderCustomHeader:({decreaseMonth:n,increaseMonth:u})=>t.jsxs(St,{children:[t.jsx(P,{type:"button",className:"react-datepicker__navigation--previous","aria-label":"Previous Month",onClick:n,children:t.jsx(E,{onClick:B,children:t.jsx("use",{href:`${p}#arrow-left`})})}),t.jsx(Dt,{className:"react-datepicker__current-month",children:s}),t.jsx(P,{type:"button",className:"react-datepicker__navigation--next","aria-label":"Next Month",onClick:u,children:t.jsx(E,{onClick:D,children:t.jsx("use",{href:`${p}#arrow-right`})})})]})}),t.jsx(vt,{})]})});O.displayName="StyledDatepicker";const Tt=O;function Bt(){const o={};return t.jsx(ut,{children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row",children:t.jsxs(kt,{children:[t.jsxs($t,{className:"diaryHeadWrapper",children:[t.jsx(re,{children:"Diary"}),t.jsx(Tt,{})]}),t.jsxs(jt,{children:[t.jsxs(yt,{children:[t.jsx(at,{productList:o}),t.jsx(Me,{})]}),t.jsx(bt,{})]})]})})})})}export{Bt as default};
