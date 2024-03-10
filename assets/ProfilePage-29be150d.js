import{s as a,t as i,j as e,b as g,u as j,d as k,e as F,a as u,f as _,B as l,g as z,h as S,Q as U,i as L,k as A,m as E,o as R}from"./index-fbada1ca.js";import{c as O,a as $,e as x,f as q,u as C,d as N,F as I,b as T}from"./formik.esm-91fecf0c.js";import{i as B}from"./index-eb9d40ee.js";import{W as M}from"./WelcomePage.styled-2b5f7033.js";const P=a.div`
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  gap: 28px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);


  @media screen and (min-width: ${i.breakpoint.md}) {
    padding: 14px;

  }
`,V=a.p`
font-weight: 400;
font-size: 12px;
line-height: 133%;
color: rgba(239, 237, 232, 0.8);


@media screen and (min-width: ${i.breakpoint.md}) {
  line-height: 150%;
}
`,Y=a.p`
font-size: 18px;
font-weight: 700;
line-height: 111%;
color: ${i.color.white};

@media screen and (min-width: $${i.breakpoint.md}) {
  font-size: 24px;
  line-height: 133%;
}
`,H=a.div`
display: flex;
align-items: center;
gap:8px;
`,D=({svg:n,text:t,number:d})=>e.jsxs(P,{children:[e.jsxs(H,{children:[e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${g}#${n}`})}),e.jsx(V,{children:t})]}),e.jsx(Y,{children:d})]}),J=a.div`
    width: 100%;
    margin-top: 32px;
    display: flex;
    gap: 14px;
    justify-content: center;
    @media screen and (max-width: ${i.breakpoint.sm}) {
      max-width: 100%;
    }
    @media screen and (min-width: ${i.breakpoint.md}) {
      gap: 16px;
    }
`,G=a.div`
    max-width: 439px;
    margin: 0 auto;
    @media screen and (min-width:${i.breakpoint.xl}){
      padding-left:64px;
      border-left:1px solid rgba(239, 237, 232, 0.2);
    }

`,Q=a.div`
    display: flex;
    justify-content:flex-end;
    padding-right: 32px;
    margin-top:32px;
`,X=a.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    @media screen and (min-width: ${i.breakpoint.md}) and (max-width:${i.breakpoint.xl}) {
        margin-top: 64px;
  }
    @media screen and (${i.breakpoint.xl}){
        margin-top: 0;
  }
`,K=a.form`
    position: absolute;
    bottom: -26px;
    right: 37%;


@media screen and (min-width:${i.breakpoint.md}) {
    bottom: -36px;
    right: 40%;

  }
`,Z=a.div`
    width: 90px;
    height: 90px;
    border-radius: 100px;
    border: 1px solid #e6533c;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width:${i.breakpoint.md}) {
        width: 150px;
        height: 150px;
  }
`;a.img`
    border-radius: 100px;
`;const ee=a.div`
    cursor: pointer;
`,te=a.svg`
    fill: rgba(239, 237, 232, 0.1);
    width: 40px;
    height: 41px;
    @media screen and (min-width:${i.breakpoint.md}) {
        width: 68px;
        height: 68px;
  }
`,ie=a.svg`
    width: 24px;
    height: 24px;
    position: relative;
    top: -13px;
    left: 0px;

  @media screen and (min-width:${i.breakpoint.md}) {
      width: 32px;
      height: 32px;
      top: -17.5px;
  }
`,ae=a.p`
    color: #efede8;
    margin-top:18px; 

  @media screen and (min-width: ${i.breakpoint.md}) {
      font-size: 24px;
      line-height: 28px;
  }
`,re=a.p`
    font-size: 14px;
    line-height: 18px;
    color: rgba(239, 237, 232, 0.5);
    margin-top: 4px;

    @media screen and (min-width: ${i.breakpoint.md}) {
        margin-top: 8px;
  }
`,ne=a.img`
    width: 90px;
    height:90px;
    border-radius:50%;
    @media screen and (min-width:${i.breakpoint.md}) {
        width: 150px;
        height:150px;
  }

`,oe=()=>{const n=j(),t=k(F),[d,c]=u.useState(null),s=d||t.bodyData&&t.bodyData.avatar||null,o=e.jsx(te,{children:e.jsx("use",{href:s||`${g}#icon-user`})}),r=async b=>{const p=b.target.files[0];if(p)try{const f=URL.createObjectURL(p);c(f),n(_(p)).then(y=>{_.fulfilled.match(y)?l.success("File uploaded successfully"):l.error("Error uploading file: Server response not successful")}).catch(y=>{l.error("Error uploading file:",y)}).finally(()=>{c(null)})}catch(f){l.error("Error creating URL for file:",f),c(null)}};return e.jsxs(X,{children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(Z,{children:s&&s!=="undefined"?e.jsx(ne,{src:s,alt:"User Avatar"}):o}),e.jsxs(K,{children:[e.jsx("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:r,accept:"image/*"}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(ee,{children:e.jsx(ie,{children:e.jsx("use",{href:`${g}#icon-check-mark`})})})})]})]}),e.jsx(ae,{children:t.name}),e.jsx(re,{children:"User"})]})},se=a.p`
    width:85%;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: rgba(239, 237, 232, 0.3);
    @media screen and (min-width: ${i.breakpoint.xl}) {
        font-size: 16px;
    }
`,de=a.div`
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    max-width:335px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    max-width:335px;
    @media screen and (min-width: ${i.breakpoint.md}) {
        max-width:439px;
    }
`,le=()=>e.jsxs(de,{children:[e.jsx("svg",{width:24,height:24,children:e.jsx("use",{href:`${g}#exclamation-mark`})}),e.jsx(se,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),ce=()=>e.jsxs(G,{children:[e.jsx(oe,{}),e.jsxs(J,{children:[e.jsx(D,{svg:"fork-knife",text:"Daily calorie intake",number:"0"}),e.jsx(D,{style:{flex:"1.1"},svg:"dumbbell",text:"Daily physical activity",number:"0 min"})]}),e.jsx(le,{}),e.jsx(Q,{children:e.jsx(z,{})})]}),pe=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],he=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],xe=[{id:"level-1",value:1,label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:2,label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:3,label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:4,label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:5,label:"Extremely active (very strenuous exercises/sports and physical work)"}],me=[{id:"body-info-1",name:"height",label:"Height"},{id:"body-info-2",name:"currentWeight",label:"Current Weight"},{id:"body-info-3",name:"desiredWeight",label:"Desired Weight"}],ge=O().shape({name:$().required(),height:x().min(150).required(),currentWeight:x().min(35).required(),desiredWeight:x().min(35).required(),birthday:q().min(new Date(new Date().getFullYear()-18,0,1)).required(),blood:x().oneOf([1,2,3,4]).required(),sex:$().oneOf(["male","female"]).required(),levelActivity:x().oneOf([1,2,3,4,5]).required()}),ue=n=>{l.error(n)},h=({name:n})=>{const[,t]=C(n);return u.useEffect(()=>{t.error&&t.touched&&ue(t.error)},[t.error,t.touched]),null};const be=a(N)`
    margin-top: 18px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width:theme.breakpoint.xl){
        margin-top: 0;
  }
`,fe=a.div`
    margin-top: 20px;
    display: flex;
    flex-direction:column;
    gap:14px;

@media screen and (min-width: ${i.breakpoint.md}) {
  flex-direction:row;
    margin-top: 40px;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
    }
    input {
        width: 335px;
    }
    @media screen and (min-width:theme.breakpoint.xl){
        margin: 0;
    }
`,ye=a.div`
    display:flex;
    flex-wrap:wrap;
    gap:14px;

    input {
        width: 160px;
    @media screen and (min-width: ${i.breakpoint.md}) and (max-width: ${i.breakpoint.xl}) {
        width: 165px;
  }
  }
`,we=a.div`
    display:flex;
    align-items:end;
    flex-wrap:wrap;
    gap:25px;
`,v=a(I)`
    outline: none;
    border: 1px solid rgba(239, 237, 232, 0.3);
    background: transparent;
    border-radius: 12px;
    padding: 14px;
    height: 46px;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: ${i.color.white};


    @media screen and (min-width: ${i.breakpoint.md}) and (max-width: ${i.breakpoint.xl}) {
        width: 341px;
    }

    &:disabled{
        color: ${i.color.greySecond};

    }
    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
`,m=a.label`
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: ${i.color.greyThird};
    margin-bottom: 5px;
    @media screen and (min-width:theme.breakpoint.xl){
        font-size: 14px;
    }
`,ve=a(I)`
    background: transparent;
    position: relative;
    appearance: none;
    min-width: 20px;
    min-height: 20px;
    border: 2px solid #636366; 
    border-radius: 50%;
    outline: none;

    &:checked {
      box-shadow: 0 0 0 4px black;
      border:1.5px solid ${i.color.orange};
    
      &::before {
        content: '';
        width: 10px;
        height: 10px;
        background-color: ${i.color.orange};
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      } 
  }

`,je=a.label`
    display: flex;
    align-items:center;
    gap:8px;

    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: var(--white);
    height: 36px;
    @media screen and (min-width:theme.breakpoint.xl){
        font-size: 16px;
    }
`,W=a.div`
    display: flex;
    gap:8px;
`,ke=a.label`
    display: flex;
    flex-direction:column;
    gap:10px;
`,_e=a.button`
    cursor: pointer;
    border: none;
    background-color: ${i.color.orange};
    border-radius: 12px;
    padding: 12px 40px;
    width: 115px;
    height: 42px;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    color: ${i.color.white};
    &:disabled{
        color: ${i.color.greySecond};
    }
`,w=({id:n,value:t,name:d,label:c,onChange:s,checked:o})=>e.jsxs(je,{children:[e.jsx(ve,{id:n,type:"radio",name:d,value:t,checked:o,onChange:s}),c]}),$e=({label:n,name:t})=>e.jsxs("div",{children:[e.jsx(m,{children:n}),e.jsx(v,{type:"number",name:t}),e.jsx(h,{name:t})]}),De=S`
 .react-datepicker__wrapper {
    position: relative;
    display: inline-block;
  }
  .react-datepicker {
    position: absolute;
    width: 215px;
    left: 50%; 
    transform: translateX(-50%); 
    top: 50%;
    transform: translate(-15%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding: 14px;
    background-color: #ef8964;
    font-family: 'Roboto', sans-serif;
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    margin-bottom: 8px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-datepicker__header {
    position: relative;
    background-color: #ef8964;    
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day
    react-datepicker__day--018.react-datepicker__day--selected
    react-datepicker__day--today {
    outline: none;
    border: none;
  }
  .react-datepicker__current-month {
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 14px;
  }
  .react-datepicker__day-name {
    margin: 0;
    color: rgba(239, 237, 232, 0.5);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .react-datepicker__day--disabled {
    opacity: 25%;
  }
  .react-datepicker__navigation {
    margin-top: 14px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    border-radius: 50%;
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    width: 24px;
    height: 24px;
  }
  .react-datepicker__month {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color: #efede8;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--outside-month {
    opacity: 50%;
  }
  .react-datepicker__triangle {
    display: none;
  }

`,We=a.svg`
  position: absolute;
  right: 14px;
  top: 14px;
`;a.div`
  position: absolute;
  left: -40%;
  top: 50%;
  transform: translate(0%, 0%);
  z-index: 999;
`;const Fe=a.input`
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: transparent;
  border-radius: 12px;
  padding: 14px 14px 14px 14px;
  height: 46px;

  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${i.color.white};
`,Ie="/ui-power-pulse/assets/sprait-112b8185.svg",ze=({number:n})=>e.jsxs(e.Fragment,{children:[e.jsx(We,{width:"18",height:"18",children:e.jsx("use",{href:`${Ie}#icon-calendar`})}),e.jsx(B,{showYearDropdown:!0,scrollableYearDropdown:!0,maxDate:new Date,value:n,customInput:e.jsx(Fe,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:t=>t.substring(0,1),showMonthDropdown:!0}),e.jsx(De,{})]}),Se=()=>{var s;const n=j(),t=k(F),d={name:t.name||"Name",email:t.email,height:t.bodyData&&t.bodyData.height||150,currentWeight:t.bodyData&&t.bodyData.currentWeight||35,desiredWeight:t.bodyData&&t.bodyData.desiredWeight||35,birthday:"2006-01-02",blood:t.bodyData.blood||1,sex:t.bodyData.sex||"male",levelActivity:parseInt((s=t.bodyData)==null?void 0:s.levelActivity,10)||1},c=async o=>{if(t.bodyData){if(JSON.stringify(o)===JSON.stringify(d)){l.error("Nothing to change");return}try{const{_id:r,...b}=t,p={_id:r,...o,blood:parseInt(o.blood,10)};console.log(p),n(L({_id:r,...b.bodyData,...p}))}catch(r){l.error("Error updating user data:",r)}}else l.warning("User bodyData is missing or not fully populated. Form not submitted.")};return e.jsx(T,{initialValues:d,validationSchema:ge,onSubmit:c,children:o=>e.jsxs(be,{children:[e.jsxs(fe,{children:[e.jsxs("div",{children:[e.jsx(m,{children:"Name"}),e.jsx(v,{type:"text",name:"name"}),e.jsx(h,{name:"name"})]}),e.jsxs("div",{children:[e.jsx(m,{children:"Email"}),e.jsx(v,{type:"email",name:"email",disabled:!0}),e.jsx(h,{name:"email"})]})]}),e.jsxs(ye,{children:[me.map(r=>e.jsx($e,{id:r.id,name:r.name,label:r.label},r.id)),e.jsxs("div",{children:[e.jsx(m,{children:"Day of Birth"}),e.jsxs("div",{style:{position:"relative"},children:[" ",e.jsx(ze,{number:d.birthday})]})]})]}),e.jsxs(we,{children:[e.jsxs("div",{children:[e.jsx(m,{children:"Blood"}),e.jsx(W,{children:pe.map(r=>e.jsx(w,{id:r.id,name:"blood",label:r.label,onChange:()=>o.setFieldValue("blood",r.id),checked:o.values.blood==r.id},r.id))}),e.jsx(h,{name:"blood"})]}),e.jsxs(W,{children:[he.map(r=>e.jsx(w,{id:r.id,name:"sex",value:r.value,label:r.label},r.id)),e.jsx(h,{name:"sex"})]})]}),e.jsxs(ke,{children:[xe.map(r=>e.jsx(w,{id:r.id,name:"levelActivity",label:r.label,onChange:()=>o.setFieldValue("levelActivity",r.value),checked:o.values.levelActivity===r.value},r.id)),e.jsx(h,{name:"levelActivity"})]}),e.jsx(_e,{type:"submit",disabled:!o.dirty,children:"Save"}),e.jsx(U,{})]})})},Ue=a.div`
    @media screen and (min-width:${i.breakpoint.xl}){
        display:flex;
        flex-direction:row-reverse;
        gap:64px;
    }

`;function Oe(){const n=j(),t=k(s=>s.auth.token),[d,c]=u.useState(!1);return u.useEffect(()=>{(async()=>{try{if(t){const r=(await E.get("/users/current",{headers:{Authorization:`Bearer ${t}`}})).data;n(R(r)),c(!0)}else l.error("Token not available. Unable to fetch user data.")}catch(o){l.error("Error fetching user data:",o)}})()},[n,t]),d?e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx(M,{children:e.jsxs(Ue,{children:[e.jsx(ce,{}),e.jsx(Se,{})]})})})})}):e.jsx(A,{})}export{Oe as default};
