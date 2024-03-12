import{s as i,t as e,N as K,d as D,u as R,j as t,v as J,w as x,a as h,y as Q,b as f,z as X,h as Z,A as u}from"./index-b9937fb7.js";import{f as C,i as ee,s as te,a as ie,b as re,c as oe}from"./index-50bad77f.js";import{T as ne}from"./TitlePage-7d3a7f06.js";const ae=r=>r.diary.selectedDate,de=r=>r.diary.products,pe=r=>r.diary.exercises,he=i.div`
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
`,ge=i.p`
  width: 84px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 106px;
  }
`,me=i.p`
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
`,De=i.td`
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
`,ze=i.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Ce=i.svg`
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
`,We=i(K)`
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
`,Me=()=>{const r=D(pe),d=R();return t.jsxs(t.Fragment,{children:[(r==null?void 0:r.length)===0&&t.jsx(Be,{children:"Not found exercises"}),(r==null?void 0:r.length)>0&&t.jsxs(t.Fragment,{children:[t.jsxs(le,{children:[t.jsx(se,{children:"Body Part"}),t.jsx(xe,{children:"Equipment"}),t.jsx(ce,{children:"Name"}),t.jsx(ge,{children:"Target"}),t.jsx(me,{children:"Burned Calories"}),t.jsx(we,{children:"Time"}),t.jsx("p",{children:" "})]}),t.jsx(he,{children:t.jsxs(fe,{children:[t.jsx(be,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Body Part"}),t.jsx("th",{children:"Equipment"}),t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Target"}),t.jsx("th",{children:"Burned Calories"}),t.jsx("th",{children:"Time"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:r==null?void 0:r.map(o=>t.jsxs(ue,{children:[t.jsx(ye,{children:o.exercise.bodyPart}),t.jsx($e,{children:o.exercise.equipment}),t.jsx(ke,{children:o.exercise.name}),t.jsx(je,{children:o.exercise.target}),t.jsx(ve,{children:o.calories}),t.jsx(De,{children:o.time}),t.jsx(Se,{children:t.jsx(ze,{onClick:()=>{d(J({id:o._id,calories:o.calories,time:o.time})),d(x())},children:t.jsx(Ce,{children:t.jsx("use",{href:`${h}#trash`})})})})]},o._id))})]})})]})]})},Ie=()=>t.jsx(t.Fragment,{children:t.jsxs(_e,{children:[t.jsxs(Te,{children:[t.jsx(He,{children:"Execrcises"}),t.jsxs(We,{to:"/exercises",children:["Add exercise",t.jsx(Ne,{children:t.jsx("use",{href:`${h}#icon-Icon`})})]})]}),t.jsx(Me,{})]})}),Re=i.div`
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
`,Pe=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 16px;
  }
