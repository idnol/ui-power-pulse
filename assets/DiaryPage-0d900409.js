import{s as i,t as e,N as O,d as f,u as _,j as t,x as Q,y as s,a as p,z as U,e as X,b as m,A as Z,i as ee,B as w}from"./index-879106ab.js";import{f as C,i as te,s as ie,b as oe,a as re,c as ne}from"./index-0e382de8.js";import{T as ae}from"./TitlePage-197c8590.js";const B=o=>o.diary.selectedDate,de=o=>o.diary.products,pe=o=>o.diary.exercises,he=i.div`
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
`,le=i.div`
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
`,se=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 115px;
  }
`,xe=i.p`
  width: 132px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 157px;
  }
`,ce=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 131px;
  }
`,me=i.p`
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
`,we=i.p`
  width: 72px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 82px;
  }
`,fe=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,be=i.thead`
  display: none;
`,ue=i.tr`
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
`,ke=i.td`
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
`,je=i.td`
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
`,ve=i.td`
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
`,Se=i.td`
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
`,Ce=i.td`
  width: 20px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 30px;
  }
`,De=i.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,ze=i.svg`
  width: 20px;
  height: 20px;
  stroke: ${e.color.orangeSecond};
  transition-duration: 300ms;
  margin-left: 4px;

  &:hover {
    stroke: ${e.color.white};
    transition-duration: 300ms;
  }
`,_e=i.div`
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
`,Te=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 16px;
  }
`,He=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.greyThird};
`,We=i(O)`
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
`,Ne=i.svg`
  width: 16px;
  height: 16px;
`,Be=i.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.grey};
  text-align: center;

  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 65px;
  }
`,Me=()=>{const o=f(pe),d=f(B),n=_();return t.jsxs(t.Fragment,{children:[(o==null?void 0:o.length)===0&&t.jsx(Be,{children:"Not found exercises"}),(o==null?void 0:o.length)>0&&t.jsxs(t.Fragment,{children:[t.jsxs(le,{children:[t.jsx(se,{children:"Body Part"}),t.jsx(xe,{children:"Equipment"}),t.jsx(ce,{children:"Name"}),t.jsx(me,{children:"Target"}),t.jsx(ge,{children:"Burned Calories"}),t.jsx(we,{children:"Time (sec)"}),t.jsx("p",{children:" "})]}),t.jsx(he,{children:t.jsxs(fe,{children:[t.jsx(be,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Body Part"}),t.jsx("th",{children:"Equipment"}),t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Target"}),t.jsx("th",{children:"Burned Calories"}),t.jsx("th",{children:"Time"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:o==null?void 0:o.map(a=>t.jsxs(ue,{children:[t.jsx(ye,{children:a.exercise.bodyPart}),t.jsx($e,{children:a.exercise.equipment}),t.jsx(ke,{children:a.exercise.name}),t.jsx(je,{children:a.exercise.target}),t.jsx(ve,{children:a.calories}),t.jsx(Se,{children:a.time}),t.jsx(Ce,{children:t.jsx(De,{onClick:()=>{n(Q({id:a._id,calories:a.calories,time:a.time,date:d})).then(()=>n(s(d)))},children:t.jsx(ze,{children:t.jsx("use",{href:`${p}#trash`})})})})]},a._id))})]})})]})]})},Ie=()=>t.jsx(t.Fragment,{children:t.jsxs(_e,{children:[t.jsxs(Te,{children:[t.jsx(He,{children:"Execrcises"}),t.jsxs(We,{to:"/exercises",children:["Add exercise",t.jsx(Ne,{children:t.jsx("use",{href:`${p}#icon-Icon`})})]})]}),t.jsx(Me,{})]})}),Re=i.div`
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
`,Ee=i.div`
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
`,Ae=i(O)`
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
`,Fe=i.svg`
  width: 16px;
  height: 16px;
