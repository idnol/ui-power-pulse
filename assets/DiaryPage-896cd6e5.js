import{s as i,t as e,d as w,u as F,j as t,v as ee,N as J,w as te,i as ie,a as l,x as oe,y as ne,b as h,g as re,z as b}from"./index-0691a1d7.js";import{f as C,i as ae,s as de,a as se,b as pe,c as le}from"./index-c7ac66ce.js";const he=n=>n.diary.selectedDate,Q=n=>n.diary.products,X=n=>n.diary.exercises,xe=n=>n.diary.isLoading,ce=i.div`
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
`,me=i.div`
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
`,ge=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 115px;
  }
`,we=i.p`
  width: 132px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 157px;
  }
`,fe=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 131px;
  }
`,be=i.p`
  width: 84px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 106px;
  }
`,ue=i.p`
  width: 78px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 91px;
  }
`,ye=i.p`
  width: 72px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 82px;
  }
`,$e=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,ke=i.thead`
  display: none;
`,je=i.tr`
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
`,ve=i.td`
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
`,De=i.td`
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
`,Se=i.td`
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
`,Ce=i.td`
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
`,ze=i.td`
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
`,_e=i.td`
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
`,Te=i.td`
  width: 20px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 30px;
  }
`,Ie=i.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Ne=i.svg`
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
`,Be=()=>{const n=w(X),d=F();return t.jsxs(t.Fragment,{children:[t.jsxs(me,{children:[t.jsx(ge,{children:"Body Part"}),t.jsx(we,{children:"Equipment"}),t.jsx(fe,{children:"Name"}),t.jsx(be,{children:"Target"}),t.jsx(ue,{children:"Burned Calories"}),t.jsx(ye,{children:"Time"}),t.jsx("p",{children:" "})]}),t.jsx(ce,{children:t.jsxs($e,{children:[t.jsx(ke,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Body Part"}),t.jsx("th",{children:"Equipment"}),t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Target"}),t.jsx("th",{children:"Burned Calories"}),t.jsx("th",{children:"Time"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:n.map(r=>t.jsxs(je,{children:[t.jsx(ve,{children:r.exercise.bodyPart}),t.jsx(De,{children:r.exercise.equipment}),t.jsx(Se,{children:r.exercise.name}),t.jsx(Ce,{children:r.exercise.target}),t.jsx(ze,{children:r.exercise.burnedCalories}),t.jsx(_e,{children:r.exercise.time}),t.jsx(Te,{children:t.jsx(Ie,{onClick:()=>d(ee({id:r._id,calories:r.calories,time:r.time})),children:t.jsx(Ne,{children:t.jsx("use",{href:"/img/sprait.svg#trash"})})})})]},r._id))})]})})]})},Me=i.div`
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
`,Ae=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.greyThird};
`,Ee=i(J)`
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
`,Pe=i.svg`
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
`,We=()=>{const n=w(X);return t.jsx(t.Fragment,{children:t.jsxs(Me,{children:[t.jsxs(Re,{children:[t.jsx(Ae,{children:"Execrcises"}),t.jsxs(Ee,{to:"/exercises",children:["Add exercise",t.jsx(Pe,{children:t.jsx("use",{href:"/img/sprait.svg#icon-Icon"})})]})]}),n.length?t.jsx(Be,{}):t.jsx(He,{children:"Not found products"})]})})},Le=i.div`
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
    width: 704px;
  }

  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 826px;
    width: 826px;
  }
`,Fe=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 16px;
  }
`,Oe=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.greyThird};
`,qe=i(J)`
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
`,Ve=i.svg`
  width: 16px;
  height: 16px;
`,Ge=i.p`
  margin-top: 125px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.grey};
  text-align: center;

  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 65px;
  }
`,Ye=i.div`
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
`,Ke=i.div`
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
`,Ue=i.p`
  width: 204px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 212px;
  }
`,Je=i.p`
  width: 128px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 166px;
  }