`,Ee=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.greyThird};
`,Ae=i(K)`
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
`,Ue=i.p`
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
`,q=i.svg`
  width: 14px;
  height: 14px;
  margin-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    display: flex;
    width: 14px;
    height: 14px;
  }
`,V=i.td`
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
`,rt=i.td`
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
`,at=()=>{const r=D(de),d=R(),o=D(n=>{var b;return(b=n.auth.user.bodyData)==null?void 0:b.blood})??"1";return t.jsxs(t.Fragment,{children:[(r==null?void 0:r.length)===0&&t.jsx(Oe,{children:"Not found products"}),(r==null?void 0:r.length)>0&&t.jsxs(t.Fragment,{children:[t.jsxs(Ve,{children:[t.jsx(Le,{children:"Title"}),t.jsx(Ge,{children:"Category"}),t.jsx(Ye,{children:"Calories"}),t.jsx(Ke,{children:"Weight"}),t.jsx(Ue,{children:"Recommend"}),t.jsx("p",{children:" "})]}),t.jsx(qe,{children:t.jsxs(Je,{children:[t.jsx(Qe,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Title"}),t.jsx("th",{children:"Category"}),t.jsx("th",{children:"Calories"}),t.jsx("th",{children:"Weight"}),t.jsx("th",{children:"Recommend"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:r==null?void 0:r.map(n=>{var b,k;return t.jsxs(Xe,{children:[t.jsx(Ze,{children:n.product.title}),t.jsx(et,{children:n.product.category}),t.jsx(tt,{children:n.calories}),t.jsx(it,{children:n.weight}),(k=(b=n==null?void 0:n.product)==null?void 0:b.groupBloodNotAllowed)!=null&&k[o.toString()]?t.jsxs(V,{children:[t.jsx(q,{children:t.jsx("use",{href:`${h}#circle`,fill:"#419B09"})}),"Yes"]}):t.jsxs(V,{children:[t.jsx(q,{children:t.jsx("use",{href:`${h}#circle`,fill:"#e9101d"})}),"No"]}),t.jsx(rt,{children:t.jsx(ot,{onClick:()=>{d(Q({id:n._id,calories:n.calories})),d(x())},children:t.jsx(nt,{children:t.jsx("use",{href:"/img/sprait.svg#trash"})})})})]},n._id)})})]})})]})]})},dt=()=>t.jsx(t.Fragment,{children:t.jsxs(Re,{children:[t.jsxs(Pe,{children:[t.jsx(Ee,{children:"Products"}),t.jsxs(Ae,{to:"/products",children:["Add product",t.jsx(Fe,{children:t.jsx("use",{href:`${h}#icon-Icon`})})]})]}),t.jsx(at,{})]})}),pt=i.div`
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
`,gt=i.p`
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
`,mt=i.div`
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
`,bt=()=>{var S,a,v,T,H,g,m,W,N,B,M,z,I,l,p,c,y,$,s,w;const r=D(F=>F.auth.user)||{},d=D(F=>F.diary.items)||0,o=R();f.useEffect(()=>{o(X()),o(x())},[o]);const n=[{userData:r},{diaryData:d}],k=(((v=(a=(S=n[1])==null?void 0:S.diaryData)==null?void 0:a.statistic)==null?void 0:v.sportTime)??0)/60,P=((H=(T=n[0])==null?void 0:T.userData)==null?void 0:H.dailyExerciseTime)??0,j=k-P,E=((W=(m=(g=n[1])==null?void 0:g.diaryData)==null?void 0:m.statistic)==null?void 0:W.calories)??0,_=(((B=(N=n[0])==null?void 0:N.userData)==null?void 0:B.dailyCalorie)??0)-E;return[{icon:`${h}#calorie-intake`,title:"Daily calorie intake",count:((z=(M=n[0])==null?void 0:M.userData)==null?void 0:z.dailyCalorie)??0,countType:"cal",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${h}#physical-activity`,title:"Daily physical activity",count:((l=(I=n[0])==null?void 0:I.userData)==null?void 0:l.dailyExerciseTime)??0,countType:"time",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${h}#calories-consumed`,title:"Сalories consumed",count:((y=(c=(p=n[1])==null?void 0:p.diaryData)==null?void 0:c.statistic)==null?void 0:y.calories)??0,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${h}#calories-burned`,title:"Сalories burned",count:((w=(s=($=n[1])==null?void 0:$.diaryData)==null?void 0:s.statistic)==null?void 0:w.burnedCalories)??0,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${h}#calories-remaining`,title:"Calories remaining",count:_??0,countType:"cal",background:"default",textColor:"greyTextColor",border:_<0?"redBorder":"defaultBorder"},{icon:`${h}#sports-remaining`,title:"Sports remaining",count:j>0?`+${Math.round(j)}`:Math.abs(Math.round(j)),countType:"time",background:"default",textColor:"greyTextColor",border:j>0?"greenBorder":"defaultBorder"}]},ut=()=>{const r=bt();return t.jsxs(pt,{children:[t.jsx(ht,{children:r.map((d,o)=>t.jsxs(lt,{className:`${d.background} ${d.border}`,children:[t.jsxs(st,{children:[t.jsx(xt,{children:t.jsx("use",{href:d.icon})}),t.jsx(ct,{className:d.textColor,children:d.title})]}),t.jsxs(gt,{children:[d.count," ",d.countType==="time"?"min":""]})]},o))}),t.jsxs(mt,{children:[t.jsx(wt,{children:t.jsx("use",{href:`${h}#attention-icon`})}),t.jsx(ft,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},yt=i.section`
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
`,Dt=Z`
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
`,zt=i.input`
  width: 97px;
  height: 20px;
  background-color: ${e.color.black};
  color: ${e.color.white};
  border: none;

  @media screen and (min-width: ${e.breakpoint.md}) {
    width: 129px;
    height: 32px;
  } `,L=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 19px;
  padding: 0;
  background-color: transparent;
  border: none;
`,G=i.svg`
  width: 6px;
  height: 10px;
  stroke: ${e.color.white};
  stroke-width: 1.5;
  fill: ${e.color.white};
  stroke: ${e.color.white};
  cursor: pointer;
  `,Ct=i.span`
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
  } `,Y=i.svg`
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
  } `;const U=f.forwardRef((r,d)=>{const o=R(),n=D(ae),[b,k]=f.useState(""),P=f.useRef(null);f.useEffect(()=>{o(x(n)),k(C(n,"MMMM yyyy"))},[o,n]);const j=()=>{const a=te(n,1);o(u(a.toISOString())),o(x(a))},E=()=>{const a=ie(n,1);o(u(a.toISOString())),o(x(a))},O=()=>{const a=re(n,1);o(u(a.toISOString())),o(x(a))},_=()=>{const a=oe(n,1);o(u(a.toISOString())),o(x(a))},A=a=>{o(u(a.toISOString())),o(x(a))},S=f.forwardRef(({value:a,onClick:v,onKeyDown:T},H)=>{const[g,m]=f.useState(""),[W,N]=f.useState("");f.useEffect(()=>{m(a),N(a)},[a]);const B=l=>{const p=l.target.value.replace(/\D/g,"");let c=p;if(p.length>2&&p.length<5?c=p.slice(0,2)+"/"+p.slice(2):p.length>=5&&(c=p.slice(0,2)+"/"+p.slice(2,4)+"/"+p.slice(4,8)),m(c),l.target.value.length===10){const[y,$,s]=c.split("/"),w=new Date(`${s}-${$}-${y}`);isNaN(w.getTime())||(o(u(w.toISOString())),o(x(w)),A(w))}},M=()=>{(!z(g)||g.trim()==="")&&m(W),(!z(g)||g.trim()==="")&&m(C(n,"dd/MM/yyyy"))},z=l=>/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(l),I=l=>{if(l.key==="Enter"){l.preventDefault();const p=g.replace(/\//g,""),c=p.substring(0,2),y=p.substring(2,4),$=p.substring(4,8);let s;if($.length<4){const w=new Date().getFullYear();s=new Date(`${w}-${y}-${c}`)}else s=new Date(`${$}-${y}-${c}`);if(!isNaN(s.getTime())){o(u(s.toISOString())),o(x(s)),m(C(s,"dd/MM/yyyy"));return}m(C(n,"dd/MM/yyyy"))}};return t.jsxs(_t,{children:[t.jsx(zt,{type:"text",value:g,onChange:B,onBlur:M,onKeyDown:l=>{I(l),T(l)},ref:H}),t.jsx(Tt,{onClick:v,children:t.jsx("use",{href:`${h}#calendar`})}),t.jsx(Y,{onClick:E,children:t.jsx("use",{href:`${h}#arrow-left`})}),t.jsx(Y,{onClick:_,children:t.jsx("use",{href:`${h}#arrow-right`})})]})});return S.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(ee,{ref:a=>{P.current=a,d&&(d.current=a)},...r,selected:n,onChange:A,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:a=>a.substr(0,2),customInput:t.jsx(S,{value:C(n,"dd/MM/yyyy"),onChange:()=>o(u),onKeyDown:a=>{a.key==="Enter"&&a.preventDefault()}}),renderCustomHeader:({decreaseMonth:a,increaseMonth:v})=>t.jsxs(St,{children:[t.jsx(L,{type:"button",className:"react-datepicker__navigation--previous","aria-label":"Previous Month",onClick:a,children:t.jsx(G,{onClick:j,children:t.jsx("use",{href:`${h}#arrow-left`})})}),t.jsx(Ct,{className:"react-datepicker__current-month",children:b}),t.jsx(L,{type:"button",className:"react-datepicker__navigation--next","aria-label":"Next Month",onClick:v,children:t.jsx(G,{onClick:O,children:t.jsx("use",{href:`${h}#arrow-right`})})})]})}),t.jsx(Dt,{})]})});U.displayName="StyledDatepicker";const Ht=U;function Mt(){const r={};return t.jsx(yt,{children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row",children:t.jsxs(jt,{children:[t.jsxs(kt,{className:"diaryHeadWrapper",children:[t.jsx(ne,{children:"Diary"}),t.jsx(Ht,{})]}),t.jsxs(vt,{children:[t.jsxs($t,{children:[t.jsx(dt,{productList:r}),t.jsx(Ie,{})]}),t.jsx(ut,{})]})]})})})})}export{Mt as default};