`,Oe=i.p`
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
`,Ve=i.div`
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
`,Le=i.p`
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
`,Je=i.p`
  width: 80px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Qe=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,Ue=i.thead`
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
`,et=i.td`
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
`,tt=i.td`
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
`,it=i.td`
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
`,R=i.svg`
  width: 14px;
  height: 14px;
  margin-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    display: flex;
    width: 14px;
    height: 14px;
  }
`,E=i.td`
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
`,ot=i.td`
  width: 20px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 30px;
  }
`,rt=i.button`
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
`,at=()=>{const o=f(de),d=f(B),n=_(),a=f(h=>{var x;return(x=h.auth.user.bodyData)==null?void 0:x.blood})??"1";return t.jsxs(t.Fragment,{children:[(o==null?void 0:o.length)===0&&t.jsx(Oe,{children:"Not found products"}),(o==null?void 0:o.length)>0&&t.jsxs(t.Fragment,{children:[t.jsxs(Ve,{children:[t.jsx(Le,{children:"Title"}),t.jsx(Ge,{children:"Category"}),t.jsx(Ye,{children:"Calories"}),t.jsx(Ke,{children:"Weight"}),t.jsx(Je,{children:"Recommend"}),t.jsx("p",{children:" "})]}),t.jsx(qe,{children:t.jsxs(Qe,{children:[t.jsx(Ue,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Title"}),t.jsx("th",{children:"Category"}),t.jsx("th",{children:"Calories"}),t.jsx("th",{children:"Weight"}),t.jsx("th",{children:"Recommend"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:o==null?void 0:o.map(h=>{var x,u;return t.jsxs(Xe,{children:[t.jsx(Ze,{children:h.product.title}),t.jsx(et,{children:h.product.category}),t.jsx(tt,{children:h.calories}),t.jsx(it,{children:h.weight}),(u=(x=h==null?void 0:h.product)==null?void 0:x.groupBloodNotAllowed)!=null&&u[a.toString()]?t.jsxs(E,{children:[t.jsx(R,{children:t.jsx("use",{href:`${p}#circle`,fill:"#419B09"})}),"Yes"]}):t.jsxs(E,{children:[t.jsx(R,{children:t.jsx("use",{href:`${p}#circle`,fill:"#e9101d"})}),"No"]}),t.jsx(ot,{children:t.jsx(rt,{onClick:()=>{n(U({id:h._id,calories:h.calories,date:d})).then(()=>n(s(d)))},children:t.jsx(nt,{children:t.jsx("use",{href:`${p}#trash`})})})})]},h._id)})})]})})]})]})},dt=()=>t.jsx(t.Fragment,{children:t.jsxs(Re,{children:[t.jsxs(Ee,{children:[t.jsx(Pe,{children:"Products"}),t.jsxs(Ae,{to:"/products",children:["Add product",t.jsx(Fe,{children:t.jsx("use",{href:`${p}#icon-Icon`})})]})]}),t.jsx(at,{})]})}),pt=i.div`
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
`,ht=i.ul`
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
`,st=i.div`
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
`,ft=i.p`
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
`,bt=()=>{var S,r,$;const o=f(N=>N.diary.items)||{},d=f(X),n=_();m.useEffect(()=>{n(Z()),n(s())},[n]);const a=((S=o==null?void 0:o.statistic)==null?void 0:S.calories)??0,x=((d==null?void 0:d.dailyCalorie)??0)-a,u=((r=o==null?void 0:o.statistic)==null?void 0:r.burnedCalories)??0,T=((($=o==null?void 0:o.statistic)==null?void 0:$.sportTime)??0)/60,H=(d==null?void 0:d.dailyExerciseTime)??0,y=T-H;return[{icon:`${p}#calorie-intake`,title:"Daily calorie intake",count:Math.floor(d.dailyCalorie),countType:"cal",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${p}#physical-activity`,title:"Daily physical activity",count:d.dailyExerciseTime,countType:"time",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${p}#calories-consumed`,title:"Calories consumed",count:a,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${p}#calories-burned`,title:"Calories burned",count:u,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${p}#calories-remaining`,title:"Calories remaining",count:x,countType:"cal",background:"default",textColor:"greyTextColor",border:x<0?"redBorder":"defaultBorder"},{icon:`${p}#sports-remaining`,title:"Sports remaining",count:y>=1?`+${Math.round(y)}`:Math.abs(Math.round(y)),countType:"time",background:"default",textColor:"greyTextColor",border:y>=1?"greenBorder":"defaultBorder"}]},ut=()=>{const o=bt();return t.jsxs(pt,{children:[t.jsx(ht,{children:o.map((d,n)=>t.jsxs(lt,{className:`${d.background} ${d.border}`,children:[t.jsxs(st,{children:[t.jsx(xt,{children:t.jsx("use",{href:d.icon})}),t.jsx(ct,{className:d.textColor,children:d.title})]}),t.jsxs(mt,{children:[d.count," ",d.countType==="time"?"min":""]})]},n))}),t.jsxs(gt,{children:[t.jsx(wt,{children:t.jsx("use",{href:`${p}#attention-icon`})}),t.jsx(ft,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},yt=i.section`
  padding-top: 101px;
  padding-bottom: 44px;
  @media (min-width: ${e.breakpoint.md}) {
    padding-top: 156px;
  }
`,$t=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    @media (min-width: ${e.breakpoint.md}) {
        gap: 32px;
    }
`,kt=i.div`
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
`;const jt=i.div`
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
`,St=ee`
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
  `,Ct=i.div`
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
`,Dt=i.input`
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
`,A=i.svg`
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
`,_t=i.div`
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
  } `,F=i.svg`
  width: 16px;
  height: 16px;
  fill: ${e.color.white};
  stroke: ${e.color.white};
  cursor: pointer;

    &:hover, &:focus {
    stroke: ${e.color.orangeSecond};
    fill: ${e.color.orangeSecond} ;
  }
  `,Tt=i.svg`
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
  } `;const q=m.forwardRef((o,d)=>{const n=_(),a=f(B),[h,x]=m.useState(""),u=m.useRef(null);m.useEffect(()=>{n(s(a)),x(C(a,"MMMM yyyy"))},[n,a]);const M=()=>{const r=ie(a,1);n(w(r.toISOString())),n(s(r))},T=()=>{const r=oe(a,1);n(w(r.toISOString())),n(s(r))},H=()=>{const r=re(a,1);n(w(r.toISOString())),n(s(r))},y=()=>{const r=ne(a,1);n(w(r.toISOString())),n(s(r))},W=r=>{n(w(r.toISOString())),n(s(r))},S=m.forwardRef(({value:r,onClick:$,onKeyDown:N},V)=>{const[k,j]=m.useState(""),[L,G]=m.useState("");m.useEffect(()=>{j(r),G(r)},[r]);const Y=c=>{const l=c.target.value.replace(/\D/g,"");let b=l;if(l.length>2&&l.length<5?b=l.slice(0,2)+"/"+l.slice(2):l.length>=5&&(b=l.slice(0,2)+"/"+l.slice(2,4)+"/"+l.slice(4,8)),j(b),c.target.value.length===10){const[D,z,g]=b.split("/"),v=new Date(`${g}-${z}-${D}`);isNaN(v.getTime())||(n(w(v.toISOString())),n(s(v)),W(v))}},K=()=>{(!I(k)||k.trim()==="")&&j(L),(!I(k)||k.trim()==="")&&j(C(a,"dd/MM/yyyy"))},I=c=>/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(c),J=c=>{if(c.key==="Enter"){c.preventDefault();const l=k.replace(/\//g,""),b=l.substring(0,2),D=l.substring(2,4),z=l.substring(4,8);let g;if(z.length<4){const v=new Date().getFullYear();g=new Date(`${v}-${D}-${b}`)}else g=new Date(`${z}-${D}-${b}`);if(!isNaN(g.getTime())){n(w(g.toISOString())),n(s(g)),j(C(g,"dd/MM/yyyy"));return}j(C(a,"dd/MM/yyyy"))}};return t.jsxs(_t,{children:[t.jsx(Dt,{type:"text",value:k,onChange:Y,onBlur:K,onKeyDown:c=>{J(c),N(c)},ref:V}),t.jsx(Tt,{onClick:$,children:t.jsx("use",{href:`${p}#calendar`})}),t.jsx(F,{onClick:T,children:t.jsx("use",{href:`${p}#arrow-left`})}),t.jsx(F,{onClick:y,children:t.jsx("use",{href:`${p}#arrow-right`})})]})});return S.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(te,{ref:r=>{u.current=r,d&&(d.current=r)},...o,selected:a,onChange:W,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:r=>r.substr(0,2),customInput:t.jsx(S,{value:C(a,"dd/MM/yyyy"),onChange:()=>n(w),onKeyDown:r=>{r.key==="Enter"&&r.preventDefault()}}),renderCustomHeader:({decreaseMonth:r,increaseMonth:$})=>t.jsxs(Ct,{children:[t.jsx(P,{type:"button",className:"react-datepicker__navigation--previous","aria-label":"Previous Month",onClick:r,children:t.jsx(A,{onClick:M,children:t.jsx("use",{href:`${p}#arrow-left`})})}),t.jsx(zt,{className:"react-datepicker__current-month",children:h}),t.jsx(P,{type:"button",className:"react-datepicker__navigation--next","aria-label":"Next Month",onClick:$,children:t.jsx(A,{onClick:H,children:t.jsx("use",{href:`${p}#arrow-right`})})})]})}),t.jsx(St,{})]})});q.displayName="StyledDatepicker";const Ht=q;function Mt(){const o={};return t.jsx(yt,{children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row",children:t.jsxs(jt,{children:[t.jsxs(kt,{className:"diaryHeadWrapper",children:[t.jsx(ae,{children:"Diary"}),t.jsx(Ht,{})]}),t.jsxs(vt,{children:[t.jsxs($t,{children:[t.jsx(dt,{productList:o}),t.jsx(Ie,{})]}),t.jsx(ut,{})]})]})})})})}export{Mt as default};