`,Qe=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Xe=i.p`
  width: 90px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,Ze=i.p`
  width: 80px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 105px;
  }
`,et=i.table`
  max-width: 335px;

  @media (min-width: ${e.breakpoint.xl}) {
    width: 826px;
    padding-left: 16px;
  }
`,tt=i.thead`
  display: none;
`,it=i.tr`
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
`,ot=i.td`
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
`,nt=i.td`
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
`,rt=i.td`
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
`,at=i.td`
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
`,dt=i.td`
  width: 20px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 30px;
  }
`,st=i.button`
  display: inline;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,pt=i.svg`
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
`,lt=()=>{const n=w(Q),d=F(),r=w(o=>{var $;return($=o.auth.user.bodyData)==null?void 0:$.blood})??"1";return t.jsxs(t.Fragment,{children:[t.jsxs(Ke,{children:[t.jsx(Ue,{children:"Title"}),t.jsx(Je,{children:"Category"}),t.jsx(Qe,{children:"Calories"}),t.jsx(Xe,{children:"Weight"}),t.jsx(Ze,{children:"Recommend"}),t.jsx("p",{children:" "})]}),t.jsx(Ye,{children:t.jsxs(et,{children:[t.jsx(tt,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Title"}),t.jsx("th",{children:"Category"}),t.jsx("th",{children:"Calories"}),t.jsx("th",{children:"Weight"}),t.jsx("th",{children:"Recommend"}),t.jsx("th",{children:"Delete"})]})}),t.jsx("tbody",{children:n.map(o=>t.jsxs(it,{children:[t.jsx(ot,{children:o.product.title}),t.jsx(nt,{children:o.product.category}),t.jsx(rt,{children:o.calories}),t.jsx(at,{children:o.weight}),o.product.groupBloodNotAllowed[r]?t.jsxs(G,{children:[t.jsx(V,{children:t.jsx("use",{href:"/img/sprait.svg#circle",fill:"#419B09"})}),"Yes"]}):t.jsxs(G,{children:[t.jsx(V,{children:t.jsx("use",{href:"/img/sprait.svg#circle",fill:"#e9101d"})}),"No"]}),t.jsx(dt,{children:t.jsx(st,{onClick:()=>d(te({id:o._id,calories:o.calories})),children:t.jsx(pt,{children:t.jsx("use",{href:"/img/sprait.svg#trash"})})})})]},o._id))})]})})]})},ht=()=>{const n=w(Q),d=w(xe);return t.jsx(t.Fragment,{children:t.jsxs(Le,{children:[t.jsxs(Fe,{children:[t.jsx(Oe,{children:"Products"}),t.jsxs(qe,{to:"/products",children:["Add product",t.jsx(Ve,{children:t.jsx("use",{href:"/img/sprait.svg#icon-Icon"})})]})]}),d?t.jsx(ie,{}):n.length?t.jsx(lt,{}):t.jsx(Ge,{children:"Not found products"})]})})},xt=i.div`
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
`,ct=i.ul`
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
`,mt=i.li`
  position: relative;

  padding: 14px;
  border-radius: 12px;

  max-width: 157px;
  width: 100%;
  height: 96px;

  &:nth-child(5) {
    /* border: 1px solid
      ${n=>n.count<0?`${e.color.red}`:`${e.border.grey2}`}; */
  }

  &:nth-child(6) {
    order: 6;
    /* border: 1px solid
      ${n=>n.count>0?`${e.color.green}`:`${e.border.grey2}`}; */
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
`,gt=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,wt=i.svg`
  width: 20px;
  height: 20px;
`,ft=i.p`
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
`,bt=i.p`
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
`,ut=i.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,yt=i.svg`
  width: 24px;
  height: 24px;
`,$t=i.p`
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
`,kt=()=>{var I,N,B,j,v,a,y,M,R,m,g,A,E,P,H,D,W,p,s,x;const n=w(f=>f.auth.user)||{},d=w(f=>f.diary.items)||0,r=F();l.useEffect(()=>{r(oe()),r(ne())},[r]);const o=[{userData:n},{diaryData:d}],O=(((B=(N=(I=o[1])==null?void 0:I.diaryData)==null?void 0:N.statistic)==null?void 0:B.sportTime)??0)/60,z=((v=(j=o[0])==null?void 0:j.userData)==null?void 0:v.dailyExerciseTime)??0,c=O-z,_=((M=(y=(a=o[1])==null?void 0:a.diaryData)==null?void 0:y.statistic)==null?void 0:M.calories)??0,T=(((m=(R=o[0])==null?void 0:R.userData)==null?void 0:m.dailyCalorie)??0)-_;return[{icon:`${h}#calorie-intake`,title:"Daily calorie intake",count:((A=(g=o[0])==null?void 0:g.userData)==null?void 0:A.dailyCalorie)??0,countType:"cal",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${h}#physical-activity`,title:"Daily physical activity",count:((P=(E=o[0])==null?void 0:E.userData)==null?void 0:P.dailyExerciseTime)??0,countType:"time",background:"accent",textColor:"whiteTextColor",border:"accent"},{icon:`${h}#calories-consumed`,title:"Сalories consumed",count:((W=(D=(H=o[1])==null?void 0:H.diaryData)==null?void 0:D.statistic)==null?void 0:W.calories)??0,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${h}#calories-burned`,title:"Сalories burned",count:((x=(s=(p=o[1])==null?void 0:p.diaryData)==null?void 0:s.statistic)==null?void 0:x.burnedCalories)??0,countType:"cal",background:"default",textColor:"greyTextColor",border:"defaultBorder"},{icon:`${h}#calories-remaining`,title:"Calories remaining",count:T??0,countType:"cal",background:"default",textColor:"greyTextColor",border:T<0?"redBorder":"defaultBorder"},{icon:`${h}#sports-remaining`,title:"Sports remaining",count:c>0?`+${Math.round(c)}`:Math.abs(Math.round(c)),countType:"time",background:"default",textColor:"greyTextColor",border:c>0?"greenBorder":"defaultBorder"}]},jt=()=>{const n=kt();return t.jsxs(xt,{children:[t.jsx(ct,{children:n.map((d,r)=>t.jsxs(mt,{className:`${d.background} ${d.border}`,children:[t.jsxs(gt,{children:[t.jsx(wt,{children:t.jsx("use",{href:d.icon})}),t.jsx(ft,{className:d.textColor,children:d.title})]}),t.jsxs(bt,{children:[d.count," ",d.countType==="time"?"min":""]})]},r))}),t.jsxs(ut,{children:[t.jsx(yt,{children:t.jsx("use",{href:`${h}#attention-icon`})}),t.jsx($t,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},vt=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    @media (min-width: ${e.breakpoint.md}) {
        gap: 32px;
    }
`,Dt=i.div`
    display: flex;
    justify-content: space-between;
`,St=i.h2`
  margin-top: 61px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`,Ct=i.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
`,zt=i.div`
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
`,_t=re`
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
  `,Tt=i.div`
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
`,It=i.input`
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
  `,Nt=i.span`
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
  } `,U=i.svg`
  width: 16px;
  height: 16px;
  fill: ${e.color.white};
  stroke: ${e.color.white};
  cursor: pointer;

    &:hover, &:focus {
    stroke: ${e.color.orangeSecond};
    fill: ${e.color.orangeSecond} ;
  }
  `,Mt=i.svg`
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
  } `;const Z=l.forwardRef((n,d)=>{const r=F(),o=w(he),[$,O]=l.useState(""),[z,c]=l.useState(""),[_,k]=l.useState("active"),T=l.useRef(null);l.useEffect(()=>{O(C(o,"MMMM yyyy"))},[o]),l.useEffect(()=>{console.log(o)},[o]);const q=()=>{c("active"),k("");const a=de(o,1);r(b(a.toISOString()))},I=()=>{c("active"),k("");const a=se(o,1);r(b(a.toISOString()))},N=()=>{c(""),k("active");const a=pe(o,1);r(b(a.toISOString()))},B=()=>{c(""),k("active");const a=le(o,1);r(b(a.toISOString()))},j=a=>{r(b(a.toISOString()))},v=l.forwardRef(({value:a,onClick:y,onKeyDown:M},R)=>{const[m,g]=l.useState(""),[A,E]=l.useState("");l.useEffect(()=>{g(a),E(a)},[a]);const P=p=>{const s=p.target.value.replace(/\D/g,"");let x=s;if(s.length>2&&s.length<5?x=s.slice(0,2)+"/"+s.slice(2):s.length>=5&&(x=s.slice(0,2)+"/"+s.slice(2,4)+"/"+s.slice(4,8)),g(x),p.target.value.length===10){const[f,L,u]=x.split("/"),S=new Date(`${u}-${L}-${f}`);isNaN(S.getTime())||(r(b(S.toISOString())),j(S))}},H=()=>{(!D(m)||m.trim()==="")&&g(A),(!D(m)||m.trim()==="")&&g(C(o,"dd/MM/yyyy"))},D=p=>/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(p),W=p=>{if(p.key==="Enter"){p.preventDefault();const s=m.replace(/\//g,""),x=s.substring(0,2),f=s.substring(2,4),L=s.substring(4,8);let u;if(L.length<4){const S=new Date().getFullYear();u=new Date(`${S}-${f}-${x}`)}else u=new Date(`${L}-${f}-${x}`);if(!isNaN(u.getTime())){r(b(u.toISOString())),g(C(u,"dd/MM/yyyy"));return}g(C(o,"dd/MM/yyyy"))}};return t.jsxs(Bt,{children:[t.jsx(It,{type:"text",value:m,onChange:P,onBlur:H,onKeyDown:p=>{W(p),M(p)},ref:R}),t.jsx(Mt,{onClick:y,children:t.jsx("use",{href:`${h}#calendar`})}),t.jsx(U,{className:z,onClick:I,children:t.jsx("use",{href:`${h}#arrow-left`})}),t.jsx(U,{className:_,onClick:B,children:t.jsx("use",{href:`${h}#arrow-right`})})]})});return v.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(ae,{ref:a=>{T.current=a,d&&(d.current=a)},...n,selected:o,onChange:j,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:a=>a.substr(0,2),customInput:t.jsx(v,{value:C(o,"dd/MM/yyyy"),onChange:()=>r(b),onKeyDown:a=>{a.key==="Enter"&&a.preventDefault()}}),renderCustomHeader:({decreaseMonth:a,increaseMonth:y})=>t.jsxs(Tt,{children:[t.jsx(Y,{type:"button",className:"react-datepicker__navigation--previous","aria-label":"Previous Month",onClick:a,children:t.jsx(K,{className:z,onClick:q,children:t.jsx("use",{href:`${h}#arrow-left`})})}),t.jsx(Nt,{className:"react-datepicker__current-month",children:$}),t.jsx(Y,{type:"button",className:"react-datepicker__navigation--next","aria-label":"Next Month",onClick:y,children:t.jsx(K,{className:_,onClick:N,children:t.jsx("use",{href:`${h}#arrow-right`})})})]})}),t.jsx(_t,{})]})});Z.displayName="StyledDatepicker";const Rt=Z;function Pt(){const n={};return t.jsx("section",{children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row",children:t.jsxs(Ct,{children:[t.jsxs(Dt,{children:[t.jsx(St,{children:"Diary"}),t.jsx(Rt,{})]}),t.jsxs(zt,{children:[t.jsxs(vt,{children:[t.jsx(ht,{productList:n}),t.jsx(We,{})]}),t.jsx(jt,{})]})]})})})})}export{Pt as default};
